import StyledButton from './styles';

export type ButtonProps = {
  filled?: boolean;
  shape?: 'rounded' | 'circle' | 'square';
  variant?: 'default' | 'error' | 'warning' | 'success';
  stretch?: boolean;
};

export default function Button(
  props: ButtonProps & React.ButtonHTMLAttributes<HTMLButtonElement>
) {
  const {
    children,
    onClick,
    shape = 'rounded',
    filled = false,
    variant = 'default',
    stretch = false,
    ...rest
  } = props;

  return (
    <StyledButton
      shape={shape}
      variant={variant}
      filled={filled}
      stretch={stretch}
      onClick={onClick}
      {...rest}
    >
      {children}
    </StyledButton>
  );
}
