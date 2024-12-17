/** @jsxImportSource @emotion/react */
import { Interpolation, Theme } from '@emotion/react';
import React, { ForwardedRef, HTMLAttributes, ReactNode, useEffect, useRef, useState } from 'react';

//
import { BlurLayer } from '@/_ui';
import { MQ } from '@/libs/themes';
import useModalView from './handler/useModalView';

//
interface BottomSheetProps extends Omit<HTMLAttributes<HTMLElement>, 'color'> {
  children: React.ReactNode;
  zIndex?: number;
  open: boolean;
  onCancel: () => void;
  clickOutSideClose?: boolean;
  windowScreenScroll?: boolean;
  colors?: {
    backgroundColor?: string;
    handlebarColor?: string;
  };
}

//
const BottomSheet = ({
  children,
  open,
  onCancel,
  windowScreenScroll = false,
  clickOutSideClose = true,
  zIndex,
  ...props
}: BottomSheetProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const viewRef = useRef<HTMLDivElement>(null);
  const [startY, setStartY] = useState(0);
  const [currentY, setCurrentY] = useState(0);

  const handleTouchStart = (event: React.TouchEvent) => {
    const touch = event.touches[0];
    setStartY(touch.clientY);
    setCurrentY(touch.clientY);
  };

  const handleTouchMove = (event: React.TouchEvent) => {
    const touch = event.touches[0];
    setCurrentY(touch.clientY);
  };

  const handleTouchEnd = () => {
    const distance = currentY - startY;

    if (distance > 80) onCancel();

    setCurrentY(0);
    setStartY(0);
  };

  const [delayedOpen, setDelayedOpen] = useState(false);

  const handleCancel = () => {
    setDelayedOpen(false);
    const timeout = setTimeout(() => onCancel(), 100);
    return () => clearTimeout(timeout);
  };

  useEffect(() => {
    if (open) {
      const timeout = setTimeout(() => setDelayedOpen(true), 80);
      return () => clearTimeout(timeout);
    } else {
      setDelayedOpen(false);
    }
  }, [open]);

  useModalView({ ref, open, onCancel: handleCancel, clickOutSideClose, windowScreenScroll });

  if (!open) return null;
  return (
    <>
      {open && <BlurLayer zIndex={zIndex ? zIndex - 1 : 9998} />}

      <Fixed open={delayedOpen} zIndex={zIndex}>
        <div
          css={{
            ...(flexT as []),
            justifyContent: 'center',
            paddingTop: 70,
            [MQ[1]]: {
              paddingTop: 'calc(env(safe-area-inset-top) + 10px)',
            },
          }}
        >
          <div
            ref={ref}
            css={{
              ...(flexT as []),
              maxWidth: 600,
              opacity: open ? '1' : '0',
              borderRadius: '22px 22px 0 0',
              boxShadow: '0 3px 30px rgba(0,0,0,0.1)',
              transition: '0.25s ease-in-out',
              paddingTop: 'env(safe-area-inset-top)',
              backgroundColor: props.colors?.backgroundColor ?? '#fff',

              '&:webkit-scrollbar': {
                display: 'none',
              },

              [MQ[1]]: {
                maxWidth: '100%',
              },
            }}
            {...props}
          >
            <div
              css={{ ...(flexT as []), height: 'auto', padding: 10 }}
              onTouchStart={handleTouchStart}
              onTouchMove={handleTouchMove}
              onTouchEnd={handleTouchEnd}
            >
              <div
                onClick={handleCancel}
                css={{
                  maxWidth: 50,
                  minWidth: 50,
                  minHeight: 6,
                  maxHeight: 6,
                  borderRadius: 1000,
                  backgroundColor: props.colors?.handlebarColor ?? '#e0e0e0',
                }}
              />
            </div>

            <View ref={viewRef}>{children}</View>
          </div>
        </div>
      </Fixed>
    </>
  );
};

export default BottomSheet;

//
//
const flexT: Interpolation<Theme> = {
  position: 'relative',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  width: '100%',
  height: '100%',
  transition: '0.2s ease-in-out',
};

//
const Fixed = ({ children, open, zIndex }: { children: ReactNode; open: boolean; zIndex?: number }) => (
  <div
    css={{
      ...flexT,
      overscrollBehavior: 'contain',
      position: 'fixed',
      top: open ? 0 : '200%',
      bottom: 0,
      left: 0,
      right: 0,
      zIndex: zIndex ?? 9999,
    }}
  >
    {children}
  </div>
);

//
const View = ({ children, ref }: { children: ReactNode; ref: ForwardedRef<HTMLDivElement> }) => (
  <div
    ref={ref}
    css={{
      ...(flexT as any),
      alignItems: 'start',
      paddingBottom: 'env(safe-area-inset-bottom)',
      overflow: 'auto',
      '::-webkit-scrollbar': {
        display: 'flex',
        width: '4px',
        height: '4px',
      },
      '::-webkit-scrollbar-track': {
        backgroundColor: 'transparent',
      },
      '::-webkit-scrollbar-thumb': {
        backgroundColor: '#cccccc',
        borderRadius: '100px',
      },
      '::-webkit-scrollbar-thumb:hover': {
        background: '#e2e2e2',
      },
      '::-webkit-scrollbar-button:start:decrement, ::-webkit-scrollbar-button:end:increment': {
        width: 0,
        height: 0,
        backgroundColor: 'transparent',
      },
    }}
  >
    {children}
  </div>
);
