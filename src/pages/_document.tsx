import NextDocument, { Html, Head, Main, NextScript } from "next/document";

export default class Document extends NextDocument {
  render() {
    return (
      <Html lang="en">
        <Head />
        <body >
          <Main />
          <div id="drawer-root" />
          <div id="dialog-root" />
          <NextScript />
        </body>
      </Html>
    );
  }
}
