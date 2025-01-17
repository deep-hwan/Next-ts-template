import { OrganizationJsonLd } from '@/libs/json-ld/organizationJsonLd';
import { ServiceJsonLd } from '@/libs/json-ld/serviceJsonLd';
import { WebPageJsonLd } from '@/libs/json-ld/webPageJsonLd';
import { siteDescription, siteImageUrl, siteName, siteTitle, siteUrl } from '@/libs/utils/site';
import { NextSeo } from 'next-seo';
import { useRouter } from 'next/router';

type SEOProps = {
  title?: string;
  description?: string;
  image?: string;
  isArticle?: boolean;
};

export default function SEO({
  title = siteTitle,
  description = siteDescription,
  image = siteImageUrl,
  isArticle = false,
}: SEOProps) {
  const { asPath } = useRouter();

  const fullUrl = `${siteUrl}${asPath}`;

  return (
    <>
      {/* NextSeo 설정 */}
      <NextSeo
        title={title}
        description={description}
        canonical={fullUrl} // Canonical URL이 현재 페이지 경로에 맞게 설정
        openGraph={{
          type: isArticle ? 'article' : 'website',
          url: fullUrl,
          title: `${title}`,
          description: description,
          locale: 'ko_KR',
          site_name: siteName,
          images: [
            {
              url: `${siteUrl}${image}`, // 기본 이미지 경로를 siteUrl과 함께 처리
              width: 1200,
              height: 630,
              alt: title,
            },
          ],
        }}
        additionalLinkTags={[
          { rel: 'alternate', hrefLang: 'x-default', href: siteUrl },
          { rel: 'alternate', hrefLang: 'ko', href: fullUrl },
        ]}
        twitter={{
          handle: '@deep',
          site: '@deep',
          cardType: 'summary_large_image',
        }}
      />

      <OrganizationJsonLd title={title} siteUrl={fullUrl} />
      <WebPageJsonLd title={title} description={description} siteUrl={fullUrl} />
      <ServiceJsonLd description={description} />
    </>
  );
}
