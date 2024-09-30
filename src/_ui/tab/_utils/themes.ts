/** @jsxImportSource @emotion/react */

import { Interpolation, Theme } from '@emotion/react';
import { TabMediaQueryType, TabType } from './types';

export const TabTheme = ({ direction, reverse, gap, crossGap, border, borderRadius, axis, ...props }: TabType) => {
  const { solid, position = 'all', color, shape = 'solid' } = border ?? {};

  if (!props) return {};

  return {
    width: props?.width,
    minWidth: props?.minWidth,
    maxWidth: props?.maxWidth,
    height: props?.height,
    minHeight: props?.minHeight,
    maxHeight: props?.maxHeight,

    //
    position: props.positionType,
    top: props?.position?.top,
    bottom: props.position?.bottom,
    left: props.position?.left,
    right: props.position?.right,
    transform:
      !!axis &&
      `translate(${
        typeof axis?.x === 'number' ? axis?.x + 'px' : (axis?.x ?? 0)
      }, ${typeof axis?.y === 'number' ? axis?.y + 'px' : (axis?.y ?? 0)})`,

    //
    display: props?.display ?? 'flex',
    flexDirection: reverse && direction ? direction + '-reverse' : direction,
    alignItems: props.align,
    justifyContent: props?.crossAlign,
    alignContent: props?.alignContent,
    alignSelf: props?.alignSelf,
    flex: props.flex,
    flexWrap: props?.wrap,
    flexBasis: props?.basis,
    flexFlow: props?.flow,
    flexGrow: props?.grow,
    flexShrink: props?.shrink,
    rowGap: (direction === 'column' && gap) || (direction === 'row' && crossGap) || gap,
    columnGap: (direction === 'column' && crossGap) || (direction === 'row' && gap) || crossGap,
    order: props.order,

    //
    background: props?.background,
    backgroundColor: props?.backgroundColor,
    backgroundRepeat: props?.backgroundRepeat ?? 'no-repeat',
    backgroundSize: props?.backgroundSize ?? 'cover',
    backgroundPosition: props?.backgroundPosition ?? 'center',
    backgroundClip: props?.backgroundClip,
    backgroundImage: props?.backgroundImageUrl && `url(${props?.backgroundImageUrl})`,
    boxShadow: props?.shadow
      ? `${props?.shadow?.x}px ${props?.shadow?.y}px ${props?.shadow?.blur}px ${props?.shadow?.color}`
      : undefined,
    filter: !!props.filter && `blur(${props.filter})`,
    zIndex: props?.zIndex,
    transition: props?.transitionTime && `${props?.transitionTime}s ease-in-out`,
    cursor: props?.cursor,
    opacity: props.opacity,
    rotate: typeof props.rotate === 'number' ? props.rotate + 'deg' : props.rotate,
    userSelect: props.userSelect,
    scale: props.scale,

    //
    fontSize: props.txtSize,
    color: props.txtColor,
    fontWeight: props.txtWeight,
    lineHeight: props?.lineHeight,
    textAlign: props.txtAlign,
    whiteSpace: props.whiteSpace,
    textTransform: props.txtTransform,
    textDecoration: props.txtDecoration,
    overflow: props.ellipsis?.ellipsis && 'hidden',
    textOverflow: props.ellipsis?.ellipsis && 'ellipsis',
    WebkitBoxOrient: props.ellipsis?.ellipsis && 'vertical',
    WebkitLineClamp: props?.ellipsis?.line,

    //
    border: !!solid && position === 'all' ? `${solid}px ${shape} ${color}` : undefined,
    borderBottom: position === 'bottom' ? `${solid}px ${shape} ${color}` : undefined,
    borderTop: position === 'top' ? `${solid}px ${shape} ${color}` : undefined,
    borderRight: position === 'right' ? `${solid}px ${shape} ${color}` : undefined,
    borderLeft: position === 'left' ? `${solid}px ${shape} ${color}` : undefined,
    borderRadius: borderRadius,

    //
    paddingTop: props?.padding?.all || props?.padding?.vertical || props?.padding?.top,
    paddingBottom: props?.padding?.all || props?.padding?.vertical || props?.padding?.bottom,
    paddingRight: props?.padding?.all || props?.padding?.horizontal || props?.padding?.right,
    paddingLeft: props?.padding?.all || props?.padding?.horizontal || props?.padding?.left,

    //
    marginTop: props?.margin?.all || props?.margin?.vertical || props?.margin?.top,
    marginBottom: props?.margin?.all || props?.margin?.vertical || props?.margin?.bottom,
    marginRight: props?.margin?.all || props?.margin?.horizontal || props?.margin?.right,
    marginLeft: props?.margin?.all || props?.margin?.horizontal || props?.margin?.left,

    //
    overflowX: props?.scroll?.x,
    overflowY: props?.scroll?.y,

    listStyle: 'none',

    '::-webkit-scrollbar': {
      display: props?.scroll?.bar ? 'flex' : 'none',
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
  } as Interpolation<Theme>;
};

//
//
export const extandedMediaQuery = ({ _mediaQuery }: TabMediaQueryType) => {
  const mq_theme = () => {
    if (_mediaQuery) {
      return {
        s1440: {
          ...(TabTheme(_mediaQuery.s1440 || {}) as any),
          '&:hover': TabTheme(_mediaQuery.s1440?._hover || {}) as any,
          '&:active': TabTheme(_mediaQuery.s1440?._active || {}) as any,
        },
        s1280: {
          ...(TabTheme(_mediaQuery.s1280 || {}) as any),
          '&:hover': TabTheme(_mediaQuery.s1280?._hover || {}) as any,
          '&:active': TabTheme(_mediaQuery.s1280?._active || {}) as any,
        },
        s1080: {
          ...(TabTheme(_mediaQuery.s1080 || {}) as any),
          '&:hover': TabTheme(_mediaQuery.s1080?._hover || {}) as any,
          '&:active': TabTheme(_mediaQuery.s1080?._active || {}) as any,
        },
        s768: {
          ...(TabTheme(_mediaQuery.s768 || {}) as any),
          '&:hover': TabTheme(_mediaQuery.s768?._hover || {}) as any,
          '&:active': TabTheme(_mediaQuery.s768?._active || {}) as any,
        },
        s600: {
          ...(TabTheme(_mediaQuery.s600 || {}) as any),
          '&:hover': TabTheme(_mediaQuery.s600?._hover || {}) as any,
          '&:active': TabTheme(_mediaQuery.s600?._active || {}) as any,
        },
        s428: {
          ...(TabTheme(_mediaQuery.s428 || {}) as any),
          '&:hover': TabTheme(_mediaQuery.s428?._hover || {}) as any,
          '&:active': TabTheme(_mediaQuery.s428?._active || {}) as any,
        },
      };
    }
  };

  const screenSize = [1440, 1280, 1080, 768, 600, 428];
  const MQ = screenSize.map(bp => `@media (max-width: ${bp}px)`);

  return {
    [MQ[0]]: { ...(mq_theme()?.s1440 as any) },
    [MQ[1]]: { ...(mq_theme()?.s1280 as any) },
    [MQ[2]]: { ...(mq_theme()?.s1080 as any) },
    [MQ[3]]: { ...(mq_theme()?.s768 as any) },
    [MQ[4]]: { ...(mq_theme()?.s600 as any) },
    [MQ[5]]: { ...(mq_theme()?.s428 as any) },
  };
};
