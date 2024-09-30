type LayoutSizeType = {
  width?: 'auto' | '100%' | string;
  minWidth?: 'auto' | '100vw' | number | string;
  maxWidth?: 'auto' | '100vw' | number | string;
  height?: 'auto' | '100%' | string;
  minHeight?: 'auto' | '100vh' | number | string;
  maxHeight?: 'auto' | '100vh' | number | string;
};

//
//
type PositionType = {
  positionType?: 'static' | 'relative' | 'fixed' | 'absolute' | 'sticky';
  position?: {
    top?: string | number;
    bottom?: string | number;
    left?: string | number;
    right?: string | number;
  };
  axis?: { x?: string | number; y?: string | number };
};

//
//
type FlexType = {
  display?: 'none' | 'flex';
  direction?: 'row' | 'column';
  flex?: number | string;
  reverse?: boolean;
  align?: 'start' | 'end' | 'center' | 'stretch' | 'baseline';
  crossAlign?: 'start' | 'end' | 'center' | 'space-between' | 'space-around' | 'space-evenly';
  alignContent?: 'start' | 'end' | 'center' | 'space-between' | 'space-around' | 'space-evenly' | 'stretch';
  alignSelf?: 'auto' | 'stretch' | 'start' | 'end' | 'center' | 'baseline';
  flow?: string;
  wrap?: 'nowrap' | 'wrap' | 'wrap-reverse';
  basis?: number | string | 'auto';
  grow?: number;
  shrink?: number;
  gap?: number;
  crossGap?: number;
  order?: number;
};

//
//
type LayerType = {
  zIndex?: number;
  transitionTime?: number;
  cursor?: 'default' | 'grab' | 'pointer' | 'zoom';
  opacity?: number;
  userSelect?: 'none' | 'auto' | 'text' | 'contain' | 'all';
  rotate?: string | number;
  scale?: number;
};

//
//
type SpaceType = {
  padding?: {
    all?: number | string;
    horizontal?: number | string;
    vertical?: number | string;
    top?: number | string;
    bottom?: number | string;
    left?: number | string;
    right?: number | string;
  };

  margin?: {
    all?: number | string;
    horizontal?: number | string;
    vertical?: number | string;
    top?: number | string;
    bottom?: number | string;
    left?: number | string;
    right?: number | string;
  };
};

//
//
type TypoType = {
  color?: string;
  size?: number | string;
  lineHeight?: number | string;
  txtAlign?: 'start' | 'end' | 'center';
  weight?: 'lighter' | 'normal' | 'medium' | 'bold';
  whiteSpace?: 'normal' | 'nowrap' | 'pre' | 'pre-wrap' | 'pre-line';
  txtTransform?: 'none' | 'capitalize' | 'uppercase' | 'lowercase' | 'initial' | 'inherit';
  ellipsis?: { ellipsis?: boolean; line?: number; width?: number };
  txtDecoration?: 'underline' | string;
};

//
//
type TxtTypes = FlexType & PositionType & TypoType & LayoutSizeType & LayerType & SpaceType;

//
//
type EffectType = {
  _hover?: TxtTypes;
  _active?: TxtTypes;
  _disabled?: TxtTypes;
  _focus?: TxtTypes;
};

//
//
export type MediaQueryType = {
  _mediaQuery?: {
    s1440?: TxtTypes & EffectType;
    s1280?: TxtTypes & EffectType;
    s1080?: TxtTypes & EffectType;
    s768?: TxtTypes & EffectType;
    s600?: TxtTypes & EffectType;
    s428?: TxtTypes & EffectType;
  };
};

//
//
export type TxtType = TxtTypes & EffectType & MediaQueryType;
