/** @jsxImportSource @emotion/react */
import { ButtonHTMLAttributes, ForwardedRef, forwardRef } from 'react';
import { extandedProps } from './_utils/extandedProps';
import { TabTheme, extandedMediaQuery } from './_utils/themes';
import { TabType } from './_utils/types';

//
type AttriType = Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'color' | 'disabled'>;

//
type Types = {
  as?: 's' | 'm' | 'l';
  disabled?: boolean;
} & AttriType &
  TabType;

//
export const Button = forwardRef<HTMLButtonElement, Types>((props: Types, ref: ForwardedRef<HTMLButtonElement>) => {
  const { as = 'l', _disabled, ...restProps } = props;
  const { elementProps } = extandedProps(restProps);

  const TAB_SIZE = {
    s: {
      minHeight: 'auto',
      fontSize: `${12 / 16}rem`,
      borderRadius: 12,
    },
    m: {
      minHeight: 'auto',
      fontSize: `${14 / 16}rem`,
      borderRadius: 14,
    },
    l: {
      minHeight: 56,
      fontSize: `${15 / 16}rem`,
      borderRadius: 18,
    },
  };

  const mq_styles = extandedMediaQuery({ _mediaQuery: props._mediaQuery });

  const tab_theme = TabTheme({
    ...props,
    display: props.display ?? 'flex',
    direction: props.direction ?? 'row',
    align: props.align ?? 'center',
    crossAlign: props.crossAlign ?? 'center',
    minHeight: restProps.minHeight ?? TAB_SIZE[as].minHeight,
    whiteSpace: restProps.whiteSpace ?? 'nowrap',
    txtColor: restProps.txtColor ?? '#fff',
    padding:
      (as === 's' && { vertical: 11, horizontal: 16 }) ||
      (as === 'm' && { vertical: 13, horizontal: 18 }) ||
      (as === 'l' && { vertical: 15, horizontal: 20 }) ||
      restProps.padding,
    border: props.border ?? { solid: 1, color: 'transparent' },
    borderRadius: restProps.borderRadius ?? TAB_SIZE[as].borderRadius,
    backgroundColor: (restProps?.backgroundColor as string) ?? '#5b94f0',
    cursor: 'pointer',
    transitionTime: props.transitionTime ?? 0.3,
  });

  const globel_theme = {
    ...(tab_theme as any),
    ...mq_styles,

    '&:hover': TabTheme({
      ...props._hover,
    }),
    '&:active': TabTheme({
      ...props._active,
      opacity: 0.8,
    }),
    '&:disabled': TabTheme({
      ...props._disabled,
      backgroundColor: '#ccc',
      txtColor: '#fff',
    }),
  };

  return (
    <button className={'button' + as} ref={ref} type={restProps.type ?? 'button'} css={globel_theme} {...elementProps}>
      {props.children}
    </button>
  );
});
