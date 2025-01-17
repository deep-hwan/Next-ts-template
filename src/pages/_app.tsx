import type { AppProps } from 'next/app';
import { useState } from 'react';
import SEOConfig from '../../next-seo.config';

//hooks
import { HydrationBoundary, QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { SessionProvider } from 'next-auth/react';
import { DefaultSeo } from 'next-seo';
import { RecoilRoot } from 'recoil';

//libs
import App from '@/app/_layout/components/App';
import { GlobalThemes } from '@/app/_layout/components/GlobalThemes';
import { useScrollRestoration } from '@/libs/hooks/useScrollRestoration';
import Head from 'next/head';

export default function MyApp({ Component, pageProps, router }: AppProps) {
  useScrollRestoration(router);
  const [client] = useState(() => new QueryClient());

  return (
    <>
      <Head>
        <meta
          name='viewport'
          content='width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0, viewport-fit=cover'
        />
      </Head>

      <DefaultSeo {...SEOConfig} />

      <QueryClientProvider client={client}>
        <HydrationBoundary state={pageProps.dehydratedState}>
          <SessionProvider session={pageProps.session} basePath='/api/auth'>
            <RecoilRoot>
              <GlobalThemes>
                <App>
                  <Component {...pageProps} />
                </App>
              </GlobalThemes>
            </RecoilRoot>
          </SessionProvider>
        </HydrationBoundary>
      </QueryClientProvider>
    </>
  );
}
