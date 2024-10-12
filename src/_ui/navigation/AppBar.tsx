/** @jsxImportSource @emotion/react */
import { ForwardedRef, ReactNode, forwardRef, useEffect, useState } from 'react';

interface Props {
  children: ReactNode;
  serviceName: string;
  theme?: 'light' | 'dark';
  width?: number;
  backgroundColor?: string;
  borderBottom?: string;
  fixedLayout?: boolean;
}

export const AppBar = forwardRef(
  (
    { children, serviceName, theme = 'light', width, fixedLayout = true, ...props }: Props,
    ref?: ForwardedRef<HTMLDivElement>
  ) => {
    const [isActive, setIsActive] = useState<boolean>(false);

    useEffect(() => {
      const handleScroll = () => setIsActive(window.scrollY >= 100);
      window.addEventListener('scroll', handleScroll);
      return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // VARIANTS
    const TYPE_VARIANTS = {
      light: { color: '#e2e2e2', backgroundColor: '#ffffff' },
      dark: { color: '#191919', backgroundColor: '#151515' },
    };

    return (
      <>
        {!!fixedLayout && (
          <div
            css={{
              display: 'flex',
              alignItems: 'center',
              width: '100%',
              height: 60,
              minHeight: 60,
              maxHeight: 60,
              paddingTop: 'env(safe-area-inset-top)',
              paddingRight: 'env(safe-area-inset-right)',
              paddingLeft: 'env(safe-area-inset-left)',
              backgroundColor: 'transparent',
            }}
          />
        )}
        <header
          ref={ref}
          css={{
            zIndex: 1000,
            width: '100%',
            height: '100%',
            minHeight: 60,
            maxHeight: 60,
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            paddingTop: 'env(safe-area-inset-top)',
            paddingRight: 'env(safe-area-inset-right)',
            paddingLeft: 'env(safe-area-inset-left)',
            backgroundColor: props?.backgroundColor ?? TYPE_VARIANTS[theme].backgroundColor,
            borderBottom: (props?.borderBottom ?? isActive) ? `1px solid ${TYPE_VARIANTS[theme].color}` : '',
          }}
          {...props}
        >
          <ServiceName>{serviceName}</ServiceName>
          <nav
            css={{
              position: 'relative',
              width: '100%',
              maxWidth: width,
              height: '100%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            {children}
          </nav>
        </header>
      </>
    );
  }
);

// 서비스명
export function ServiceName({ children }: { children: ReactNode }) {
  return (
    <strong
      aria-hidden='true'
      css={{
        width: '0px',
        height: '0px',
        clip: 'rect(0 0 0 0)',
        clipPath: 'inset(50%)',
        position: 'absolute',
        overflow: 'hidden',
        whiteSpace: 'nowrap',
      }}
    >
      {children}
    </strong>
  );
}
