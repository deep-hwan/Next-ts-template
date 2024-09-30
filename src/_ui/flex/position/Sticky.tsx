/** @jsxImportSource @emotion/react */
import { Interpolation, Theme } from '@emotion/react';
import { forwardRef, HTMLAttributes, ReactNode } from 'react';
import { extandedProps } from '../_utils/extandedProps';
import { extandedMediaQuery, ViewTheme } from '../_utils/themes';
import { ViewType } from '../_utils/types';

//
type Types = {
  as?: 'section' | 'nav' | 'div' | 'aside' | 'form' | 'ul' | 'li' | 'ol';
  children: ReactNode;
} & Omit<ViewType, 'positionType'> &
  HTMLAttributes<HTMLDivElement | HTMLFormElement | HTMLLIElement | HTMLOListElement | HTMLUListElement | HTMLElement>;

//
const Sticky = forwardRef<
  HTMLDivElement | HTMLFormElement | HTMLLIElement | HTMLOListElement | HTMLUListElement | HTMLElement,
  Types
>(({ as = 'div', children, direction, onClick, ...props }, ref) => {
  const { elementProps } = extandedProps(props);
  const mq_styles = extandedMediaQuery({ _mediaQuery: props._mediaQuery });

  const view_theme = ViewTheme({
    ...props,
    positionType: 'sticky',
    width: props.width,
    display: props.display ?? 'flex',
    direction: direction ?? 'row',
    align: props?.align ?? 'stretch',
    userSelect: props.userSelect ? props.userSelect : onClick && 'none',
    cursor: props.cursor ? props.cursor : onClick && 'pointer',
    backgroundRepeat: props?.backgroundRepeat ?? 'no-repeat',
    backgroundSize: props?.backgroundSize ?? 'cover',
    backgroundPosition: props?.backgroundPosition ?? 'center',
  });

  const global_theme = {
    ...(view_theme as any),
    ...mq_styles,
    '&:hover': ViewTheme({ ...props._hover }),
    '&:active': ViewTheme({ ...props._active }),
    '&:disabled': ViewTheme({
      ...props._disabled,
      direction: direction ?? 'row',
    }),
  } as Interpolation<Theme>;

  const Element = as || 'div';

  return (
    <Element
      css={global_theme}
      className={`flex-row flex-row-${as}`} // Update class names to reflect 'row' rather than 'column'
      onClick={onClick}
      {...elementProps}
      ref={ref} // Forward the ref to the appropriate element
    >
      {children}
    </Element>
  );
});

export default Sticky;
