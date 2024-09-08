import Resume from '@/entities/resume/ui';

import { _resumeList } from '../../../__mocks/resumes';
import { StyledSection, StyledUl } from './styles';
import Typography from '@/shared/ui/Typography';

export default function ResumeList() {
  return (
    <StyledSection className="resume-list">
      <Typography typoSize="Head4" style={{ marginBottom: '20px' }}>
        이력서 리스트
      </Typography>
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
