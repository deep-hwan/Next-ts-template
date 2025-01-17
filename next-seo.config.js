import { siteDescription, siteImageUrl, siteKeywords, siteName, siteTitle } from '@/libs/utils/site';

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.all-datingapps.com';

const getConfig = {
  title: siteTitle,
  description: siteDescription,
  canonical: siteUrl,
  openGraph: {
    type: 'website',
    locale: 'ko_KR',
    url: siteUrl,
    site_name: siteName,
    images: [
      {
        url: siteImageUrl,
        width: 1200,
        height: 630,
        alt: siteTitle,
      },
    ],
  },
  twitter: {
    handle: '@picklove',
    site: '@picklove',
    cardType: 'summary_large_image',
  },
  additionalMetaTags: [
    {
      name: 'application-name',
      content: siteName,
    },
    {
      name: 'keywords',
      content: siteKeywords.join(', '),
    },
    {
      name: 'author',
      content: 'picklove',
    },
    {
      name: 'language',
      content: 'ko_KR',
    },
    {
      name: 'geo.region',
      content: 'KR',
    },
    {
      name: 'geo.placename',
      content: 'Seoul, South Korea',
    },
    {
      name: 'geo.position',
      content: '37.5665,126.9780',
    },
  ],
  additionalLinkTags: [
    { rel: 'alternate', hrefLang: 'x-default', href: siteUrl },
    { rel: 'alternate', hrefLang: 'ko', href: siteUrl },
    { rel: 'icon', href: `${siteUrl}/favicon.ico` },
    { rel: 'apple-touch-icon', href: `${siteUrl}/assets/favicons/favicon-180x180.png`, sizes: '180x180' },
    { rel: 'manifest', href: `${siteUrl}/manifest.json` },
  ],
};

export default getConfig;
