import { Link } from 'react-router-dom';
import { PagePath } from '@/shared/constant/path';
import { StyledAside } from './styles';

export default function Sidebar() {
  return (
    <StyledAside>
      <nav>
        <ul>
          <li>
            <Link to={PagePath.RESUME_LIST}>이력서 관리 대시보드</Link>
          </li>
          <li>이력서 업로드</li>
          <li>사용자 설정</li>
        </ul>
      </nav>
    </StyledAside>
  );
}
