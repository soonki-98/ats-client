// theme.ts

import React from 'react';
import { ThemeProvider as StyledThemeProvider } from 'styled-components';

import { colorPalette } from '@/shared/ui/colors';

export type Theme = {
  colors: typeof colorPalette;
};

export const theme: Theme = {
  colors: colorPalette,
};

// ThemeProvider.tsx

export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  return <StyledThemeProvider theme={theme}>{children}</StyledThemeProvider>;
};
