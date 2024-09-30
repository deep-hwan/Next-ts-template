import Link from 'next/link';
import { useCallback, useState } from 'react';

import { V } from '@/_ui';

//
export default function Menus() {
  const [menuHover, setMenuHover] = useState<null | number>(null);

  const onMenuHover = useCallback((menu: number) => setMenuHover(menu), [menuHover]);
  const onMenuLeave = useCallback(() => setMenuHover(null), [menuHover]);

  return (
    <V.Items direction='row' crossAlign='end' gap={20} _mediaQuery={{ s1080: { display: 'none' } }}>
      {[
        { name: '메뉴1', path: '/404' },
        { name: '메뉴2', path: '/404' },
        { name: '메뉴3', path: '/404' },
        { name: '메뉴4', path: '/404' },
      ].map((item, i) => (
        <V.Item key={item.name} itemType='http://schema.org/Organization'>
          <Link
            href={item.path}
            itemProp='url name'
            onMouseEnter={() => onMenuHover(i + 1)}
            onMouseLeave={() => onMenuLeave()}
            css={{
              padding: '8px 15px',
              fontSize: 15,
              opacity: !!menuHover ? (menuHover === i + 1 ? 1 : 0.6) : 1,
            }}
          >
            {item.name}
          </Link>
        </V.Item>
      ))}
    </V.Items>
  );
}
