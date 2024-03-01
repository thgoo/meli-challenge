import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html lang="es-AR">
      <Head>
        <link href="/favicon.svg" rel="icon" />
        <link href="/180x180.png" rel="apple-touch-icon" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
