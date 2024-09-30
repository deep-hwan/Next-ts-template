/** @jsxImportSource @emotion/react */
import React, { useCallback, useEffect, useRef, HTMLAttributes, ReactNode } from 'react';

import { Button, Txt, BlurLayer, V, P, TouchableOpacity } from '../index';
import { colors } from 'src/libs/themes';

interface Props extends HTMLAttributes<HTMLElement> {
  theme?: 'light' | 'dark';
  open: boolean;
  children?: ReactNode;
  onCancel: () => void;
  dialogSizes?: number;
  title: string;
  description?: string;
  tabSpaceGap?: number;
  tabSpaceTop?: number;
  zIndex?: number;
  tabs?:
    | {
        name: string;
        buttonColor?: string;
        txtColor?: string;
        onClick?: () => void;
        disabled?: boolean;
      }[]
    | undefined;
}

export function Dialog(props: Props) {
  const {
    theme = 'light',
    dialogSizes = 500,
    open,
    onCancel,
    title,
    description,
    tabs,
    tabSpaceGap = 5,
    tabSpaceTop,
    zIndex,
    ...rest
  } = props;
  const ref = useRef<HTMLDivElement>(null);

  const THEME_VARIANT = {
    light: {
      bg: '#fff',
      titleColor: '#555',
      txtColor: '#797979',
      cancelColor: '#ccc',
    },
    dark: {
      bg: '#222',
      titleColor: '#e2e2e2',
      txtColor: '#999',
      cancelColor: '#555',
    },
  };

  // 외부 모달 닫기
  const clickModalOutside = useCallback(
    (event: MouseEvent) => {
      if (open && ref.current && !ref.current.contains(event.target as Node)) onCancel();
    },
    [open, onCancel]
  );

  useEffect(() => {
    if (open) {
      const scrollY = window.scrollY;

      document.body.style.position = 'fixed';
      document.body.style.top = `-${scrollY}px`;
      document.body.style.overflowY = 'hidden';
    } else {
      const scrollY = document.body.style.top;
      document.body.style.position = '';
      document.body.style.top = '';
      document.body.style.overflowY = 'auto';

      window.scrollTo(0, parseInt(scrollY || '0') * -1);
    }

    document.addEventListener('mousedown', clickModalOutside);
    return () => document.removeEventListener('mousedown', clickModalOutside);
  }, [open]);

  return (
    <>
      {open && <BlurLayer zIndex={zIndex ? zIndex - 1 : 9999} />}

      <P.Fixed
        zIndex={zIndex ?? 10000}
        align='center'
        crossAlign='center'
        width='100%'
        height='100%'
        padding={{ horizontal: 25, top: 20, bottom: 40 }}
        position={{
          top: open ? 0 : ('120%' as any),
          bottom: 0,
          left: 0,
          right: 0,
        }}
        transitionTime={0.3}
        css={{ overscrollBehavior: 'contain' }}
      >
        <V.Column
          maxWidth={dialogSizes}
          minWidth={320}
          padding={{ horizontal: 40, top: 46, bottom: 36 }}
          align='start'
          borderRadius={20}
          backgroundColor={THEME_VARIANT[theme].bg}
          css={{ overscrollBehavior: 'contain' }}
          _mediaQuery={{
            s600: {
              padding: { horizontal: 18, top: 26, bottom: 16 },
            },
          }}
          ref={ref}
          {...rest}
        >
          <P.Absolute width='100%' crossAlign='end' position={{ top: 3, right: 3 }}>
            <TouchableOpacity padding={{ all: 8 }} onClick={onCancel}>
              <CancelIcon fill={THEME_VARIANT[theme].cancelColor} />
            </TouchableOpacity>
          </P.Absolute>

          <V.Column>
            <Txt as='b' weight='bold' size={20} color={THEME_VARIANT[theme].titleColor}>
              {title}
            </Txt>

            <Txt size={15} padding={{ top: 10 }} color={THEME_VARIANT[theme].txtColor}>
              {description}
            </Txt>

            {props?.children}

            {tabs?.length !== 0 && !!tabs && (
              <V.Row gap={tabSpaceGap} margin={{ top: tabSpaceTop ?? 22 }}>
                {tabs?.map((item: any) => (
                  <Button
                    minHeight={52}
                    width='100%'
                    type='button'
                    onClick={() => item.onClick()}
                    backgroundColor={item?.buttonColor ?? colors.keyColor}
                    txtColor={item?.txtColor ?? '#fff'}
                    disabled={item?.disabled}
                  >
                    {item?.name}
                  </Button>
                ))}
              </V.Row>
            )}
          </V.Column>
        </V.Column>
      </P.Fixed>
    </>
  );
}

// ----------------------------------
// -------------- Icon --------------
// ----------------------------------
function CancelIcon({ fill = '#ccc' }: { fill?: string }) {
  return (
    <svg xmlns='http://www.w3.org/2000/svg' width='20' height='20' viewBox='0 0 26 26'>
      <path
        id='xIcon'
        d='M26.334,7.95a13,13,0,1,0,0,18.384,13,13,0,0,0,0-18.384M19.761,21.286l-2.619-2.619-2.621,2.621A1.079,1.079,0,0,1,13,19.761l2.621-2.621L13,14.525A1.079,1.079,0,0,1,14.526,13l2.616,2.617L19.758,13a1.076,1.076,0,0,1,1.522,1.522l-2.616,2.616,2.621,2.619-.23.23.23-.23a1.079,1.079,0,0,1-1.526,1.526'
        transform='translate(-4.141 -4.142)'
        fill={fill}
      />
    </svg>
  );
}
