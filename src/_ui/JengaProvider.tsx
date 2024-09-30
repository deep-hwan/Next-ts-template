/** @jsxImportSource @emotion/react */
import React, { ReactNode, createContext, useContext, useEffect, useState } from 'react';
import { css } from '@emotion/react';
import { ToastSnackBar } from './feedback/ToastSnackBar';
import { P } from './flex/P';
import { V } from './flex/V';

interface ToastProps {
  theme?: 'light' | 'dark';
  status?: 'success' | 'failed';
  id?: string;
  title: string;
  description?: string;
  countdown?: number;
}

const ToastContext = createContext({
  addToast: ({
    theme,
    status,
    title,
    description,
    countdown,
  }: Omit<ToastProps, 'id' | 'countdown'> & { countdown?: number }) => {},
  toasts: [] as ToastProps[],
});

export const useJenga = () => useContext(ToastContext);

export function JengaProvider({ children }: { children: ReactNode }) {
  const [toasts, setToasts] = useState<ToastProps[]>([]);

  useEffect(() => {
    if (toasts.length === 0) return;

    const interval = setInterval(() => {
      setToasts(currentToasts =>
        currentToasts
          .map((toast: any) => ({
            ...toast,
            countdown: toast?.countdown > 0 ? toast?.countdown - 1 : 0,
          }))
          .filter(toast => toast.countdown > 0)
      );
    }, 1000);

    return () => clearInterval(interval);
  }, [toasts.length]); // toasts.length를 종속성 배열에 추가

  const addToast = ({ theme, status, title, description, countdown = 3 }: Omit<ToastProps, 'id'>) => {
    const newToast = {
      id: Math.random().toString(36).substr(2, 9),
      theme,
      status,
      title,
      description,
      countdown,
    };
    setToasts(prevToasts => [...prevToasts, newToast]);
  };

  return (
    <ToastContext.Provider value={{ addToast, toasts }}>
      {children}
      {toasts.length > 0 && (
        <P.Fixed
          zIndex={200000}
          position={{ left: 0, right: 0, top: 0 }}
          transitionTime={0.3}
          align='center'
          crossAlign='center'
        >
          <V.Column zIndex={2000} padding={{ vertical: 30, horizontal: 16 }} width='auto'>
            {toasts.map(toast => (
              <div key={toast.id}>
                <ToastSnackBar
                  status={toast.status}
                  id={toast.id}
                  title={toast.title}
                  description={toast.description}
                  theme={toast.theme}
                  closeTime={toast.countdown}
                />
              </div>
            ))}
          </V.Column>
        </P.Fixed>
      )}
    </ToastContext.Provider>
  );
}

const toastTheme = css({
  position: 'fixed',
  top: 0,
  left: 0,
  right: 0,
  padding: '32px 16px',
  zIndex: 100000,
  transition: '0.3s ease-in-out',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  backgroundColor: 'transparent',
});
