import React, { ForwardedRef, HTMLAttributes, forwardRef, memo } from 'react';

interface Props extends HTMLAttributes<HTMLDivElement> {
  borderRadius?: number | string;
  height: number;
  width?: number;
  opacity?: number;
}

export const Skeleton = memo(
  forwardRef(
    ({ width, height = 10, borderRadius = 4, opacity, ...props }: Props, ref: ForwardedRef<HTMLDivElement>) => {
      const loadAnimation = `
      @keyframes load {
        100% {
          background-position: -100% 0;
        }
      }
    `;

      return (
        <>
          <style>{loadAnimation}</style>
          <div
            ref={ref}
            css={[
              {
                width: '100%',
                minWidth: width,
                maxWidth: width,
                height: height,
                minHeight: height,
                maxHeight: height,
                borderRadius: borderRadius,
                opacity: opacity,
                background: 'linear-gradient(120deg, #e5e5e5 30%, #f0f0f0 38%, #f0f0f0 40%, #e5e5e5 48%)',
                backgroundSize: '200% 100%',
                backgroundPosition: '100% 0',
                animation: 'load 1s infinite', // Added animation property
              },
            ]}
            {...props}
          />
        </>
      );
    }
  )
);
