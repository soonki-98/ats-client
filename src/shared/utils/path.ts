import { PagePath } from '../constant/path';

export const getDynamicPath = (
  path: PagePath,
  params: Record<string, string | number>
): string => {
  let dynamicPath: string = path;

  Object.keys(params).forEach((param) => {
    const value = params[param];
    dynamicPath = dynamicPath.replace(`:${param}`, String(value));
  });

  return dynamicPath;
};
