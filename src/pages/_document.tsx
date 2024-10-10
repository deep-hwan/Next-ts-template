import AppIcons from '@/head/appIcons';
import SplashScreens from '@/head/splashscreens';
import { Head, Html, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html lang='ko'>
      <Head>
        <meta charSet='utf-8' />
        <meta name='robots' content='index, follow' />
        <meta
          name='viewport'
          content='width=device-width, initial-scale=1.0, user-scalable=no, maximum-scale=1,minimum-scale=1, shrink-to-fit=no, viewport-fit=cover'
        />

        <link rel='manifest' href='/manifest.json' />

        <link rel='preconnect' href='https://fonts.googleapis.com' />
        <link rel='preconnect' href='https://fonts.gstatic.com' />

        <AppIcons />
        <SplashScreens />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
