/** @jsxImportSource @emotion/react */
import { Interpolation, Theme } from '@emotion/react';
import { keyframes } from '@emotion/react';
import BlurLayer from '../display/BlurLayer';
import { useEffect } from 'react';

export function LoadingLayer({ size = 48, open }: { size?: number; open?: boolean }) {
  const rotation = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;

  const scale50 = keyframes`
  0%, 100% {
    transform: scale(0);
  }
  50% {
    transform: scale(1);
  }
`;

  useEffect(() => {
    if (open) document.body.style.overflowY = 'hidden';
    else document.body.style.overflowY = 'auto';
  }, [open]);

  return (
    <>
      <BlurLayer />

      <div css={styles.wrap as Interpolation<Theme>}>
        <span
          css={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            width: `${size}px`,
            minWidth: `${size}px`,
            height: `${size}px`,
            minHeight: `${size}px`,
            margin: '15px auto',
            color: '#ffffff',
            boxSizing: 'border-box',
            animation: `${rotation} 1s linear infinite`,
            '&::after, &::before': {
              content: '""',
              boxSizing: 'border-box',
              position: 'absolute',
              width: '24px',
              height: '24px',
              top: '0',
              backgroundColor: '#ffffff',
              borderRadius: '50%',
              animation: `${scale50} 1s infinite ease-in-out`,
            },
            '&::before': {
              top: 'auto',
              bottom: '0',
              backgroundColor: '#4788f4',
              animationDelay: '0.5s',
            },
          }}
        />
      </div>
    </>
  );
}

// ------------------------------------
// -------------- Styles --------------
// ------------------------------------
const styles = {
  wrap: {
    position: 'fixed',
    minHeight: '100vh',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    zIndex: '9999',
  },

  txt: {
    color: '#ffffff',
    fontSize: '0.875rem',
  },
};
