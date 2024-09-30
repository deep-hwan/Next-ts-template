import { V, TouchableOpacity } from '@/_ui';

type Props = {
  prev: () => void;
  next: () => void;
  onClickTitle?: () => void;
  title: string;
};

export function CalenderTitle({ prev, next, onClickTitle, title }: Props) {
  return (
    <V.Row align='center' crossAlign='space-between' maxWidth={300} padding={{ horizontal: 12 }}>
      <TouchableOpacity txtColor='#797979' txtSize={13} onClick={prev} padding={{ all: 5 }}>
        이전
      </TouchableOpacity>

      <TouchableOpacity
        as='span'
        id='swiper-tab'
        txtSize={16}
        txtColor='#444'
        padding={{ horizontal: 5, top: 5, bottom: 7 }}
        onClick={onClickTitle}
        css={{ fontWeight: 500 }}
      >
        {title}
      </TouchableOpacity>

      <TouchableOpacity txtColor='#94A0AF' txtSize={13} onClick={next} padding={{ all: 5 }}>
        다음
      </TouchableOpacity>
    </V.Row>
  );
}
