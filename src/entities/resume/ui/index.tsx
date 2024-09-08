import dayjs from 'dayjs';
import { ResumeWrapper, Title } from './styles';
import SwitchCase from '../../../shared/ui/SwitchCase';

interface Props extends Apis.Resume.Get {}

export default function Resume(props: Props) {
  return (
    <ResumeWrapper>
      <Title>{props.applicantName}</Title>
      <p>{props.jobPosition}</p>
      <p>{dayjs(props.uploadDate).format('YYYY-MM-DD')}</p>
      <SwitchCase
        condition={props.status}
        cases={{
          accepted: <p>합격</p>,
          pending: <p>대기중</p>,
          rejected: <p>불합격</p>,
        }}
      />
      <a href={props.url}>다운로드</a>
    </ResumeWrapper>
  );
}
