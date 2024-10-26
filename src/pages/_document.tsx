import AppIcons from '@/head/appIcons';
import SplashScreens from '@/head/splashscreens';
import Document, { DocumentContext, DocumentInitialProps, Head, Html, Main, NextScript } from 'next/document';

type Breadcrumb = {
  position: number;
  name: string;
  item: string;
};

interface MyDocumentProps extends DocumentInitialProps {
  breadcrumbList: Breadcrumb[] | null;
}

const MyDocument = ({ breadcrumbList }: MyDocumentProps) => {
  return (
    <Html lang='ko'>
      <Head>
        <meta charSet='utf-8' />
        <meta name='robots' content='index, follow' />
        <link rel='manifest' href='/manifest.json' />

        <AppIcons />
        <SplashScreens />

        {breadcrumbList && (
          <script
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
  const currentPath = ctx.pathname;
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL!;

  const breadcrumbs: { [key: string]: Breadcrumb[] } = {
    '/': [{ position: 1, name: 'home', item: siteUrl }],
    '/form-fields': [
      { position: 1, name: 'home', item: siteUrl },
      { position: 2, name: 'form', item: siteUrl + '/form-fields' },
    ],
  };

  // 현재 경로에 해당하는 BreadcrumbList가 있는지 확인
  const breadcrumbList = breadcrumbs[currentPath] || null;

  return {
    ...initialProps,
    breadcrumbList,
  };
};

export default MyDocument;
