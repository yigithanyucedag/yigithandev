import NextDocument, { Html, Head, Main, NextScript } from "next/document";
import { GA_ID } from "constants/common";
import Script from "next/script";

export default class MyDocument extends NextDocument {
  static getInitialProps(ctx: any) {
    return NextDocument.getInitialProps(ctx);
  }

  render() {
    return (
      <Html lang="tr">
        <Head>
          {/* base */}
          <meta charSet="utf-8" />
          <meta name="msapplication-TileColor" content="#2b5797" />

          {/* pwa */}
          <link
            rel="mask-icon"
            href="/static/icons/safari-pinned-tab.svg"
            color="#2563eb"
          />
          <link href="/static/icons/site.webmanifest" rel="manifest" />
          <link
            href="/static/icons/apple-touch-icon.png"
            rel="apple-touch-icon"
            sizes="180x180"
          />
          <link
            href="/static/icons/favicon-32x32.png"
            rel="icon"
            sizes="32x32"
            type="image/png"
          />
          <link
            href="/static/icons/favicon-16x16.png"
            rel="icon"
            sizes="16x16"
            type="image/png"
          />
          <link
            color="#ffffff"
            href="/static/icons/safari-pinned-tab.svg"
            rel="mask-icon"
          />
          <meta content="#ffffff" name="theme-color" />
          <meta content="#ffffff" name="msapplication-TileColor" />

          <Script
            strategy="worker"
            src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
          />
          <Script strategy="lazyOnload" type="text/javascript">
            {`
                  window.dataLayer = window.dataLayer || [];
                  function gtag(){ dataLayer.push(arguments); }
                  gtag('js', new Date());
                  gtag('config', '${GA_ID}');
                `}
          </Script>
        </Head>

        <body className="bg-white text-zinc-900 antialiased dark:bg-zinc-900 dark:text-zinc-100">
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
