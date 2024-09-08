import Typography from '@/shared/ui/Typography';
import { formatBytes, getFileExtension } from '@/shared/utils';

import { FileInfo, UploadedResumeFileContainer } from './styles';

interface Props {
  file: File;
}

export default function UploadedResumeFile(props: Props) {
  return (
    <UploadedResumeFileContainer>
      <Typography typoSize="Title1" ellipsis maxLine={1}>
        {props.file.name}
      </Typography>
      <FileInfo>
        <Typography>{formatBytes(props.file.size)}</Typography>
        <Typography>{getFileExtension(props.file.type)}</Typography>
      </FileInfo>
    </UploadedResumeFileContainer>
  );
}
