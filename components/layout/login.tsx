import Head from 'next/head'
import React, { ReactNode } from 'react'

type Props = {
  children?: ReactNode
  title?: string
}

const Layout = ({ children, title = 'HRM Admin System' }: Props) => {
  return (
    <div className={'login'}>
      <Head>
        <title>{title}</title>
        <meta name="description" content="HRM Admin System!!!" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="container sm:px-10">
        <div className="block xl:grid grid-cols-2 gap-4">
          {/* <!-- BEGIN: Login Info --> */}
          <div className="hidden xl:flex flex-col min-h-screen">
            <a href="" className="-intro-x flex items-center pt-5">
              <span className="text-white text-lg ml-3"> HRM<span className="font-medium"> Admin</span> </span>
            </a>
            <div className="my-auto">
              <div className="-intro-x text-white font-medium text-4xl leading-tight mt-10">
                  Human resource management system
              </div>
              <div className="-intro-x mt-5 text-lg text-white dark:text-gray-500">paxcreation.com</div>
            </div>
          </div>
          {/* <!-- END: Login Info --> */}
          {/* <!-- BEGIN: Login Form --> */}
          {children}
          {/* <!-- END: Login Form --> */}
        </div>
      </div>
    </div>
  )
}

export default Layout
