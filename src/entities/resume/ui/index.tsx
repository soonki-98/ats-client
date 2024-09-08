import dayjs from 'dayjs';
import { Link } from 'react-router-dom';

import SwitchCase from '@/shared/ui/SwitchCase';
import { getDynamicPath } from '@/shared/utils/path';
import { PagePath } from '@/shared/constant/path';

import { ResumeWrapper, Title } from './styles';

interface Props extends Apis.Resume.Get {}

export default function Resume(props: Props) {
  return (
    <Link to={getDynamicPath(PagePath.RESUME, { id: props.id })}>
      <ResumeWrapper>
        <Title>{props.applicantName}</Title>
        <p>{props.jobPosition}</p>
        <p>{dayjs(props.uploadDate).format('YYYY-MM-DD')}</p>
        <p>
          <SwitchCase
            condition={props.status}
            cases={{
              accepted: '합격',
              pending: '대기중',
              rejected: '불합격',
            }}
          />
        </p>
      </ResumeWrapper>
    </Link>
  );
}
