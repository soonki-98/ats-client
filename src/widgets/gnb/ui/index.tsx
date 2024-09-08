import { Link } from 'react-router-dom';
import { StyledGnbWrapper } from './styles';

export default function Gnb() {
  return (
    <StyledGnbWrapper>
      <ul>
        <li>
          <Link to="/">로고</Link>
        </li>
        <li>유저 프로필</li>
      </ul>
    </StyledGnbWrapper>
  );
}
