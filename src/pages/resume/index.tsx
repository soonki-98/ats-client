import { useParams } from 'react-router-dom';
import dayjs from 'dayjs';

import { useResume } from '@/entities/resume/hooks/useResume';
import SwitchCase from '@/shared/ui/SwitchCase';

export default function Resume() {
  const params = useParams<{ id: string }>();
  const { id } = params;

  const resume = useResume(id);

  if (!resume) {
    return <div>Not Found</div>;
  }

  return (
    <div>
      <h1>{resume.applicantName}의 이력서</h1>
      <div>
        <ul>
          <li>이름: {resume.applicantName}</li>
          <li>직무: {resume.jobPosition}</li>
          <li>업로드 날짜: {dayjs(resume.uploadDate).format('YYYY-MM-DD')}</li>
          <li>
            상태:
            <SwitchCase
              condition={resume.status}
              cases={{
                accepted: '합격',
                pending: '대기중',
                rejected: '불합격',
              }}
            />
          </li>
        </ul>
      </div>
    </div>
  );
}
