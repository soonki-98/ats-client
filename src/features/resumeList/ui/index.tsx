import Resume from '@/entities/resume/ui';

import { _resumeList } from '../../../__mocks/resumes';
import { StyledSection, StyledUl, Title } from './styles';

export default function ResumeList() {
  return (
    <StyledSection className="resume-list">
      <Title>이력서 리스트</Title>
      <StyledUl>
        {_resumeList.map((resume) => (
          <li key={resume.id}>
            <Resume {...resume} />
          </li>
        ))}
      </StyledUl>
    </StyledSection>
  );
}
