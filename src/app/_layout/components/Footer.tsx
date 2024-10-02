//libs
import { Spacing, Txt, V } from '@/_ui';
import { MQ, colors, fontSize } from '@/libs/themes';
import Link from 'next/link';
//
interface MenuItem {
  name: string;
  path: string;
}

//
export default function Footer() {
  const menusLust: MenuItem[] = [
    { name: '메뉴1', path: '/404' },
    { name: '메뉴2', path: '/404' },
    { name: '메뉴3', path: '/404' },
    { name: '메뉴4', path: '/404' },
  ];

  return (
    <footer
      css={{
        width: '100%',
        display: 'flex',
        justifyContent: 'center',
        backgroundColor: colors.chiffon[100],
        paddingTop: 'max(40px, env(safe-area-inset-top))',
        paddingBottom: 'max(50px, env(safe-area-inset-bottom))',
        paddingInlineStart: 'max(20px, env(safe-area-inset-left))',
        paddingInlineEnd: 'max(20px, env(safe-area-inset-right))',
      }}
    >
      <V.Column maxWidth={1080}>
        <V.Items direction='row' gap={30} crossGap={16} css={{ [MQ[3]]: { flexDirection: 'column' } }}>
          {menusLust?.map((item: MenuItem, i: number) => (
            <V.Item padding={{ vertical: 5 }} key={i}>
              <Link
                href={item.path}
                css={{
                  fontSize: fontSize.s14,
                  color: colors.grey[500],
                }}
              >
                {item.name}
              </Link>
            </V.Item>
          ))}
        </V.Items>

        <Spacing size={32} />

        <address
          id='address'
          itemScope
          itemType='https://schema.org/Organization'
          css={{ fontStyle: 'normal', fontSize: 13, color: '#888' }}
        >
          <Txt itemProp='name' as='strong' size={14} weight='medium' color={colors.grey[500]}>
            nextTemplate
          </Txt>
          <Spacing size={14} />
          <V.Row gap={8}>
            <a href='mailto:deep@deepcomu.com' css={{ color: '#888' }}>
              email : deep@deepcomu.com
            </a>
            <span>|</span>
            <a href='tel:07040077561' css={{ color: '#888' }}>
            tel : 070-1234-5678
            </a>
          </V.Row>
          <Spacing size={4} />

          <span itemProp='address' itemScope itemType='https://schema.org/PostalAddress'>
            address : <span itemProp='addressRegion'>서울특별시</span> <span itemProp='addressLocality'>동작구</span>{' '}
            <span itemProp='streetAddress'>시흥대로 12로 123동 456호</span>
          </span>
        </address>
      </V.Column>
    </footer>
  );
}
