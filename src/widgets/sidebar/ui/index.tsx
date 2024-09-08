import { Link } from 'react-router-dom';

import { PagePath } from '@/shared/constant/path';
import { useModal } from '@/shared/ui/modal/useModal';

import { StyledAside, StyledSidebarMenu } from './styles';
import UploadResumeModal from '@/features/uploadResume/ui/modal';
import Typography from '@/shared/ui/Typography';

export default function Sidebar() {
  const { showModal } = useModal();

  return (
    <StyledAside>
      <nav>
        <ul>
          <StyledSidebarMenu>
            <Link to={PagePath.RESUME_LIST}>
              <Typography typoColor="white" typoSize="Body1">
                이력서 목록
              </Typography>
            </Link>
          </StyledSidebarMenu>
          <StyledSidebarMenu
            onClick={() => {
              showModal(<UploadResumeModal />);
            }}
          >
            <Typography typoColor="white" typoSize="Body1">
              이력서 업로드
            </Typography>
          </StyledSidebarMenu>
          <StyledSidebarMenu>
            <Typography typoColor="white" typoSize="Body1">
              사용자 설정
            </Typography>
          </StyledSidebarMenu>
        </ul>
      </nav>
    </StyledAside>
  );
}
