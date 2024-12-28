//libs
import { Avatar, Txt, V } from '@/_ui';
import { colors } from '@/libs/themes';

//
export default function Comp1() {
  return (
    <V.Column padding={{ all: 14 }} shadow={{ x: 0, y: 2, blur: 30, color: 'rgba(0,0,0,0.08)' }} borderRadius={18}>
      <V.Row gap={12} align='center'>
        <Avatar
          source='https://imagedelivery.net/vJSpkH6oHM7zquolzolo7A/77550435-1cc9-4b42-4519-3cd83f149b00/public'
          alt='템플릿'
          isLoading={false}
          size={40}
          zoomUp
        />
        <V.Column gap={3} align='start' transitionTime={0.3} backgroundColor='#fff'>
          <Txt as='strong' size={17} weight='bold'>
            위젯 템플릿
          </Txt>
          <Txt size={13} color={colors.grey[300]}>
            위젯으로 빠른 개발을 경험해봐요 🥰
          </Txt>
        </V.Column>
      </V.Row>
    </V.Column>
  );
}
