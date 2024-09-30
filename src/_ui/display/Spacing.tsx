/** @jsxImportSource @emotion/react */
import { ForwardedRef, HTMLAttributes, forwardRef, memo } from 'react';

// --------------------------------------------
// -------------- Type Interface --------------
// --------------------------------------------

type ThemeType = { direction?: 'row' | 'column'; size?: number };

type Props = {
  children?: never[];
  _mediaQuery?: {
    s1440?: ThemeType;
    s1280?: ThemeType;
    s1080?: ThemeType;
    s768?: ThemeType;
    s600?: ThemeType;
    s428?: ThemeType;
  };
} & HTMLAttributes<HTMLDivElement> &
  ThemeType;

const SizeTheme = ({ direction = 'column', size }: ThemeType) => {
  return {
    width: direction === 'row' ? `${size}px` : '100%',
    height: direction === 'column' ? `${size}px` : '100%',
  };
};

// -------------------------------------
// -------------- Spacing --------------
// -------------------------------------
export const Spacing = memo(
  forwardRef(function Spacing(
    { direction = 'column', size, _mediaQuery, ...props }: Props,
    ref?: ForwardedRef<HTMLDivElement>
  ) {
    const screenSize = [1440, 1280, 1080, 768, 600, 428];
    const MQ = screenSize.map(bp => `@media (max-width: ${bp}px)`);

    return (
      <div
        ref={ref}
        css={{
          flex: 'none',
          transition: '0.3s ease-in-out',
          ...SizeTheme({ direction, size }),
          [MQ[0]]: {
            ...SizeTheme({
              direction: _mediaQuery?.s1440?.direction,
              size: _mediaQuery?.s1440?.size,
            }),
          },
          [MQ[1]]: {
            ...SizeTheme({
              direction: _mediaQuery?.s1280?.direction,
              size: _mediaQuery?.s1280?.size,
            }),
          },
          [MQ[2]]: {
            ...SizeTheme({
              direction: _mediaQuery?.s1080?.direction,
              size: _mediaQuery?.s1080?.size,
            }),
          },
          [MQ[3]]: {
            ...SizeTheme({
              direction: _mediaQuery?.s768?.direction,
              size: _mediaQuery?.s768?.size,
            }),
          },
          [MQ[4]]: {
            ...SizeTheme({
              direction: _mediaQuery?.s600?.direction,
              size: _mediaQuery?.s600?.size,
            }),
          },
          [MQ[5]]: {
            ...SizeTheme({
              direction: _mediaQuery?.s428?.direction,
              size: _mediaQuery?.s428?.size,
            }),
          },
        }}
        {...props}
      />
    );
  })
);
