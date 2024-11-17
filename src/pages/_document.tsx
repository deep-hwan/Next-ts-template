import AppIcons from '@/head/appIcons';
import SplashScreens from '@/head/splashscreens';
import Document, { DocumentContext, DocumentInitialProps, Head, Html, Main, NextScript } from 'next/document';
import Script from 'next/script';

type Breadcrumb = {
  position: number;
  name: string;
  item: string;
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
        <meta name='naver-site-verification' content='b103716add1d596dc8401dfaded526b2dc410145' />
        <meta name='google-site-verification' content='orV40Xy6ataIMkUjo7A8pWeWc-0ralWV8ld_rhw9ojc' />
        <link rel='manifest' href='/manifest.json' />
        <link rel='alternate' type='application/rss+xml' title='ex_Service RSS Feed' href='/api/rss' />

        {/* Global Scripts */}
        <AppIcons />
        <SplashScreens />

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
                  item: breadcrumb.item,
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
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL!;

  // Define breadcrumb list
  const breadcrumbs: { [key: string]: Breadcrumb[] } = {
    '/': [
      { position: 1, name: 'home', item: siteUrl },
      { position: 2, name: 'form', item: siteUrl + '/form-fields' },
    ],
    '/form-fields': [
      { position: 1, name: 'home', item: siteUrl },
      { position: 2, name: 'form', item: siteUrl + '/form-fields' },
    ],
  };

  const breadcrumbList = breadcrumbs[ctx.pathname] || null;

  return {
    ...initialProps,
    breadcrumbList,
    locale: ctx.locale ?? 'en',
  };
};

export default MyDocument;
