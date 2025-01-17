import { siteUrl } from '@/libs/utils/site';
import Script from 'next/script';

//
// 사이트 네비게이션
const siteNavigationJson = {
  '@context': 'https://schema.org',
  '@type': 'ItemList',
  name: 'Main Menu',
  itemListOrder: 'Ordered', // 순서가 의미 있다면 "Ordered", 없으면 "Unordered"
  itemListElement: [
    {
      '@type': 'SiteNavigationElement',
      position: 1,
      name: '소개팅앱',
      url: `${siteUrl}/dating`,
    },
    {
      '@type': 'SiteNavigationElement',
      position: 2,
      name: '결혼정보회사',
      url: `${siteUrl}/wedding`,
    },
    {
      '@type': 'SiteNavigationElement',
      position: 3,
      name: '국제결혼하기',
      url: `${siteUrl}/wedding/international`,
    },
    {
      '@type': 'SiteNavigationElement',
      position: 4,
      name: '썰',
      url: `${siteUrl}/ssul`,
    },
    {
      '@type': 'SiteNavigationElement',
      position: 5,
      name: '경험',
      url: `${siteUrl}/story`,
    },
  ],
};

export const SiteNavigationJsonLd = () => {
  return (
    <>
      <Script
        id='site-navigation-jsonld'
        type='application/ld+json'
        dangerouslySetInnerHTML={{ __html: JSON.stringify(siteNavigationJson) }}
      />
    </>
  );
};
