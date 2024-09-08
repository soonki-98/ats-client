import { Link } from 'react-router-dom';

import { PagePath } from '@/shared/constant/path';
import { useModal } from '@/shared/ui/modal/useModal';

import { StyledAside } from './styles';

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
              showModal(<div>asdas</div>);
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
