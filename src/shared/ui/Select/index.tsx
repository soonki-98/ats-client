import Select from 'react-select';
import styled, { CSSObject } from 'styled-components';
import { Theme } from '@/styles/theme';
import { ComponentProps } from 'react';
import Typography from '../Typography';

interface SelectBoxProps extends ComponentProps<Select> {
  label?: string;
}

export const getSelectStyles = (
  theme: Theme
): { [key: string]: CSSObject } => ({
  control: {
    borderColor: theme.colors.dark_30,
    backgroundColor: theme.colors.white,
    color: theme.colors.dark_50,
  },

  container: {
    position: 'relative',
    width: '100%',
    fontSize: '1rem',
  },
  select: {
    width: '100%',
    padding: '0.5rem 1rem',
    border: `1px solid ${theme.colors.dark_30}`,
    borderRadius: '4px',
    backgroundColor: theme.colors.white,
    color: theme.colors.dark_50,
    appearance: 'none',
    fontSize: '1rem',
    cursor: 'pointer',
    '&:focus': {
      borderColor: theme.colors.primary_50,
      outline: 'none',
    },
  },
  arrow: {
    position: 'absolute',
    top: '50%',
    right: '1rem',
    transform: 'translateY(-50%)',
    pointerEvents: 'none',
    color: theme.colors.dark_50,
  },
  option: {
    padding: '0.5rem 1rem',
    backgroundColor: theme.colors.white,
    color: theme.colors.dark_50,
    cursor: 'pointer',
    '&:hover': {
      backgroundColor: theme.colors.primary_10,
    },
  },
  optionSelected: {
    backgroundColor: theme.colors.primary_20,
  },
  menu: {
    backgroundColor: theme.colors.white,
    border: `1px solid ${theme.colors.dark_30}`,
    borderRadius: '4px',
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
  },
});

const StyledSelect = styled(Select)<SelectBoxProps>`
  .react-select__control {
    border: 1px solid
      ${({ theme }) => getSelectStyles(theme).control.borderColor};
    background-color: ${({ theme }) =>
      getSelectStyles(theme).control.backgroundColor};
    color: ${({ theme }) => getSelectStyles(theme).control.color};
  }

  .react-select__menu {
    background-color: ${({ theme }) =>
      getSelectStyles(theme).menu.backgroundColor};
  }

  .react-select__option {
    background-color: ${({ theme }) =>
      getSelectStyles(theme).option.backgroundColor};
    color: ${({ theme }) => getSelectStyles(theme).option.color};
  }

  .react-select__option--is-selected {
    background-color: ${({ theme }) =>
      getSelectStyles(theme).optionSelectedBackgroundColor};
    color: ${({ theme }) => getSelectStyles(theme).optionSelectedColor};
  }

  .react-select__option--is-focused {
    background-color: ${({ theme }) =>
      getSelectStyles(theme).optionHoverBackgroundColor};
    color: ${({ theme }) => getSelectStyles(theme).optionHoverColor};
  }
`;

export default function SelectBox(props: SelectBoxProps) {
  return (
    <label>
      <Typography typoSize="Body1">{props.label}</Typography>
      <StyledSelect {...props} />
    </label>
  );
}
