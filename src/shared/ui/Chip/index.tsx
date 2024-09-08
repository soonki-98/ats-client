import { PropsWithChildren } from 'react';
import styled from 'styled-components';
import { ColorVariant } from '../colors';

interface ChipProps {
  onDelete?: () => void;
  onClick?: () => void;
  color?: 'primary' | 'secondary' | 'success' | 'danger' | 'warning' | 'info';
}

export const Chip = ({
  children,
  onClick,
  onDelete,
  color = 'primary',
}: PropsWithChildren<ChipProps>) => {
  return (
    <StyledChip color={color} onClick={onClick}>
      {children}
      {onDelete && <DeleteIcon onClick={onDelete} />}
    </StyledChip>
  );
};

const DeleteIcon = styled.span`
  display: inline-block;
  width: 16px;
  height: 16px;
  margin-left: 4px;
  background: url('/images/delete.svg') no-repeat center;
  background-size: contain;
  cursor: pointer;
`;

const StyledChip = styled.div<{ color: ChipProps['color'] }>`
  display: block;
  width: fit-content;
  padding: 6px 8px;
  border-radius: 12px;
  background-color: ${({ theme, color }) =>
    theme.colors[`${color}_70` as ColorVariant]};
  color: ${({ theme }) => theme.colors.white};
  font-size: 14px;
  cursor: pointer;
`;
