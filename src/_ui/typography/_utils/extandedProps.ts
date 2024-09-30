export const extandedProps = (props: any) => {
  const styleProps: any = {};
  const elementProps: any = { ...props };

  const stylePropKeys = [
    ...layoutKeys,
    ...layerKeys,
    ...flexKeys,
    ...positionKeys,
    ...spaceKeys,
    ...borderKeys,
    ...scollKeys,
    ...typoKeys,
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

const typoKeys = [
  'as',
  'color',
  'size',
  'txtAlign',
  'weight',
  'whiteSpace',
  'txtTransform',
  'ellipsis',
  'txtDecoration',
];

const hoverActiveKeys = ['active', 'hover', 'disabled'];

const mediaQueryKeys = ['mediaQuery'];
