import { siteDescription, siteName, siteTitle, siteUrl } from '@/libs/utils/site';
import Script from 'next/script';

const site_url = siteUrl;

/* 특정 페이지(예: somepage)의 구조화 데이터 */
export const WebPageJsonLd = ({
  title = siteTitle,
  description = siteDescription,
  siteUrl = site_url,
}: {
  title?: string;
  description?: string;
  siteUrl?: string;
}) => {
  const webPageJson = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    '@id': `${siteUrl}/somepage#webpage`,
    url: `${siteUrl}/somepage`,
    name: siteName,
    headline: title,
    description: description,
    inLanguage: 'ko',

    // 어떤 WebSite에 속하는지 연결
    isPartOf: {
      '@type': 'WebSite',
      '@id': `${siteUrl}/#website`,
    },

    // 게시/수정 날짜
    datePublished: new Date().toISOString(),
    dateModified: new Date().toISOString(),

    // 작성자(author)도 별도 @id로 연결
    author: {
      '@id': `${siteUrl}/#organization`,
    },
  };

  return (
    <Script
      type='application/ld+json'
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(webPageJson),
      }}
    />
  );
};
