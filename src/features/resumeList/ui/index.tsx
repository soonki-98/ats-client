import { _resumeList } from '../../../__mocks/resumes';
import Resume from '../../../entities/resume/ui';

export default function ResumeList() {
  return (
    <section className="resume-list">
      <h1>이력서 리스트</h1>
      <ul>
        {_resumeList.map((resume) => (
          <Resume key={resume.id} {...resume} />
        ))}
      </ul>
    </section>
  );
}
