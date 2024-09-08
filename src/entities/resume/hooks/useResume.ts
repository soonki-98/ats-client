import { _resumeList } from '@/__mocks/resumes';

export const useResume = (id?: string) => {
  if (!id) {
    throw new Error('id is required');
  }

  return _resumeList.find((resume) => resume.id === id);
};
