/** @jsxImportSource @emotion/react */
import { HTMLAttributes, ReactNode } from 'react';
import { extandedProps } from './_utils/extandedProps';
import { extandedMediaQuery, TxtTheme } from './_utils/themes';
import { TxtType } from './_utils/types';

//
type Types = {
  as?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'strong' | 'b' | 'i' | 'p' | 'div';
  children: ReactNode;
} & TxtType &
  HTMLAttributes<HTMLElement>;

//
export function Txt(props: Types & { [key: string]: any }) {
  const { as = 'p', size, weight, onClick, ...restProps } = props;

  const { elementProps } = extandedProps(restProps);
  const mq_styles = extandedMediaQuery({ _mediaQuery: props._mediaQuery });

  const TYPOGRAPH_WEIGHT = {
    lighter: { fontWeight: '300' },
    normal: { fontWeight: 400 },
    medium: { fontWeight: '500' },
    bold: { fontWeight: '600' },
  } as const;

  const txt_size_extend = () => {
    if (size) return typeof size === 'string' ? size : (size ?? 15) / 16 + 'rem';
    if (as === 'h1') return 54 / 16 + 'rem';
    if (as === 'h2') return 46 / 16 + 'rem';
    if (as === 'h3') return 42 / 16 + 'rem';
    if (as === 'h4') return 38 / 16 + 'rem';
    if (as === 'h5') return 30 / 16 + 'rem';
    if (as === 'h6') return 26 / 16 + 'rem';
    if (as === 'b') return 24 / 16 + 'rem';
    if (as === 'strong') return 18 / 16 + 'rem';
    if (as === 'i') return 15 / 16 + 'rem';
    if (as === 'p') return 15 / 16 + 'rem';

    return typeof size === 'string' ? size : (size ?? 15 / 16) + 'rem';
  };

  const txt_weight = () => {
    if (weight) return TYPOGRAPH_WEIGHT[weight ?? 'normal'].fontWeight;
    if (as === 'h1') return TYPOGRAPH_WEIGHT['bold'].fontWeight;
    if (as === 'h2') return TYPOGRAPH_WEIGHT['bold'].fontWeight;
    if (as === 'h3') return TYPOGRAPH_WEIGHT['bold'].fontWeight;
    if (as === 'h4') return TYPOGRAPH_WEIGHT['bold'].fontWeight;
    if (as === 'h5') return TYPOGRAPH_WEIGHT['bold'].fontWeight;
    if (as === 'h6') return TYPOGRAPH_WEIGHT['bold'].fontWeight;
    if (as === 'b') return TYPOGRAPH_WEIGHT['bold'].fontWeight;
    if (as === 'strong') return TYPOGRAPH_WEIGHT['medium'].fontWeight;
    if (as === 'i') return TYPOGRAPH_WEIGHT['normal'].fontWeight;
    if (as === 'p') return TYPOGRAPH_WEIGHT['normal'].fontWeight;

    return TYPOGRAPH_WEIGHT[weight ?? 'normal'].fontWeight;
  };

  const txt_ellipsis_extend = {
    maxWidth: restProps?.ellipsis?.width ?? restProps.maxWidth,
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    WebkitBoxOrient: 'vertical',
    WebkitLineClamp: restProps?.ellipsis?.line,
  } as any;

  const txt_theme = TxtTheme({
    ...restProps,
    size: txt_size_extend(),
    weight: txt_weight(),
    color: restProps.color ?? '#4e4e51',
    txtAlign: restProps.txtAlign ?? 'start',
    whiteSpace: props?.ellipsis?.ellipsis ? 'normal' : (props.whiteSpace ?? 'pre-line'),
    userSelect: props.userSelect ? props.userSelect : onClick && 'none',
    cursor: props.cursor ? props.cursor : onClick && 'pointer',
    ...(restProps.ellipsis?.ellipsis && txt_ellipsis_extend),
  });

  const globel_theme = {
    ...(txt_theme as any),
    ...mq_styles,

    '&:hover': TxtTheme({ ...restProps._hover }),
    '&:active': TxtTheme({ ...restProps._active }),
    '&:disabled': TxtTheme({ ...restProps._disabled }),
  };

  const Element = as || 'p';

  return (
    <>
      <Element className={as + '_txt'} css={{ ...(globel_theme as any) }} onClick={onClick} {...elementProps}>
        {props.children}
      </Element>
    </>
  );
}
