export const extandedProps = (props: any) => {
  const styleProps: any = {};
  const elementProps: any = { ...props };

  const stylePropKeys = [
    ...layoutKeys,
    ...layerKeys,
    ...flexKeys,
    ...typoKeys,
    ...positionKeys,
    ...spaceKeys,
    ...borderKeys,
    ...scollKeys,
    ...mediaQueryKeys,
    ...hoverActiveKeys,
  ];

  Object.keys(props).forEach(key => {
    if (stylePropKeys.includes(key)) {
      styleProps[key] = props[key];
      delete elementProps[key];
    }
  });

  return { elementProps };
};

const layoutKeys = ['width', 'minWidth', 'maxWidth', 'height', 'minHeight', 'maxHeight'];

const flexKeys = [
  'display',
  'flex',
  'direction',
  'reverse',
  'align',
  'crossAlign',
  'alignContent',
  'alignSelf',
  'wrap',
  'flow',
  'basis',
  'grow',
  'shrink',
  'gap',
  'crossGap',
  'order',
];

const positionKeys = ['position', 'axis', 'transform'];

const layerKeys = [
  'backgroundColor',
  'background',
  'backgroundRepeat',
  'backgroundSize',
  'backgroundPosition',
  'backgroundClip',
  'backgroundImageUrl',
  'filter',
  'shadow',
  'zIndex',
  'cursor',
  'userSelect',
  'transitionTime',
  'opacity',
];

const borderKeys = ['border', 'borderRadius'];

const spaceKeys = ['padding', 'margin'];

const scollKeys = ['scroll'];

const hoverActiveKeys = ['_active', '_focus', '_hover', '_disabled'];

const typoKeys = [
  'txtColor',
  'color',
  'txtSize',
  'size',
  'align',
  'txtAlign',
  'txtWeight',
  'whiteSpace',
  'txtTransform',
  'ellipsis',
  'txtDecoration',
];

const mediaQueryKeys = ['_mediaQuery'];
