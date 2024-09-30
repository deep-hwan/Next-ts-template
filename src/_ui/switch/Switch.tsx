import { ForwardedRef, forwardRef } from 'react';

//libs
import { P, TouchableOpacity } from '@/_ui';
import { colors } from '@/libs/themes';

//type
type Type = {
  onClick?: () => void;
  active: boolean;
  width?: number;
  height?: number;
  children: never[];
};

//
const Switch = forwardRef((props: Type, ref: ForwardedRef<HTMLElement | HTMLDivElement | any>) => {
  return (
    <TouchableOpacity
      width='auto'
      minWidth={props?.width ?? 48}
      minHeight={props?.height ?? 30}
      backgroundColor='#eee'
      borderRadius={100}
      onClick={() => props.onClick && props.onClick()}
    >
      <P.Absolute
        ref={ref}
        position={{ left: 0, right: 0, top: 0, bottom: 0 }}
        width='100%'
        height='100%'
        transitionTime={0.3}
        padding={{ all: 3 }}
      >
        <P.Absolute
          position={{ left: props?.active ? '48%' : 3 }}
          width='auto'
          minWidth={`calc(${props.height ?? 30}px - 6px)`}
          minHeight={`calc(${props.height ?? 30}px - 6px)`}
          backgroundColor={props?.active ? colors.keyColor : '#aaa'}
          borderRadius={100}
          transitionTime={0.3}
        >
          {''}
        </P.Absolute>
      </P.Absolute>
    </TouchableOpacity>
  );
});

export { Switch };
