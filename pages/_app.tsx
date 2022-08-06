import "../styles/globals.css";
import type { AppProps } from "next/app";
import Layout from "../components/Layout";
import NextNProgress from "nextjs-progressbar";
import Head from "next/head";
import { META } from "../constants/common";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <meta httpEquiv="x-ua-compatible" content="ie=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />

        <title>Yiğithan Yücedağ</title>
        <meta name="description" content={META.description} />
        <link rel="canonical" href={META.url} />

        {/* facebook */}
        <meta property="og:url" content={META.url} />
        <meta property="og:type" content="website" />
        <meta property="og:title" content={META.title} />
        <meta property="og:description" content={META.description} />

        {/* twitter */}
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:url" content={META.url} />
        <meta name="twitter:title" content={META.title} />
        <meta name="twitter:description" content={META.description} />
      </Head>

      <NextNProgress color="#2563eb" />
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}

export default MyApp;
