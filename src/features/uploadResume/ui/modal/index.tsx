import { useState } from 'react';

import { useDragAndDrop } from '@/shared/hooks/useDragAndDrop';
import { ModalLayout } from '@/shared/ui/modal/styles';
import Typography from '@/shared/ui/Typography';
import Button from '@/shared/ui/Button';

import { BottomButtonGroup, DraggingOverlay, FileList } from './styles';
import UploadedResumeFile from '../UploadedResumeFile';
import { useModal } from '@/shared/ui/modal/useModal';

interface Props {
  onUpload?: (files: File[]) => void;
}

export default function UploadResumeModal(props: Props) {
  const { isDragging, dndRef } = useDragAndDrop({
    onFilesDropped(files) {
      const fileList = Array.from(files);

      fileList.forEach((file) => {
        if (file.type !== 'application/pdf') {
          alert('PDF 파일만 업로드 가능합니다.');
          fileList.splice(fileList.indexOf(file), 1);
        }
      });

      setFileList((prev) => {
        return [...prev, ...fileList];
      });
    },
  });
  const [fileList, setFileList] = useState<File[]>([]);
  const { hideModal } = useModal();

  return (
    <ModalLayout ref={dndRef}>
      <Typography typoSize="Head6">이력서 업로드</Typography>

      <FileList>
        {fileList.length === 0 && (
          <Typography typoSize="Body1">
            드래그해서 이력서를 업로드해주세요
          </Typography>
        )}

        {fileList.map((file) => (
          <li key={file.name}>
            <UploadedResumeFile file={file} />
          </li>
        ))}
      </FileList>

      <BottomButtonGroup>
        <Button
          stretch
          filled
          onClick={() => {
            props.onUpload?.(fileList);
          }}
        >
          업로드
        </Button>
        <Button stretch onClick={hideModal} variant="info">
          닫기
        </Button>
      </BottomButtonGroup>

      {isDragging && <DraggingOverlay />}
    </ModalLayout>
  );
}
