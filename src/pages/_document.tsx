import NextDocument, { Head, Html, Main, NextScript } from 'next/document'

export default class Document extends NextDocument {
  render() {
    return (
      <Html className="h-full antialiased" lang="nl">
        <Head></Head>
        <body className="flex h-full flex-col bg-zinc-50">
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}
