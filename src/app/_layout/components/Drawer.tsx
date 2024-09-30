/** @jsxImportSource @emotion/react */
import Link from 'next/link';

import { fontSize } from '../../../libs/themes';
import { V, AppDrawer } from '@/_ui';

//atoms
import { useRecoilState } from 'recoil';
import { appDrawerAtom } from '../atoms/app-atom';

//
const Drawer = () => {
  const [isDrawer, setIsDrawer] = useRecoilState<boolean>(appDrawerAtom);

  return (
    <V.Column display='none' _mediaQuery={{ s1080: { display: 'flex' } }}>
      <AppDrawer open={isDrawer} onCancel={() => setIsDrawer(false)}>
        <V.Items gap={20} padding={{ all: 15 }}>
          {[
            { name: '메뉴1', path: '/404' },
            { name: '메뉴2', path: '/404' },
            { name: '메뉴3', path: '/404' },
            { name: '메뉴4', path: '/404' },
            { name: '메뉴5', path: '/404' },
            { name: '메뉴6', path: '/404' },
            { name: '메뉴7', path: '/404' },
            { name: '메뉴8', path: '/404' },
          ].map(item => (
            <V.Item key={item.name} itemType='http://schema.org/Organization'>
              <Link
                href={item?.path}
                itemProp='url name'
                css={{
                  width: '100%',
                  padding: 10,
                  fontSize: fontSize.s16,
                  color: '#666',
                  fontWeight: '500',
                }}
                onClick={() => setIsDrawer(false)}
              >
                {item.name}
              </Link>
            </V.Item>
          ))}
        </V.Items>
      </AppDrawer>
    </V.Column>
  );
};

export default Drawer;
