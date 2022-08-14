import "../styles/globals.css";
import "../styles/prism.css";
import type { AppProps } from "next/app";
import Layout from "../components/Layout";
import NextNProgress from "nextjs-progressbar";
import Head from "next/head";
import { META } from "../constants/common";
import { DefaultSeo } from "next-seo";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <DefaultSeo
        titleTemplate={`%s | ${META.title}`}
        defaultTitle={`${META.title}`}
        description={META.description}
        // languageAlternates
        openGraph={{
          type: "website",
          locale: "tr_TR",
          url: META.url,
          site_name: META.title,
        }}
        twitter={{
          handle: META.twitterUsername,
          site: META.twitterUsername,
          cardType: "summary_large_image",
        }}
      />
      <NextNProgress color="#2563eb" />
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}

export default MyApp;
