const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://dbleui.com';

const getConfig = {
  title: 'Next-Template',
  description: 'Next-Template Description',
  canonical: siteUrl,
  openGraph: {
    type: 'website',
    locale: 'KR',
    url: siteUrl,
    site_name: 'SiteName',
    images: [
      {
        url: 'https://imagedelivery.net/vJSpkH6oHM7zquolzolo7A/77550435-1cc9-4b42-4519-3cd83f149b00/public',
        width: 1200,
        height: 630,
        alt: '> service-description',
      },
      {
        url: `${siteUrl}/assets/favicons/favicon-512x512.png`,
        width: 512,
        height: 512,
        alt: 'service-name Logo',
      },
    ],
  },
  twitter: {
    handle: '@mycodings',
    site: '@mycodings',
    cardType: 'summary_large_image',
  },
  alternates: {
    languages: [
      { locale: 'en', hrefLang: 'en' }, // 영어
      { locale: 'ko', hrefLang: 'ko' }, // 한국어
    ],
  },
  additionalMetaTags: [
    {
      name: 'keywords',
      content: 'keyword1, keyword2, keyword3, keyword4, keyword5',
    },
    {
      name: 'author',
      content: 'Deepfactory',
    },
    {
      name: 'language',
      content: 'ko_KR', // 주요 언어
    },
    {
      name: 'geo.region',
      content: 'ko_KR', // 한국 지역 코드
    },
    {
      name: 'geo.placename',
      content: 'Seoul, South Korea',
    },
    {
      name: 'geo.position',
      content: '37.5665,126.9780', // 서울의 위도 및 경도
    },
  ],
  additionalLinkTags: [
    { rel: 'alternate', hrefLang: 'x-default', href: siteUrl },
    { rel: 'alternate', hrefLang: 'en', href: `${siteUrl}/en` }, // 다국어 영어 URL
    { rel: 'alternate', hrefLang: 'ko', href: `${siteUrl}/ko` }, // 다국어 한국어 URL
    { rel: 'icon', href: `${siteUrl}/favicon.ico` }, // 파비콘
    { rel: 'apple-touch-icon', href: `${siteUrl}/assets/favicons/favicon-180x180.png`, sizes: '180x180' },
    { rel: 'manifest', href: `${siteUrl}/manifest.json` }, // PWA 지원
  ],
  structuredData: {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Next-Template',
    url: siteUrl,
    logo: `${siteUrl}/assets/favicons/favicon-512x512.png`,
    description: 'Next-Template Description',
    sameAs: [
      'https://pinterest.com/dble_ui/_created',
      'https://www.behance.net/dble2',
      'https://dribbble.com/dbleui',
      'https://www.instagram.com/dble_ui',
      'https://github.com/deep-hwan',
    ],
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: '+82-70-4036-0518',
      email: 'deep@deepcomu.com',
      contactType: 'Customer Support',
    },
  },
};

export default getConfig;
