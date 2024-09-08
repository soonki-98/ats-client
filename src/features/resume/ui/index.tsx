import { ResumeWrapper } from './styles';

interface Props extends Apis.Resume.Get {}

export default function Resume(props: Props) {
  return (
    <ResumeWrapper>
      <h2>{props.applicantName}</h2>
      <p>{props.jobPosition}</p>
      <p>{props.uploadDate}</p>
      <p>{props.status}</p>
      <a href={props.url}>다운로드</a>
    </ResumeWrapper>
  );
}
