import Head from 'next/head'
import styles from './layout.module.css'

import Link from 'next/link'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'


const name = 'Thanh Hieu'
export const siteTitle = 'Next App'

export default function Layout({ children, title }) {
  return (
    <div className={styles.container}>
        <Head>
            <link rel="icon" href="/favicon.ico" />
            <meta
            name="description"
            content="Learn how to build a personal website using Next.js"
            />
            <meta
            property="og:image"
            content={`https://og-image.vercel.app/${encodeURI(
                siteTitle
            )}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
            />
            <title>{title}</title>
            <meta name="og:title" content={siteTitle} />
            <meta name="twitter:card" content="summary_large_image" />
            <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous"></link>
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.1/css/all.min.css" />
        </Head>
        <header className={styles.header}>
          <Header/>
        </header>

        <main>{children}</main>

        <footer>
          <Footer/>
        </footer>

    </div>
  )
}