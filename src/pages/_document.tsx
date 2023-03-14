import { createGetInitialProps } from "@mantine/next";
import Document, { Head, Html, Main, NextScript } from "next/document";

const getInitialProps = createGetInitialProps();

export default class _Document extends Document {
  static getInitialProps = getInitialProps;

  render() {
    return (
      <Html>
        <Head>
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" />
          <link
            href="https://fonts.googleapis.com/css2?family=Anton&family=Inter:wght@700&family=Tilt+Warp&display=swap"
            rel="stylesheet"
          />
        </Head>
        <body className="bg-slate-900 text-slate-50">
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
