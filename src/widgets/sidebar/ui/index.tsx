import { Link } from 'react-router-dom';

import { PagePath } from '@/shared/constant/path';
import { useModal } from '@/shared/ui/modal/useModal';
import Typography from '@/shared/ui/Typography';
import UploadResumeModal from '@/features/uploadResume/ui/modal';

import { StyledAside, StyledSidebarMenu } from './styles';

export default function Sidebar() {
  const { showModal } = useModal();

  return (
    <StyledAside>
      <nav>
        <ul>
          <Link to={PagePath.HOME}>
            <StyledSidebarMenu>
              <Typography typoColor="white" typoSize="Body1">
                대시보드
              </Typography>
            </StyledSidebarMenu>
          </Link>

          <Link to={PagePath.RESUME_LIST}>
            <StyledSidebarMenu>
              <Typography typoColor="white" typoSize="Body1">
                이력서 목록
              </Typography>
            </StyledSidebarMenu>
          </Link>

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
