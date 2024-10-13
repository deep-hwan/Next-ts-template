import type { AppProps } from 'next/app';
import { useState } from 'react';

//hooks
import { HydrationBoundary, QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { SessionProvider } from 'next-auth/react';
import { RecoilRoot } from 'recoil';

//libs
import App from '@/app/_layout/components/App';
import { GlobalThemes } from '@/app/_layout/components/GlobalThemes';
import { useScrollRestoration } from '@/libs/hooks/useScrollRestoration';

export default function MyApp({ Component, pageProps, router }: AppProps) {
  useScrollRestoration(router);
  const [client] = useState(() => new QueryClient());

  return (
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
  );
}
