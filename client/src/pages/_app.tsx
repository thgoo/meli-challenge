import Head from 'next/head';
import type { AppProps } from 'next/app';
import '@/assets/style/globals.scss';

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Meli Challenge</title>
        <meta name="description" content="La comunidad de compra y venta online más grande de América Latina." />
        <meta property="og:image" content="./mercado-libre.png?v=2" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <Component {...pageProps} />
    </>
  );
}
