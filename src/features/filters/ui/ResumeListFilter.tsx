import { _resumeList } from '@/__mocks/resumes';
import SelectBox from '@/shared/ui/Select';

import { useResumeListFilter } from '../hooks/useResumeListFilter';

const getPositionFromResumeList = (resumeList: typeof _resumeList) => {
  const positions = resumeList.map((resume) => resume.jobPosition);
  const uniquePositions = Array.from(new Set(positions));
  return uniquePositions.sort();
};

export function ResumeListFilter() {
  const resumeListFilterContext = useResumeListFilter();

  const orderOptions = [
    { label: '최신 순', value: 'desc' },
    { label: '오래된 순', value: 'asc' },
    { label: '이름 순', value: 'name' },
  ];

  const statusOptions = [
    { label: '모든 상태', value: null },
    { label: '합격', value: 'accepted' },
    { label: '대기중', value: 'pending' },
    { label: '불합격', value: 'rejected' },
  ];

  const positionOptions = [
    {
      label: '전체 직군',
      value: null,
    },
    ...getPositionFromResumeList(_resumeList).map((position) => ({
      label: position,
      value: position,
    })),
  ];

  const { setOrder, setPosition, setStatus } = resumeListFilterContext;

  return (
    <div style={{ display: 'flex', margin: '20px 0', gap: 20 }}>
      <SelectBox
        placeholder="정렬 기준"
        defaultValue={orderOptions[0]}
        options={orderOptions}
        onChange={(newOption) => {
          const { value } = newOption as { value: 'desc' | 'asc' | 'name' };
          setOrder(value);
        }}
      />
      <SelectBox
        placeholder="직군"
        defaultValue={positionOptions[0]}
        options={positionOptions}
        onChange={(newOption) => {
          const { value } = newOption as { value: string };
          setPosition(value);
        }}
      />
      <SelectBox
        placeholder="모든 상태"
        defaultValue={statusOptions[0]}
        options={statusOptions}
        onChange={(newOption) => {
          const { value } = newOption as {
            value: 'accepted' | 'pending' | 'rejected';
          };
          setStatus(value);
        }}
      />
    </div>
  );
}
