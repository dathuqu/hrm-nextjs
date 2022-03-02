import Head from 'next/head'
import Image from 'next/image'
import React, { ReactNode } from 'react'
import Link from 'next/link'

import styles from '../../styles/home.module.css'

type Props = {
  children?: ReactNode
  title?: string
}

const Layout = ({ children, title = 'HRM Admin System' }: Props) => {
  return (
    <div className={styles.container}>
      <Head>
        <title>{title}</title>
        <meta name="description" content="HRM Admin System!!!" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to <a href="https://nextjs.org">Next.js!</a>
        </h1>

        <div className={styles.grid}>
          <Link href="/user">
            <a>Users List</a>
          </Link>{' '}
        </div>
      </main>

      {children}

      <footer className={styles.footer}>
        <a
          href="https://vercel.com"
          target="_blank"
          rel=""
        >
          Powered by{' '}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  )
}

export default Layout
