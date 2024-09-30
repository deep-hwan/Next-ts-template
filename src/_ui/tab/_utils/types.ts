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
  backgroundColor?: string;
  background?: string;
  backgroundRepeat?: 'repeat-x' | 'repeat-y' | 'repeat' | 'space' | 'round' | 'no-repeat';
  backgroundSize?: 'contain' | 'cover' | string;
  backgroundPosition?: 'top' | 'bottom' | 'center' | 'left' | 'right' | 'string';
  backgroundClip?: 'border-box' | 'padding-box' | 'content-box' | 'initial' | 'inherit';
  backgroundImageUrl?: string;
  filter?: number | string;
  shadow?: {
    x?: number;
    y?: number;
    blur?: number;
    color?: string;
  };
  zIndex?: number;
  transitionTime?: number;
  cursor?: 'default' | 'grab' | 'pointer' | 'zoom';
  opacity?: number;
  rotate?: string | number;
  userSelect?: 'none' | 'auto' | 'text' | 'contain' | 'all';
  scale?: string | number;
};

//
//
type TypoType = {
  txtColor?: string;
  txtSize?: number | string;
  txtWeight?: 'lighter' | 'normal' | 'medium' | 'bold';
  lineHeight?: number | string;
  txtAlign?: 'start' | 'end' | 'center';
  whiteSpace?: 'normal' | 'nowrap' | 'pre' | 'pre-wrap' | 'pre-line';
  txtTransform?: 'none' | 'capitalize' | 'uppercase' | 'lowercase' | 'initial' | 'inherit';
  ellipsis?: { ellipsis?: boolean; line?: number; width?: number };
  txtDecoration?: 'underline' | string;
};

//
//
type BorderTypes = {
  border?: {
    solid: number;
    position?: 'all' | 'left' | 'right' | 'top' | 'bottom';
    color: string;
    shape?: 'solid' | 'dotted' | 'dashed' | 'double' | 'outset' | 'inset' | 'groove' | 'ridge';
  };
  borderRadius?: number | string;
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
type ScrollType = {
  scroll?: {
    x?: 'visible' | 'auto' | 'scroll' | 'hidden';
    y?: 'visible' | 'auto' | 'scroll' | 'hidden';
    type?: 'visible' | 'auto' | 'scroll' | 'hidden';
    bar?: boolean;
  };
};

//
//
type ViewTypes = FlexType & PositionType & LayoutSizeType & TypoType & LayerType & BorderTypes & SpaceType & ScrollType;

//
//
type EffectType = {
  _hover?: ViewTypes;
  _active?: ViewTypes;
  _disabled?: ViewTypes;
  _focus?: ViewTypes;
};

//
//
export type TabMediaQueryType = {
  _mediaQuery?: {
    s1440?: ViewTypes & EffectType;
    s1280?: ViewTypes & EffectType;
    s1080?: ViewTypes & EffectType;
    s768?: ViewTypes & EffectType;
    s600?: ViewTypes & EffectType;
    s428?: ViewTypes & EffectType;
  };
};

//
//
export type TabType = ViewTypes & EffectType & TabMediaQueryType;
