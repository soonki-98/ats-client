export const formatBytes = (bytes: number, decimals = 2) => {
  if (bytes === 0) return '0 Bytes';

  const k = 1024;
  const dm = decimals < 0 ? 0 : decimals;
  const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'];

  const i = Math.floor(Math.log(bytes) / Math.log(k));

  return parseFloat((bytes / Math.pow(k, i)).toFixed(dm)) + ' ' + sizes[i];
};

export const getFileExtension = (fileType: string) => {
  return fileType.split('/')[1];
};

export function getDateString(daysAgo: number): string {
  if (daysAgo === 0) {
    return '오늘';
  } else if (daysAgo === 1) {
    return '어제';
  } else {
    return `${daysAgo}일 전`;
  }
}
