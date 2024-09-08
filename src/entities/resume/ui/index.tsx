import dayjs from 'dayjs';

import SwitchCase from '@/shared/ui/SwitchCase';
import { ResumeWrapper, Title } from './styles';
import { Link } from 'react-router-dom';
import { getDynamicPath } from '@/shared/utils/path';
import { PagePath } from '@/shared/constant/path';

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
        <button
          onClick={(ev) => {
            ev.stopPropagation();
            alert('이력서 보기');
          }}
        >
          이력서 보기
        </button>
      </ResumeWrapper>
    </Link>
  );
}
