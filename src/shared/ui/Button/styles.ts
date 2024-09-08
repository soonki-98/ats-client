import styled from 'styled-components';
import { ButtonProps } from './index';
import { Theme } from '@/styles/theme';

const getButtonStyles = (
  theme: Theme,
  variant: ButtonProps['variant'],
  filled: boolean
) => {
  switch (variant) {
    case 'error':
      return {
        backgroundColor: filled ? theme.colors.danger_50 : 'transparent',
        color: filled ? theme.colors.white : theme.colors.danger_50,
        borderColor: theme.colors.danger_50,
        hoverBackgroundColor: filled
          ? theme.colors.danger_60
          : theme.colors.danger_50,
        hoverColor: theme.colors.white,
        hoverBorderColor: theme.colors.danger_60,
      };
    case 'warning':
      return {
        backgroundColor: filled ? theme.colors.warning_50 : 'transparent',
        color: filled ? theme.colors.white : theme.colors.warning_50,
        borderColor: theme.colors.warning_50,
        hoverBackgroundColor: filled
          ? theme.colors.warning_60
          : theme.colors.warning_50,
        hoverColor: theme.colors.white,
        hoverBorderColor: theme.colors.warning_60,
      };
    case 'success':
      return {
        backgroundColor: filled ? theme.colors.success_50 : 'transparent',
        color: filled ? theme.colors.white : theme.colors.success_50,
        borderColor: theme.colors.success_50,
        hoverBackgroundColor: filled
          ? theme.colors.success_60
          : theme.colors.success_50,
        hoverColor: theme.colors.white,
        hoverBorderColor: theme.colors.success_60,
      };
    default:
      return {
        backgroundColor: filled ? theme.colors.primary_50 : 'transparent',
        color: filled ? theme.colors.white : theme.colors.primary_50,
        borderColor: theme.colors.primary_50,
        hoverBackgroundColor: filled
          ? theme.colors.primary_60
          : theme.colors.primary_50,
        hoverColor: theme.colors.white,
        hoverBorderColor: theme.colors.primary_60,
      };
  }
};

const StyledButton = styled.button<ButtonProps>`
  padding: 0.5rem 1rem;
  border: none;
  border-radius: ${({ shape }) =>
    shape === 'rounded' ? '0.25rem' : shape === 'circle' ? '50%' : '0'};
  cursor: pointer;
  background-color: ${({ theme, variant, filled = false }) =>
    getButtonStyles(theme, variant, filled).backgroundColor};
  color: ${({ theme, variant, filled = false }) =>
    getButtonStyles(theme, variant, filled).color};
  border: 1px solid
    ${({ theme, variant }) => getButtonStyles(theme, variant, true).borderColor};
  transition: background-color 0.3s, color 0.3s, border-color 0.3s;
  width: ${({ stretch }) => (stretch ? '100%' : 'auto')};

  &:hover {
    background-color: ${({ theme, variant, filled = false }) =>
      getButtonStyles(theme, variant, filled).hoverBackgroundColor};
    color: ${({ theme, variant, filled = false }) =>
      getButtonStyles(theme, variant, filled).hoverColor};
    border-color: ${({ theme, variant }) =>
      getButtonStyles(theme, variant, true).hoverBorderColor};
  }
`;

export default StyledButton;
