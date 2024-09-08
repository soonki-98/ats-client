import dayjs from 'dayjs';
import { ResumeWrapper, Title } from './styles';
import SwitchCase from '../../../shared/ui/SwitchCase';
import { useNavigate } from 'react-router-dom';

interface Props extends Apis.Resume.Get {}

export default function Resume(props: Props) {
  const navigate = useNavigate();
  return (
    <ResumeWrapper
      onClick={() => {
        navigate({ pathname: `/resume/${props.id}` });
      }}
    >
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
      <button
        onClick={(ev) => {
          ev.stopPropagation();
          alert('이력서 보기');
        }}
      >
        이력서 보기
      </button>
    </ResumeWrapper>
  );
}
