/** @jsxImportSource @emotion/react */

import { Interpolation, Theme } from '@emotion/react';
import { MediaQueryType, TxtType } from './types';

export const TxtTheme = (props: TxtType & { direction?: 'row' | 'column' }) => {
  const { direction, reverse, gap, crossGap, axis } = props;

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
    display: props?.display ?? '-webkit-box',
    flexDirection: reverse && props.direction ? props.direction + '-reverse' : props.direction,
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
    zIndex: props?.zIndex,
    transition: props?.transitionTime && `${props?.transitionTime}s ease-in-out`,
    cursor: props?.cursor,
    opacity: props.opacity,
    rotate: typeof props.rotate === 'number' ? props.rotate + 'deg' : props.rotate,
    userSelect: props.userSelect,
    scale: props.scale,

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
    color: props.color,
    fontSize: props.size,
    fontWeight: props.weight,
    lineHeight: props?.lineHeight,
    textAlign: props.txtAlign,
    whiteSpace: props.whiteSpace,
    textTransform: props.txtTransform,
    textDecoration: props.txtDecoration,
    overflow: props.ellipsis?.ellipsis && 'hidden',
    textOverflow: props.ellipsis?.ellipsis && 'ellipsis',
    WebkitBoxOrient: props.ellipsis?.ellipsis && 'vertical',
    WebkitLineClamp: props?.ellipsis?.line,
  } as Interpolation<Theme>;
};

//
//
export const extandedMediaQuery = ({ _mediaQuery }: MediaQueryType) => {
  const mq_theme = () => {
    if (_mediaQuery) {
      return {
        s1440: {
          ...(TxtTheme(_mediaQuery.s1440 || {}) as any),
          '&:hover': TxtTheme(_mediaQuery.s1440?._hover || {}) as any,
          '&:active': TxtTheme(_mediaQuery.s1440?._active || {}) as any,
        },
        s1280: {
          ...(TxtTheme(_mediaQuery.s1280 || {}) as any),
          '&:hover': TxtTheme(_mediaQuery.s1280?._hover || {}) as any,
          '&:active': TxtTheme(_mediaQuery.s1280?._active || {}) as any,
        },
        s1080: {
          ...(TxtTheme(_mediaQuery.s1080 || {}) as any),
          '&:hover': TxtTheme(_mediaQuery.s1080?._hover || {}) as any,
          '&:active': TxtTheme(_mediaQuery.s1080?._active || {}) as any,
        },
        s768: {
          ...(TxtTheme(_mediaQuery.s768 || {}) as any),
          '&:hover': TxtTheme(_mediaQuery.s768?._hover || {}) as any,
          '&:active': TxtTheme(_mediaQuery.s768?._active || {}) as any,
        },
        s600: {
          ...(TxtTheme(_mediaQuery.s600 || {}) as any),
          '&:hover': TxtTheme(_mediaQuery.s600?._hover || {}) as any,
          '&:active': TxtTheme(_mediaQuery.s600?._active || {}) as any,
        },
        s428: {
          ...(TxtTheme(_mediaQuery.s428 || {}) as any),
          '&:hover': TxtTheme(_mediaQuery.s428?._hover || {}) as any,
          '&:active': TxtTheme(_mediaQuery.s428?._active || {}) as any,
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
