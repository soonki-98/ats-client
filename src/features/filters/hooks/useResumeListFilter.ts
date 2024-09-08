import { useContext } from 'react';

import { ResumeListFilterContext } from '../context/ResumeListFilterContext';

export const useResumeListFilter = () => {
  const resumeListFilterContext = useContext(ResumeListFilterContext);

  if (!resumeListFilterContext) {
    throw new Error(
      'useResumeListFilter must be used within ResumeListFilterProvider'
    );
  }

  return resumeListFilterContext;
};
