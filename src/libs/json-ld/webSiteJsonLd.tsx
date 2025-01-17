import { siteDescription, siteKeywords, siteName, siteTitle, siteUrl } from '@/libs/utils/site';
import Script from 'next/script';

// 사이트 전반 정보
export const WebSiteJsonLd = () => {
  const webSiteJson = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    '@id': `${siteUrl}/#website`,
    url: siteUrl,
    name: siteName,
    alternateName: siteTitle,
    description: siteDescription,
    inLanguage: 'ko',
    keywords: siteKeywords,

    potentialAction: {
      '@type': 'SearchAction',
      target: `${siteUrl}/search?query={search_term_string}`,
      'query-input': 'required name=search_term_string',
    },

    mainEntity: [
      {
        '@type': 'SiteNavigationElement',
        name: '소개팅앱',
        url: `${siteUrl}/dating`,
      },
      {
        '@type': 'SiteNavigationElement',
        name: '결혼정보회사',
        url: `${siteUrl}/wedding`,
      },
      {
        '@type': 'SiteNavigationElement',
        name: '국제결혼하기',
        url: `${siteUrl}/wedding/international`,
      },
      {
        '@type': 'SiteNavigationElement',
        name: '썰',
        url: `${siteUrl}/ssul`,
      },
      {
        '@type': 'SiteNavigationElement',
        name: '경험',
        url: `${siteUrl}/story`,
      },
    ],
  };

  return (
    <Script
      type='application/ld+json'
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(webSiteJson),
      }}
    />
  );
};
