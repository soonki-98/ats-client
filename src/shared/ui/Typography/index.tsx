import React, { AllHTMLAttributes, forwardRef } from 'react';
import styled, { css } from 'styled-components';

type Options = {
  maxLine?: number;
  ellipsis?: boolean;
  align?: 'center' | 'left' | 'right';
  stretch?: boolean;
};

type Props = {
  typoSize?: TypoSizeType;
} & Options;

type TypoSizeType =
  | 'Head1'
  | 'Head2'
  | 'Head3'
  | 'Head4'
  | 'Head5'
  | 'Head6'
  | 'Title1'
  | 'Title2'
  | 'Title3'
  | 'Body1'
  | 'Body2'
  | 'Body3'
  | 'Body4'
  | 'Body5'
  | 'Body6';

const fontSize = (typoSize: TypoSizeType) => css`
  font-size: ${(() => {
    switch (typoSize) {
      case 'Head1':
        return '40px';
      case 'Head2':
        return '36px';
      case 'Head3':
        return '32px';
      case 'Head4':
        return '28px';
      case 'Head5':
        return '24px';
      case 'Head6':
        return '20px';
      case 'Title1':
        return '16px';
      case 'Title2':
        return '15px';
      case 'Title3':
        return '14px';
      case 'Body1':
        return '16px';
      case 'Body2':
        return '15px';
      case 'Body3':
        return '14px';
      case 'Body4':
        return '13px';
      case 'Body5':
        return '12px';
      case 'Body6':
        return '11px';
    }
  })()};
`;

const getLineHeight = (typoSize: TypoSizeType) => {
  switch (typoSize) {
    case 'Head1':
      return 56;
    case 'Head2':
      return 52;
    case 'Head3':
      return 46;
    case 'Head4':
      return 40;
    case 'Head5':
      return 34;
    case 'Head6':
      return 28;
    case 'Title1':
      return 24;
    case 'Title2':
      return 22;
    case 'Title3':
      return 20;
    case 'Body1':
      return 24;
    case 'Body2':
      return 22;
    case 'Body3':
      return 20;
    case 'Body4':
      return 18;
    case 'Body5':
      return 18;
    case 'Body6':
      return 16;
    default:
      return 20;
  }
};

const lineHeight = (typoSize: TypoSizeType) => css`
  line-height: ${getLineHeight(typoSize)}px;
`;

const fontWeight = (typoSize: TypoSizeType) => css`
  font-weight: ${(() => {
    switch (typoSize) {
      case 'Head1':
        return 600;
      case 'Head2':
        return 600;
      case 'Head3':
        return 600;
      case 'Head4':
        return 600;
      case 'Head5':
        return 600;
      case 'Head6':
        return 600;
      case 'Title1':
        return 600;
      case 'Title2':
        return 600;
      case 'Title3':
        return 600;
      case 'Body1':
        return 400;
      case 'Body2':
        return 400;
      case 'Body3':
        return 400;
      case 'Body4':
        return 400;
      case 'Body5':
        return 400;
      case 'Body6':
        return 600;
    }
  })()};
`;

const maxHeight = (typoSize: TypoSizeType = 'Body3', maxLine: number) => css`
  max-height: ${getLineHeight(typoSize) * maxLine}px;
  overflow: hidden;
`;

const ellipsis = (maxLine?: number) => css`
  text-overflow: ellipsis;
  ${(!maxLine || maxLine > 1) && `word-break: break-all`};
  ${maxLine && maxLine === 1 && `white-space: nowrap`};
`;

const overflowCSS = (
  typoSize: TypoSizeType = 'Body3',
  options?: { maxLine?: number; ellipsis?: boolean }
) => css`
  ${options?.maxLine && maxHeight(typoSize, options?.maxLine)};
  ${options?.ellipsis && ellipsis(options.maxLine)}
`;

const textAlign = (align: Options['align']) => css`
  text-align: ${align};
`;

export const TypographyCSS = (
  typoSize: TypoSizeType = 'Body3',
  options?: Options
) => css`
  ${fontSize(typoSize)}
  ${fontWeight(typoSize)}
	${lineHeight(typoSize)}
	${overflowCSS(typoSize, options)}
	${options?.align && textAlign(options.align)}
	${options?.stretch && `width: 100%;`}
`;

const Typography = styled(
  forwardRef(
    (
      props: {
        tag?: keyof JSX.IntrinsicElements;
      } & Props &
        AllHTMLAttributes<HTMLElement>,
      ref
    ) => {
      const { tag = 'span', ...rest } = props;

      delete rest.typoSize;
      delete rest.maxLine;
      delete rest.ellipsis;
      delete rest.stretch;

      return React.createElement(tag, { ...rest, ref });
    }
  )
)`
  ${(props) =>
    TypographyCSS(props.typoSize as TypoSizeType, {
      ...props,
    })}
`;

export default Typography;
