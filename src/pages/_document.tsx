import AppIcons from '@/head/appIcons';
import SplashScreens from '@/head/splashscreens';
import { WebSiteJsonLd } from '@/libs/json-ld/webSiteJsonLd';
import { siteAuthor, siteUrl } from '@/libs/utils/site';

import Document, { DocumentContext, DocumentInitialProps, Head, Html, Main, NextScript } from 'next/document';
import Script from 'next/script';

type Breadcrumb = {
  position: number;
  name: string;
  url: string;
};

interface MyDocumentProps extends DocumentInitialProps {
  breadcrumbList: Breadcrumb[] | null;
  locale: string;
}

const MyDocument = ({ breadcrumbList, locale }: MyDocumentProps) => {
  return (
    <Html lang={locale}>
      <Head>
        <meta charSet='utf-8' />

        <meta name='robots' content='index, follow' />
        <link rel='manifest' href='/manifest.json' />
        <meta name='author' content={siteAuthor} />
        <link rel='alternate' type='application/rss+xml' title='ex_Service RSS Feed' href='/api/rss' />
        {/* Global Scripts */}
        <AppIcons />
        <SplashScreens />
        {/* JSON_LD */}
        <WebSiteJsonLd />
        {breadcrumbList && (
          <Script
            type='application/ld+json'
            dangerouslySetInnerHTML={{
              __html: JSON.stringify({
                '@context': 'https://schema.org',
                '@type': 'BreadcrumbList',
                itemListElement: breadcrumbList.map((breadcrumb: Breadcrumb) => ({
                  '@type': 'ListItem',
                  position: breadcrumb.position,
                  name: breadcrumb.name,
                  item: breadcrumb.url,
                })),
              }),
            }}
          />
        )}
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
};

MyDocument.getInitialProps = async (ctx: DocumentContext): Promise<MyDocumentProps> => {
  const initialProps = await Document.getInitialProps(ctx);

  // Define breadcrumb list
  const breadcrumbs: { [key: string]: Breadcrumb[] } = {
    '/': [{ position: 1, name: 'home', url: siteUrl }],
    '/form-fields': [{ position: 1, name: '소개팅앱', url: siteUrl + '/form-fields' }],
  };

  const breadcrumbList = breadcrumbs[ctx.pathname] || null;

  return {
    ...initialProps,
    breadcrumbList,
    locale: ctx.locale ?? 'ko',
  };
};

export default MyDocument;
