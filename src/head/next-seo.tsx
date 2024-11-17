import { ArticleJsonLd, NextSeo } from 'next-seo';
import { useRouter } from 'next/router';
import Script from 'next/script';

type SEOProps = {
  title?: string;
  description?: string;
  image?: string;
  isArticle?: boolean;
  articleData?: {
    author: string;
    createdAt: string;
    updatedAt?: string;
  };
  subMenus?: {
    label: string;
    path: string;
  }[];
};

export default function SEO({
  title = 'Next-Template',
  description = 'Next-Template Description',
  image = 'https://imagedelivery.net/vJSpkH6oHM7zquolzolo7A/77550435-1cc9-4b42-4519-3cd83f149b00/public',
  isArticle = false,
  articleData = { author: 'deepfactory', createdAt: formatCurrentDate(), updatedAt: formatCurrentDate() },
  subMenus = [
    { label: 'menu1', path: '/menu1' },
    { label: 'menu2', path: '/menu2' },
    { label: 'menu3', path: '/menu3' },
  ],
}: SEOProps) {
  const { locale = 'en', asPath } = useRouter();
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL!;
  const fullUrl = `${siteUrl}${locale === 'ko' ? '' : `${'/' + locale}`}${asPath}`;

  return (
    <>
      {/* NextSeo 설정 */}
      <NextSeo
        title={title}
        description={description}
        canonical={fullUrl}
        openGraph={{
          type: isArticle ? 'article' : 'website',
          url: fullUrl,
          title,
          description,
          locale: locale === 'ko' ? 'ko_KR' : 'en_US',
          site_name: 'SiteName',
          images: [
            {
              url: image,
              width: 1200,
              height: 630,
              alt: description,
            },
          ],
        }}
        additionalLinkTags={[
          { rel: 'alternate', hrefLang: 'x-default', href: siteUrl },
          { rel: 'alternate', hrefLang: locale, href: fullUrl },
        ]}
        twitter={{
          handle: '@mycodings',
          site: '@mycodings',
          cardType: 'summary_large_image',
        }}
      />

      {/* JSON-LD for Article */}
      {isArticle && (
        <ArticleJsonLd
          type='Article'
          url={fullUrl}
          title={title}
          images={[`${siteUrl}${image}`]}
          datePublished={articleData.createdAt}
          dateModified={articleData.updatedAt || articleData.createdAt}
          authorName={articleData.author}
          publisherName='SiteName'
          publisherLogo={`${siteUrl}/assets/favicons/favicon-512x512.png`}
          description={description}
        />
      )}

      {/* JSON-LD for SubMenus */}
      {subMenus.length > 0 && (
        <Script
          type='application/ld+json'
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'WebSite',
              name: 'SiteName',
              url: siteUrl,
              potentialAction: {
                '@type': 'SearchAction', // 사용자가 특정 웹사이트 내에서 검색 기능을 사용할 수 있음
                target: `${siteUrl}/search?query={search_term_string}`, // 사용자가 search 페이지에서 “금융 서비스”를 검색하면 최종 URL은 https://SiteName.com/search?query=금융%20서비스가 됩니다
                'query-input': 'required name=search_term_string',
              },
              mainEntity: subMenus.map(menu => ({
                '@type': 'SiteNavigationElement',
                name: menu.label,
                url: `${siteUrl}${menu.path}`,
              })),
            }),
          }}
        />
      )}
    </>
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
