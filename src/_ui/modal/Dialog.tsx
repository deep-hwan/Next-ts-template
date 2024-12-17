/** @jsxImportSource @emotion/react */
import { Interpolation, Theme } from '@emotion/react';
import { HTMLAttributes, ReactNode, useEffect, useRef, useState } from 'react';

//
import { colors, MQ } from 'src/libs/themes';
import { BlurLayer } from '../index';
import useModalView from './handler/useModalView';

interface Props extends Omit<HTMLAttributes<HTMLElement>, 'color'> {
  zIndex?: number;
  open: boolean;
  children?: ReactNode;
  onCancel: () => void;
  dialogSizes?: number;
  title: string;
  description?: string;
  tabSpaceGap?: number;
  tabSpaceTop?: number;
  tabs?:
    | {
        name: string;
        buttonColor?: string;
        txtColor?: string;
        onClick?: () => void;
        disabled?: boolean;
      }[]
    | undefined;
  colors?: {
    backgroundColor?: string;
    titleColor?: string;
    txtColor?: string;
    cancelColor?: string;
  };
}

const Dialog = (props: Props) => {
  const {
    dialogSizes = 500,
    open,
    onCancel,
    title,
    description,
    tabs,
    tabSpaceGap = 6,
    tabSpaceTop,
    zIndex,
    ...rest
  } = props;

  const ref = useRef<HTMLDivElement>(null);
  const [delayedOpen, setDelayedOpen] = useState(false);

  const handleCancel = () => {
    setDelayedOpen(false);
    const timeout = setTimeout(() => onCancel(), 100);
    return () => clearTimeout(timeout);
  };

  useEffect(() => {
    if (open) {
      const timeout = setTimeout(() => setDelayedOpen(true), 20);
      return () => clearTimeout(timeout);
    } else {
      setDelayedOpen(false);
    }
  }, [open]);

  useModalView({ ref, open, onCancel: handleCancel, clickOutSideClose: true, windowScreenScroll: false });

  if (!open) return null;
  return (
    <>
      {open && <BlurLayer zIndex={zIndex ? zIndex - 1 : 9999} />}

      <Fixed open={delayedOpen} zIndex={zIndex}>
        <div
          ref={ref}
          css={{
            ...(flexT as []),

            height: 'auto',
            maxWidth: dialogSizes,
            minWidth: 320,
            padding: '46px 40px 36px',
            alignItems: 'start',
            borderRadius: 20,
            overscrollBehavior: 'contain',
            backgroundColor: props?.colors?.backgroundColor ?? '#fff',
            [MQ[3]]: { padding: '26px 25px 16px' },
          }}
          {...rest}
        >
          <div
            css={{
              ...(flexT as []),
              alignItems: 'end',
              height: 'auto',
              position: 'absolute',
              top: 0,
              right: 0,
              left: 0,
            }}
          >
            <div css={{ padding: 8, cursor: 'pointer' }} onClick={handleCancel}>
              <CancelIcon fill={props?.colors?.cancelColor ?? '#e0e0e0'} />
            </div>
          </div>

          <div css={{ ...(flexT as []), alignItems: 'start', rowGap: 10 }}>
            <b
              css={{
                fontSize: '1.25rem',
                color: props.colors?.titleColor ?? '#555',
                whiteSpace: 'pre-line',
              }}
            >
              {title}
            </b>

            <p
              css={{
                fontSize: '0.938rem',
                color: props.colors?.txtColor ?? '#888',
                whiteSpace: 'pre-line',
              }}
            >
              {description}
            </p>

            {props?.children}

            {tabs?.length !== 0 && !!tabs && (
              <div
                css={{
                  width: '100%',
                  display: 'flex',
                  alignItems: 'stretch',
                  columnGap: tabSpaceGap,
                  paddingTop: tabSpaceTop ?? 22,
                }}
              >
                {tabs?.map((item: any) => (
                  <button
                    onClick={() => {
                      handleCancel();
                      item.onClick();
                    }}
                    disabled={item?.disabled}
                    css={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      width: '100%',
                      borderRadius: 18,
                      minHeight: 52,
                      backgroundColor: item?.buttonColor ?? colors.keyColor,
                      color: item?.txtColor ?? '#fff',
                      cursor: 'pointer',
                      outline: 'none',
                      border: 'none',
                      fontSize: '1rem',
                      transition: '0.3s ease-in-out',
                      userSelect: 'none',

                      '&:hover': { opacity: 0.9 },
                      '&:active': { opacity: 8 },
                    }}
                  >
                    {item?.name}
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>
      </Fixed>
    </>
  );
};

//
//
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

export default Dialog;

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
//
const Fixed = ({ children, open, zIndex }: { children: ReactNode; open: boolean; zIndex?: number }) => (
  <div
    css={{
      ...flexT,

      overscrollBehavior: 'contain',
      justifyContent: 'center',
      position: 'fixed',
      top: 0,
      bottom: 0,
      left: 0,
      right: 0,
      opacity: open ? 1 : 0,
      zIndex: zIndex ?? 10000,
      padding: '20px 25px 50px',
    }}
  >
    {children}
  </div>
);
