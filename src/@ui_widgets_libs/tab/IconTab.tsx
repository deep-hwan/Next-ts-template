/** @jsxImportSource @emotion/react */
import React, { Children, ForwardedRef, HTMLAttributes, ReactElement, forwardRef } from 'react';
import { css } from '@emotion/react';
import { FlexTheme, PaddingTheme, TabTheme, ViewportTheme } from '@/libs/themes/_theme';

// --------------------------------------------
// -------------- Type Interface --------------
// --------------------------------------------
interface IconProps extends HTMLAttributes<HTMLElement> {
  children: ReactElement;
  onClick: () => void;
  size?: number;
  iconSize?: number;
}

// -------------------------------------
// -------------- IconTab --------------
// -------------------------------------
export const IconTab = forwardRef(function IconTab(
  { children, size, iconSize = 24, onClick, ...props }: IconProps,
  ref: ForwardedRef<HTMLButtonElement>,
) {
  const child = Children.only(children);

  const svgChild = React.cloneElement(child, {
    css: {
      width: `100%`,
      height: `100%`,
    },
  });

  return (
    <button
      type="button"
      onClick={onClick}
      ref={ref}
      css={[
        ViewportTheme({ minWidth: size, maxWidth: size, minHeight: size, maxHeight: size }),
        FlexTheme({ align: 'center', crossAlign: 'center' }),
        TabTheme({ borderRadius: 8 }),
        PaddingTheme({ padding: { all: 6 } }),
      ]}
    >
      <div
        onClick={onClick}
        css={css`
          width: ${`${iconSize}px`};
          height: ${`${iconSize}px`};
          display: flex;
          justify-content: center;
          align-items: center;
          transition: 0.3s ease-in-out;
          white-space: nowrap;
          cursor: pointer;

          svg {
            width: '100%';
            height: '100%';
          }

          img {
            width: '100%';
            height: '100%';
          }
        `}
        {...props}
      >
        {svgChild}
      </div>
    </button>
  );
});
