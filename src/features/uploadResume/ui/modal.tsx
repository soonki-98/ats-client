import { useDragAndDrop } from '@/shared/hooks/useDragAndDrop';
import { ModalLayout } from '@/shared/ui/modal/styles';
import Typography from '@/shared/ui/Typography';

import { DraggingOverlay } from './styles';

export default function UploadResumeModal() {
  const { isDragging, dndRef } = useDragAndDrop();

  return (
    <ModalLayout ref={dndRef}>
      <Typography typoSize="Head6">이력서 업로드</Typography>
      {isDragging && <DraggingOverlay />}
    </ModalLayout>
  );
}
