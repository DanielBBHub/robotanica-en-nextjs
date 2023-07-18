import { Html, Head, Main, NextScript } from 'next/document'
 
export default function Document() {
  return (
    <Html>
      <Head>
        <link href="/dist/output.css" rel="stylesheet"></link>
        <link href="https://cdn.jsdelivr.net/npm/daisyui@2.51.6/dist/full.css" rel="stylesheet" type="text/css"/>
            
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}