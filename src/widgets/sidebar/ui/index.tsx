import { Link } from 'react-router-dom';

import { PagePath } from '@/shared/constant/path';
import { useModal } from '@/shared/ui/modal/useModal';

import { StyledAside } from './styles';
import UploadResumeModal from '@/features/uploadResume/ui/modal';

export default function Sidebar() {
  const { showModal } = useModal();

  return (
    <StyledAside>
      <nav>
        <ul>
          <li>
            <Link to={PagePath.RESUME_LIST}>이력서 관리 대시보드</Link>
          </li>
          <li
            onClick={() => {
              showModal(<UploadResumeModal />);
            }}
          >
            이력서 업로드
          </li>
          <li>사용자 설정</li>
        </ul>
      </nav>
    </StyledAside>
  );
}
