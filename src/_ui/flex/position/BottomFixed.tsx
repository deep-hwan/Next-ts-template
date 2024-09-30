/** @jsxImportSource @emotion/react */
import { ReactNode } from 'react';

interface Props {
  children: ReactNode;
  height?: number;
  zIndex?: number;
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
  borderTop?: string;
  border?: {
    solid: number;
    position?: 'all' | 'left' | 'right' | 'top' | 'bottom';
    color?: string;
  };
}

export function BottomFixed(props: Props) {
  const { padding, height = 60, zIndex, backgroundColor, borderTop, ...rest } = props;

  const p_all = padding?.all;
  const p_V = padding?.vertical;
  const p_H = padding?.horizontal;
  const p_T = padding?.top;
  const p_B = padding?.bottom;
  const p_L = padding?.left;
  const p_R = padding?.right;

  const safe_area_padding = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 'max(0px, env(safe-area-inset-top))',
    paddingBottom: 'max(0px, env(safe-area-inset-bottom))',
    paddingInlineStart: 'max(0px, env(safe-area-inset-left))',
    paddingInlineEnd: 'max(0px, env(safe-area-inset-right))',
  };

  return (
    <>
      <div
        css={{
          width: '100%',
          maxHeight: height,
          minHeight: height,
          transition: '0.3s ease-in-out',
          ...safe_area_padding,
        }}
      />

      <div
        css={{
          ...safe_area_padding,
          zIndex: zIndex ?? 1000,
          position: 'fixed',
          minHeight: height,
          bottom: 0,
          left: 0,
          right: 0,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: backgroundColor,
          borderTop: `${props?.border?.solid ?? 0}px solid ${(props?.border?.color as string) ?? '#eee'}`,
          transition: '0.3s ease-in-out',
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
            borderTop: borderTop,
          }}
        >
          {rest.children}
        </div>
      </div>
    </>
  );
}
