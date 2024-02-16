import Layout from '@/components/layout'
import AuthContextProvider from '@/context/authcontext'
import '@/styles/globals.css'
import Head from 'next/head'
import { useEffect } from 'react'

export default function App({
  Component,
  pageProps: { session, ...pageProps },
}) {
  useEffect(() => {
    document.documentElement.classList.add('dark')
  }, [])
  return (
    <>
      <Head>
        <title>Art Gallery</title>
      </Head>
      <AuthContextProvider>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </AuthContextProvider>
    </>
  )
}
