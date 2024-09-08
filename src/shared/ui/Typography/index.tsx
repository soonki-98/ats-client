/**
 * @copyright (C) 2023, rsupport. All rights reserved
 *
 * @license
 * This software and/or source code may be used, copied and/or disseminated only
 * with the written permission of rsupport, or in accordance with the terms
 * and conditions stipulated in the agreement/contract under which the software
 * and/or source code has been supplied by rsupport or its affiliates.
 * Unauthorized use, copying, or dissemination of this file, via any medium, is
 * strictly prohibited, and will constitute an infringement of copyright.
 *
 * @author
 * Soonki Min (skmin@rsupport.com)
 *
 * @description
 *
 * @created at Fri Mar 24 2023
 **/
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
  | 'Head5_B'
  | 'Head6'
  | 'Title1'
  | 'Title1_B'
  | 'Title2'
  | 'Title3'
  | 'Title3_B'
  | 'Body1'
  | 'Body2'
  | 'Body3'
  | 'Body3_MD'
  | 'Body4'
  | 'Body4_SB'
  | 'Body5'
  | 'Body5_SB'
  | 'Body6'
  | 'Body7'
  | 'Button1'
  | 'Button2'
  | 'Button2_underline';

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
      case 'Head5_B':
        return '24px';
      case 'Head6':
        return '20px';
      case 'Title1':
        return '16px';
      case 'Title1_B':
        return '16px';
      case 'Title2':
        return '15px';
      case 'Title3':
        return '14px';
      case 'Title3_B':
        return '14px';
      case 'Body1':
        return '16px';
      case 'Body2':
        return '15px';
      case 'Body3':
        return '14px';
      case 'Body3_MD':
        return '14px';
      case 'Body4':
        return '13px';
      case 'Body4_SB':
        return '13px';
      case 'Body5':
        return '12px';
      case 'Body5_SB':
        return '12px';
      case 'Body6':
        return '11px';
      case 'Body7':
        return '10px';
      case 'Button1':
        return '15px';
      case 'Button2':
        return '14px';
      case 'Button2_underline':
        return '14px';
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
    case 'Head5_B':
      return 34;
    case 'Head6':
      return 28;
    case 'Title1':
      return 24;
    case 'Title1_B':
      return 24;
    case 'Title2':
      return 22;
    case 'Title3':
      return 20;
    case 'Title3_B':
      return 20;
    case 'Body1':
      return 24;
    case 'Body2':
      return 22;
    case 'Body3':
      return 20;
    case 'Body3_MD':
      return 20;
    case 'Body4':
      return 18;
    case 'Body4_SB':
      return 18;
    case 'Body5':
      return 18;
    case 'Body5_SB':
      return 18;
    case 'Body6':
      return 16;
    case 'Body7':
      return 14;
    case 'Button1':
      return 22;
    case 'Button2':
      return 20;
    case 'Button2_underline':
      return 20;
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
      case 'Head5_B':
        return 700;
      case 'Head6':
        return 600;
      case 'Title1':
        return 600;
      case 'Title1_B':
        return 700;
      case 'Title2':
        return 600;
      case 'Title3':
        return 600;
      case 'Title3_B':
        return 700;
      case 'Body1':
        return 400;
      case 'Body2':
        return 400;
      case 'Body3':
        return 400;
      case 'Body3_MD':
        return 500;
      case 'Body4':
        return 400;
      case 'Body4_SB':
        return 600;
      case 'Body5':
        return 400;
      case 'Body5_SB':
        return 600;
      case 'Body6':
        return 600;
      case 'Body7':
        return 600;
      case 'Button1':
        return 500;
      case 'Button2':
        return 500;
      case 'Button2_underline':
        return 500;
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

const textDecoration = (typoSize: TypoSizeType) => {
  switch (typoSize) {
    case 'Button2_underline':
      return css`
        text-decoration: underline;
        text-underline-offset: 2px;
      `;
    default:
      return null;
  }
};

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
	${textDecoration(typoSize)}
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
