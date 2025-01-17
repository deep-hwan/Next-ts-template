import { siteDescription, siteName, siteTitle, siteUrl } from '@/libs/utils/site';
import Script from 'next/script';

const site_url = siteUrl;

/* 특정 페이지(예: somepage)의 구조화 데이터 */
export const ServiceJsonLd = ({ description = siteDescription }: { description?: string }) => {
  const webPageJson = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: siteName,
    description: description,

    provider: {
      '@type': 'Organization',
      name: '픽럽랩스',
    },
    areaServed: '대한민국',
    serviceType: '소개팅의 모든 서비스',
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
