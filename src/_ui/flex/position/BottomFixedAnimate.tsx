/** @jsxImportSource @emotion/react */
import { ReactNode, useEffect, useRef, useState } from 'react';

interface Props {
  children: ReactNode;
  animate: boolean;
  height?: number;
  padding?: {
    all?: number | string;
    horizontal?: number | string;
    vertical?: number | string;
    top?: number | string;
    bottom?: number | string;
    left?: number | string;
    right?: number | string;
  };
  backgroundColor?: string;
}

export function BottomFixedAnimate(props: Props) {
  const fixedRef = useRef(null);

  const [elementHeight, setElementHeight] = useState<number | null>(props.height ?? 60);

  useEffect(() => {
    if (fixedRef.current) {
      const { clientHeight } = fixedRef.current;
      setElementHeight(clientHeight);
    }
  }, [fixedRef]);

  const p_all = props.padding?.all;
  const p_V = props.padding?.vertical;
  const p_H = props.padding?.horizontal;
  const p_T = props.padding?.top;
  const p_B = props.padding?.bottom;
  const p_L = props.padding?.left;
  const p_R = props.padding?.right;

  const safe_area_padding = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    paddingBottom: 'max(0px, env(safe-area-inset-bottom))',
    paddingInlineStart: 'max(0px, env(safe-area-inset-left))',
    paddingInlineEnd: 'max(0px, env(safe-area-inset-right))',
    transition: '0.25s ease-in-out',
  };

  return (
    <div
      css={{
        ...safe_area_padding,
        width: '100%',
        maxHeight: props.animate ? (elementHeight ?? props.height) : 0,
        minHeight: props.animate ? (elementHeight ?? props.height) : 0,
      }}
    >
      <div
        css={{
          ...safe_area_padding,
          height: '100%',
          minHeight: props.height ?? 60,
          maxHeight: props.height ?? 60,
          bottom: props.animate ? 0 : ('-200%' as any),
          position: 'fixed',
          left: 0,
          right: 0,
        }}
      >
        <div
          css={{
            width: '100%',
            height: '100%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <div
            css={{
              width: '100%',
              height: '100%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              paddingTop: (p_all && p_all) || (p_V && p_V) || (p_T && p_T),
              paddingBottom: (p_all && p_all) || (p_V && p_V) || (p_B && p_B),
              paddingLeft: (p_all && p_all) || (p_H && p_H) || (p_L && p_L),
              paddingRight: (p_all && p_all) || (p_H && p_H) || (p_R && p_R),
            }}
          >
            {props.children}
          </div>
        </div>
      </div>
    </div>
  );
}
