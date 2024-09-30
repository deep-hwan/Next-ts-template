/** @jsxImportSource @emotion/react */
import { ForwardedRef, HTMLAttributes, forwardRef, memo } from 'react';

interface Props extends HTMLAttributes<HTMLDivElement> {
  children?: never[];
  direction?: 'horizontal' | 'vertical';
  width?: number;
  height?: number;
  size?: number;
  color?: string;
  zIndex?: number;
  spacing?: {
    all?: number | string;
    horizontal?: number | string;
    vertical?: number | string;
    top?: number | string;
    bottom?: number | string;
    left?: number | string;
    right?: number | string;
  };
}

export const Divider = memo(
  forwardRef(function Solid(
    { direction = 'horizontal', size = 1, color = '#e9e9e9', spacing, width, height, zIndex = 2, ...props }: Props,
    ref?: ForwardedRef<HTMLDivElement>
  ) {
    const Types = () => {
      if (direction === 'horizontal') return { width: width ? width : '100%', height: size };

      if (direction === 'vertical') return { width: size, height: height ? height : '100%' };
    };

    return (
      <div
        ref={ref}
        css={[
          Types(),
          {
            zIndex,
            backgroundColor: color,
            spacingTop:
              (spacing?.all && spacing?.all) ||
              (spacing?.vertical && spacing?.vertical) ||
              (spacing?.top && spacing?.top),
            spacingBottom:
              (spacing?.all && spacing?.all) ||
              (spacing?.vertical && spacing?.vertical) ||
              (spacing?.bottom && spacing?.bottom),
            spacingLeft:
              (spacing?.all && spacing?.all) ||
              (spacing?.horizontal && spacing?.horizontal) ||
              (spacing?.left && spacing?.left),
            spacingRight:
              (spacing?.all && spacing?.all) ||
              (spacing?.horizontal && spacing?.horizontal) ||
              (spacing?.right && spacing?.right),
          },
        ]}
        {...props}
      />
    );
  })
);
