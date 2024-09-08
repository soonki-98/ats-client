import Resume from '@/entities/resume/ui';
import { _resumeList } from '@/__mocks/resumes';
import Typography from '@/shared/ui/Typography';
import { ResumeListFilterProvider } from '@/features/filters/context/ResumeListFilterContext';
import { useResumeListFilter } from '@/features/filters/hooks/useResumeListFilter';

import { StyledSection, StyledUl } from './styles';
import { ResumeListFilter } from '@/features/filters/ui/ResumeListFilter';

function ResumeListSection() {
  const { order, position, status } = useResumeListFilter();

  return (
    <StyledSection className="resume-list">
      <Typography typoSize="Head4">이력서 리스트</Typography>

      <ResumeListFilter />

      <StyledUl>
        {_resumeList
          .sort((a, b) => {
            if (order === 'desc') {
              return b.uploadDate - a.uploadDate;
            } else if (order === 'asc') {
              return a.uploadDate - b.uploadDate;
            } else {
              return a.applicantName.localeCompare(b.applicantName);
            }
          })
          .filter((resume) => {
            if (position && resume.jobPosition !== position) {
              return false;
            }
            if (status && resume.status !== status) {
              return false;
            }
            return true;
          })
          .map((resume) => (
            <li key={resume.id}>
              <Resume {...resume} />
            </li>
          ))}
      </StyledUl>
    </StyledSection>
  );
}

export default function ResumeList() {
  return (
    <ResumeListFilterProvider>
      <ResumeListSection />
    </ResumeListFilterProvider>
  );
}
