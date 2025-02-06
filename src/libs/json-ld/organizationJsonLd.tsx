import { siteName, siteTitle, siteUrl } from '@/libs/utils/site';
import Script from 'next/script';

const site_url = siteUrl;

// 회사/단체 정보
export const OrganizationJsonLd = ({ title = siteTitle, siteUrl = site_url }: { title?: string; siteUrl?: string }) => {
  const organizationJson = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    url: siteUrl,
    name: siteName,
    alternateName: title,
    logo: {
      '@type': 'ImageObject',
      '@id': `${siteUrl}/#logo`,
      url: `${siteUrl}/assets/favicons/favicon-512x512.png`,
    },
    sameAs: [
      // SNS나 공식 채널이 있다면 여기 배열로 추가
    ],
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: '+82-70-1234-5678',
      email: 'picklove@picklove.com',
      contactType: 'Customer Support',
    },
    address: {
      '@type': 'PostalAddress',
      streetAddress: '서울특별시 강남구 어딘가로 123',
      addressLocality: '강남구',
      postalCode: '12345',
      addressCountry: 'KR',
    },
    foundingDate: '2025-01-13',
    founder: {
      '@type': 'Person',
      name: '디블',
    },
  };

  return (
    <Script
      type='application/ld+json'
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(organizationJson),
      }}
    />
  );
};
