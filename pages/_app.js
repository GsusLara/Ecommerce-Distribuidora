import "../styles/index.scss"
import Head from "next/head"

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0,user-scalable=0" />
        <title>Ecomerce | Template</title>
      </Head>
      <Component {...pageProps} />
    </>
  )
}
