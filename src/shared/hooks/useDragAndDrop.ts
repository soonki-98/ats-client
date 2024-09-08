import { useState, useCallback, useRef, useEffect } from 'react';

interface UseDragAndDropReturnType<E extends HTMLElement = HTMLDivElement> {
  isDragging: boolean;
  dndRef: React.RefObject<E>;
}

export const useDragAndDrop = <
  E extends HTMLElement = HTMLDivElement
>(dndEvents?: {
  onFilesDropped: (files: FileList) => void;
}): UseDragAndDropReturnType<E> => {
  const [isDragging, setIsDragging] = useState(false);
  const dndRef = useRef<E>(null);
  const onFilesDropped = dndEvents?.onFilesDropped;

  const handleDragOver = useCallback((event: DragEvent) => {
    event.preventDefault();
    setIsDragging(true);
  }, []);

  const handleDragLeave = useCallback((event: DragEvent) => {
    if (
      event.relatedTarget &&
      dndRef.current?.contains(event.relatedTarget as Node)
    ) {
      return; // 부모 내부의 자식으로 이동한 경우는 무시
    }

    event.preventDefault();
    setIsDragging(false);
  }, []);

  const handleDragEnter = useCallback((event: DragEvent) => {
    event.preventDefault();
    setIsDragging(true);
  }, []);

  const handleDrop = useCallback(
    (event: DragEvent) => {
      event.preventDefault();
      event.stopPropagation();
      setIsDragging(false);

      if (event.dataTransfer?.files && event.dataTransfer.files.length > 0) {
        onFilesDropped?.(event.dataTransfer.files);
        event.dataTransfer.clearData();
      }
    },
    [onFilesDropped]
  );

  // dndRef가 연결된 엘리먼트에서 drag 이벤트들을 연결
  useEffect(() => {
    const dropArea = dndRef.current;
    if (!dropArea) {
      return;
    }

    dropArea.addEventListener('dragenter', handleDragEnter);
    dropArea.addEventListener('dragover', handleDragOver);
    dropArea.addEventListener('dragleave', handleDragLeave);
    dropArea.addEventListener('drop', handleDrop);

    return () => {
      dropArea.removeEventListener('dragenter', handleDragEnter);
      dropArea.removeEventListener('dragover', handleDragOver);
      dropArea.removeEventListener('dragleave', handleDragLeave);
      dropArea.removeEventListener('drop', handleDrop);
    };
  }, [handleDragEnter, handleDragLeave, handleDrop, handleDragOver]);

  return {
    isDragging,
    dndRef,
  };
};
