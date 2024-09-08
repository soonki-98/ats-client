import { useState } from 'react';

import { useDragAndDrop } from '@/shared/hooks/useDragAndDrop';
import { ModalLayout } from '@/shared/ui/modal/styles';
import Typography from '@/shared/ui/Typography';
import Button from '@/shared/ui/Button';

import { BottomButtonGroup, DraggingOverlay, FileList } from './styles';
import UploadedResumeFile from '../UploadedResumeFile';

interface Props {
  onUpload?: (files: File[]) => void;
}

export default function UploadResumeModal(props: Props) {
  const { isDragging, dndRef } = useDragAndDrop({
    onFilesDropped(files) {
      const fileList = Array.from(files);
      setFileList((prev) => {
        return [...prev, ...fileList];
      });
    },
  });
  const [fileList, setFileList] = useState<File[]>([]);

  return (
    <ModalLayout ref={dndRef}>
      <Typography typoSize="Head6">이력서 업로드</Typography>

      <FileList>
        {fileList.map((file) => (
          <li key={file.name}>
            <UploadedResumeFile file={file} />
          </li>
        ))}
      </FileList>

      <BottomButtonGroup>
        <Button
          filled
          onClick={() => {
            props.onUpload?.(fileList);
          }}
        >
          업로드
        </Button>
        <Button variant="default">닫기</Button>
      </BottomButtonGroup>

      {isDragging && <DraggingOverlay />}
    </ModalLayout>
  );
}
