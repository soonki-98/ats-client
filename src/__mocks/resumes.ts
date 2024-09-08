import dayjs from 'dayjs';

const jobPositions = [
  '프론트엔드 개발자',
  '백엔드 개발자',
  'UI/UX 디자이너',
  '풀스택 개발자',
  '데이터 엔지니어',
  '프로젝트 매니저',
  '시스템 아키텍트',
  '데이터 분석가',
  'AI 엔지니어',
  '기획자',
  '마케팅 담당자',
  '영업 담당자',
  '인사 담당자',
  '재무 담당자',
];

const statuses = ['pending', 'accepted', 'rejected'] as const;

const generateRandomDate = () =>
  dayjs()
    .subtract(Math.floor(Math.random() * 365), 'day')
    .valueOf();

const generateResumeList = (count: number): Apis.Resume.Get[] => {
  const names = [
    '김철수',
    '이영희',
    '박민수',
    '정지영',
    '오영미',
    '이지훈',
    '최지원',
    '김민지',
    '박지훈',
    '이지원',
    '김민수',
    '박지영',
    '이민수',
  ];

  const resumeList = [];

  for (let i = 1; i <= count; i++) {
    const randomName = names[Math.floor(Math.random() * names.length)];
    const randomJobPosition =
      jobPositions[Math.floor(Math.random() * jobPositions.length)];
    const randomStatus = statuses[Math.floor(Math.random() * statuses.length)];
    const randomUploadDate = generateRandomDate();
    const url = `./test_${i}.pdf`;

    resumeList.push({
      id: (i + 10).toString(),
      applicantName: randomName,
      jobPosition: randomJobPosition,
      uploadDate: randomUploadDate,
      status: randomStatus,
      url: url,
    });
  }
  return resumeList;
};

// Combine initial data with additional data
export const _resumeList = generateResumeList(100);
