import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/@vime/core@^5/themes/default.css"
        />
        <link rel="shortcut icon" href="/favicon.png" />
        <script src="https://unpkg.com/flowbite@1.6.0/dist/flowbite.min.js"></script>
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
