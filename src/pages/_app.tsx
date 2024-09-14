import type { AppProps } from "next/app";
import { useState } from "react";

//hooks
import { dehydrate, Hydrate, QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { SessionProvider } from "next-auth/react";
import { RecoilRoot } from "recoil";

//libs
import App from "@/app/_layout/components/App";
import { GlobalThemes } from "@/app/_layout/components/GlobalThemes";

//
export default function MyApp({ Component, pageProps }: AppProps) {
    const [client] = useState(() => new QueryClient());
    const dehydratedState = dehydrate(client);

    return (
        <QueryClientProvider client={client}>
            <Hydrate state={dehydratedState}>
                <SessionProvider session={pageProps.session} basePath="/api/auth">
                    <RecoilRoot>
                        <GlobalThemes>
                            <App>
                                <Component {...pageProps} />
                            </App>
                        </GlobalThemes>
                    </RecoilRoot>
                </SessionProvider>
            </Hydrate>
        </QueryClientProvider>
    );
}
