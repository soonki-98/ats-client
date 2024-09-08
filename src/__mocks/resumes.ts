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
];

const statuses = ['pending', 'accepted', 'rejected'] as const;

const generateRandomDate = () =>
  dayjs()
    .subtract(Math.floor(Math.random() * 365), 'day')
    .valueOf();

const generateResumeList = (count: number): Apis.Resume.Get[] => {
  const names = [
    '김덕배',
    '권도안',
    '강히송',
    '이승훈',
    '오린이',
    '홍길동',
    '이순신',
    '유관순',
    '김유신',
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

// Initial data
const initialData: Apis.Resume.Get[] = [
  {
    id: '1',
    applicantName: '김덕배',
    jobPosition: '프론트엔드 개발자',
    uploadDate: 1725693536000,
    status: 'pending',
    url: './test.pdf',
  },
  {
    id: '2',
    applicantName: '권도안',
    jobPosition: '백엔드 개발자',
    uploadDate: 1722693536000,
    status: 'accepted',
    url: './test.pdf',
  },
  {
    id: '3',
    applicantName: '강히송',
    jobPosition: 'UI/UX 디자이너',
    uploadDate: 1724693536000,
    status: 'rejected',
    url: './test.pdf',
  },
  {
    id: '4',
    applicantName: '이승훈',
    jobPosition: '풀스택 개발자',
    uploadDate: 1723993536000,
    status: 'pending',
    url: './test.pdf',
  },
  {
    id: '5',
    applicantName: '오린이',
    jobPosition: '데이터 엔지니어',
    uploadDate: 1718693536000,
    status: 'accepted',
    url: './test.pdf',
  },
  {
    id: '6',
    applicantName: '홍길동',
    jobPosition: '프로젝트 매니저',
    uploadDate: 1717693536000,
    status: 'pending',
    url: './test.pdf',
  },
  {
    id: '7',
    applicantName: '이순신',
    jobPosition: '시스템 아키텍트',
    uploadDate: 1716693536000,
    status: 'accepted',
    url: './test.pdf',
  },
  {
    id: '8',
    applicantName: '유관순',
    jobPosition: '데이터 분석가',
    uploadDate: 1715693536000,
    status: 'rejected',
    url: './test.pdf',
  },
  {
    id: '9',
    applicantName: '김유신',
    jobPosition: '프론트엔드 개발자',
    uploadDate: 1714693536000,
    status: 'pending',
    url: './test.pdf',
  },
  {
    id: '10',
    applicantName: '이순신',
    jobPosition: '백엔드 개발자',
    uploadDate: 1713693536000,
    status: 'accepted',
    url: './test.pdf',
  },
];

// Generate additional 100 items
const additionalData = generateResumeList(100);

// Combine initial data with additional data
export const _resumeList = [...initialData, ...additionalData];
