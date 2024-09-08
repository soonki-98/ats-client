import { Link } from 'react-router-dom';
import { StyledGnbWrapper } from './styles';
import { PagePath } from '@/shared/constant/path';
import Typography from '@/shared/ui/Typography';

export default function Gnb() {
  return (
    <StyledGnbWrapper>
      <ul>
        <li>
          <Link to={PagePath.HOME}>
            <Typography typoColor="white" typoSize="Head5">
              로고
            </Typography>
          </Link>
        </li>
        <li>
          <Typography typoColor="white" typoSize="Head5">
            유저 프로필
          </Typography>
        </li>
      </ul>
    </StyledGnbWrapper>
  );
}
