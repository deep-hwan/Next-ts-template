/** @jsxImportSource @emotion/react */
import { HTMLAttributes, ReactNode } from 'react';
import { extandedProps } from './_utils/extandedProps';
import { extandedMediaQuery, TxtTheme } from './_utils/themes';
import { TxtType } from './_utils/types';

//
type Types = {
  children: ReactNode;
} & TxtType &
  HTMLAttributes<HTMLElement>;

//
export function TxtSpan(props: Types & { [key: string]: any }) {
  const { size, weight, onClick, ...restProps } = props;

  const { elementProps } = extandedProps(restProps);
  const mq_styles = extandedMediaQuery({ _mediaQuery: props._mediaQuery });

  const TYPOGRAPH_WEIGHT = {
    lighter: { fontWeight: '300' },
    normal: { fontWeight: '400' },
    medium: { fontWeight: '500' },
    bold: { fontWeight: '600' },
  } as const;

  const txt_theme = TxtTheme({
    ...restProps,
    size: typeof size === 'string' ? size : (size as number) / 16 + 'rem',
    weight: TYPOGRAPH_WEIGHT[weight ?? 'normal'].fontWeight as any,
    userSelect: props.userSelect ? props.userSelect : onClick && 'none',
    cursor: props.cursor ? props.cursor : onClick && 'pointer',
  });

  const globel_theme = {
    ...(txt_theme as any),
  };

  //
  //

  return (
    <span className='span_txt' css={{ ...(globel_theme as any) }} onClick={onClick} {...elementProps}>
      {props.children}
    </span>
  );
}
