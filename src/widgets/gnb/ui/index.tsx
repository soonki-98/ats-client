import { Link } from 'react-router-dom';
import { StyledGnbWrapper } from './styles';
import { PagePath } from '@/shared/constant/path';

export default function Gnb() {
  return (
    <StyledGnbWrapper>
      <ul>
        <li>
          <Link to={PagePath.HOME}>로고</Link>
        </li>
        <li>유저 프로필</li>
      </ul>
    </StyledGnbWrapper>
  );
}
