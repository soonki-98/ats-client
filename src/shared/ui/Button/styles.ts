import styled from 'styled-components';

import { ButtonProps } from './index';

const getButtonStyles = (variant: ButtonProps['variant'], filled: boolean) => {
  switch (variant) {
    case 'error':
      return {
        backgroundColor: filled ? '#e74c3c' : 'transparent' /* Red */,
        color: filled ? '#ffffff' : '#e74c3c',
        borderColor: '#e74c3c',
        hoverBackgroundColor: filled ? '#c0392b' : '#e74c3c',
        hoverColor: '#ffffff',
        hoverBorderColor: '#c0392b',
      };
    case 'warning':
      return {
        backgroundColor: filled ? '#f39c12' : 'transparent' /* Orange */,
        color: filled ? '#ffffff' : '#f39c12',
        borderColor: '#f39c12',
        hoverBackgroundColor: filled ? '#e67e22' : '#f39c12',
        hoverColor: '#ffffff',
        hoverBorderColor: '#e67e22',
      };
    case 'success':
      return {
        backgroundColor: filled ? '#2ecc71' : 'transparent' /* Green */,
        color: filled ? '#ffffff' : '#2ecc71',
        borderColor: '#2ecc71',
        hoverBackgroundColor: filled ? '#27ae60' : '#2ecc71',
        hoverColor: '#ffffff',
        hoverBorderColor: '#27ae60',
      };
    default:
      return {
        backgroundColor: filled
          ? '#3498db'
          : 'transparent' /* Default Light Blue */,
        color: filled ? '#ffffff' : '#3498db',
        borderColor: '#3498db',
        hoverBackgroundColor: filled ? '#2980b9' : '#3498db',
        hoverColor: '#ffffff',
        hoverBorderColor: '#2980b9',
      };
  }
};

const StyledButton = styled.button<ButtonProps>`
  padding: 0.5rem 1rem;
  border: none;
  border-radius: ${({ shape }) =>
    shape === 'rounded' ? '0.25rem' : shape === 'circle' ? '50%' : '0'};
  cursor: pointer;
  background-color: ${({ variant, filled = false }) =>
    getButtonStyles(variant, filled).backgroundColor};
  color: ${({ variant, filled = false }) =>
    getButtonStyles(variant, filled).color};
  border: 1px solid
    ${({ variant }) => getButtonStyles(variant, true).borderColor};
  transition: background-color 0.3s, color 0.3s, border-color 0.3s;

  &:hover {
    background-color: ${({ variant, filled = false }) =>
      getButtonStyles(variant, filled).hoverBackgroundColor};
    color: ${({ variant, filled = false }) =>
      getButtonStyles(variant, filled).hoverColor};
    border-color: ${({ variant }) =>
      getButtonStyles(variant, true).hoverBorderColor};
  }
`;

export default StyledButton;
