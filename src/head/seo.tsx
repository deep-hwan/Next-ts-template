import Head from 'next/head';
import { useRouter } from 'next/router';
import Script from 'next/script';
type Types = {
  locale?: string;
  title?: string;
  description?: string;
  image?: string;
  isArticle?: boolean;
  articleData?: { author: string; createdAt: string; updatedAt?: string };
};

export default function SEO(props: Types) {
  const currentDate = formatCurrentDate();

  const {
    title = 'Next.js 템플릿에 오신 것을 환영합니다', // 영문 65자 / 한글 32자
    description, // 영문 160 / 한글 77자
    image = 'https://imagedelivery.net/vJSpkH6oHM7zquolzolo7A/77550435-1cc9-4b42-4519-3cd83f149b00/public',
    isArticle = false,
    articleData = { author: 'deepfactory', createdAt: currentDate, updatedAt: currentDate },
    locale = 'ko',
  } = props;

  const { locales = ['ko', 'en'], asPath } = useRouter();

  const siteName = 'deepfactory';
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL;
  const logoUrl = '/assets/favicons/favicon-512x512.png';

  const siteDB = {
    '@context': 'https://schema.org',
    '@type': isArticle ? 'Article' : 'WebPage',
    name: title,
    alternateName: 'Next.js UIUX Design Template',
    description: description,
    keywords:
      'uiux, free, free ui, free design, design, webui, appui, webdesign, 웹디자인, 무료디자인, 무료uiux, 무료웹디자인, 모바일디자인, 반응형디자인, figma, framer, figma community',
    url: `${siteUrl}${asPath}`,
    image: image,
    author: isArticle
      ? { '@type': 'Person', name: articleData.author || 'Unknown' }
      : { '@type': 'Organization', name: siteName, logo: { '@type': 'ImageObject', url: logoUrl } },
    datePublished: currentDate,
    dateModified: currentDate,
    publisher: {
      '@type': 'Organization',
      name: siteName,
      logo: { '@type': 'ImageObject', url: logoUrl },
    },
    headline: title,
    mainEntityOfPage: { '@type': 'WebPage', '@id': `${siteUrl}${asPath}` },
    inLanguage: locale,
    articleSection: isArticle ? title : undefined,
    articleBody: isArticle ? description : undefined,
    thumbnailUrl: image,
    potentialAction: {
      '@type': 'ReadAction',
      target: `${siteUrl}${asPath}`,
      name: isArticle ? 'Read Article' : 'Visit Page',
    },
  };

  const hreflangLinks = locales?.map(lng => (
    <link key={lng} rel='alternate' hrefLang={lng} href={`${siteUrl}/${lng}${asPath}`} />
  ));

  return (
    <Head>
      <title>{title}</title>
      <meta name='description' content={description} />
      <meta name='keywords' content={siteDB.keywords} />

      {/* Open Graph tags for Facebook, LinkedIn */}
      <meta property='og:locale' content={locale === 'ko' ? 'ko_KR' : 'en_US'} />
      <meta name='geo.region' content={locale === 'ko' ? 'KR' : 'US'} />
      <meta property='og:site_name' content={siteName} />
      <meta property='og:type' content={isArticle ? 'article' : 'website'} />
      <meta property='og:title' content={title} />
      <meta property='og:description' content={description} />
      <meta property='og:url' content={`${siteUrl}${asPath}`} />
      <meta property='og:image' content={image} />
      <meta property='og:image:alt' content={description} />
      <meta property='og:image:type' content='image/png' />
      <meta property='og:image:width' content='1200' />
      <meta property='og:image:height' content='630' />

      {/* Article-specific Open Graph tags */}
      {isArticle && (
        <>
          <meta property='article:published_time' content={articleData?.createdAt} />
          <meta property='article:modified_time' content={articleData?.updatedAt} />
          <meta property='article:author' content={articleData.author} />
          <meta property='article:section' content={title} />
        </>
      )}

      {/* Twitter Card tags */}
      <meta name='twitter:card' content='summary_large_image' />
      <meta name='twitter:site' content='@mycodings' />
      <meta name='twitter:creator' content='@mycodings' />
      <meta name='twitter:title' content={title} />
      <meta name='twitter:description' content={description} />
      <meta name='twitter:image' content={image} />
      <meta name='twitter:image:alt' content={description} />

      {/* Canonical URL and hreflang links */}
      <link rel='canonical' href={`${siteUrl}${asPath}`} />
      <link rel='alternate' hrefLang='x-default' href={siteUrl} />
      {hreflangLinks}

      {/* RSS */}
      <link rel='alternate' type='application/rss+xml' title='Dble UI RSS Feed' href='/api/rss' />

      {/* Structured data for SEO */}
      <Script type='application/ld+json' dangerouslySetInnerHTML={{ __html: JSON.stringify(siteDB, null, 2) }} />
    </Head>
  );
}

const formatCurrentDate = () => {
  const now = new Date();

  const timeZoneOffset = -now.getTimezoneOffset();
  const offsetHours = Math.floor(Math.abs(timeZoneOffset) / 60);
  const offsetMinutes = Math.abs(timeZoneOffset) % 60;
  const sign = timeZoneOffset >= 0 ? '+' : '-';
  const formattedOffset = `${sign}${String(offsetHours).padStart(2, '0')}:${String(offsetMinutes).padStart(2, '0')}`;

  const formattedDate = now.toISOString().replace(/\.\d{3}Z$/, '');

  return `${formattedDate}${formattedOffset}`;
};
