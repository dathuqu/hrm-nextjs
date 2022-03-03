import Head from 'next/head'
import Image from 'next/image'
import React, { useState, useEffect, useRef, ReactNode } from 'react'
import Link from 'next/link'
import * as CSS from 'csstype'

import styles from '../../styles/home.module.css'
import profilePic from '../../public/images/logo.svg'

type Props = {
  children?: ReactNode
  title?: string
}

const Layout = ({ children, title = 'HRM Admin System' }: Props) => {
  const [toggleViewMode, setToggleViewMode] = useState(false)
  const toggleStyle: CSS.Properties = {
    width: '224px',
    position: 'absolute',
    inset: '0px 0px auto auto',
    margin: '0px',
    transform: 'translate(-31px, 52px)'
  }
  return (
    <div className={styles.container111}>
      <Head>
        <title>{title}</title>
        <meta name="description" content="HRM Admin System!!!" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* <!-- BEGIN: Top Bar --> */}
      <div className="border-b border-theme-24 -mt-10 md:-mt-5 -mx-3 sm:-mx-8 px-3 sm:px-8 pt-3 md:pt-0 mb-10">
        <div className="top-bar-boxed flex items-center">
          {/* <!-- BEGIN: Logo --> */}
          <a href="" className="-intro-x hidden md:flex">
            {/* <Image alt="HRM Admin" sizes="50vw" layout="fill" className="w-6" src={profilePic} /> */}
            <span className="text-white text-lg ml-3">HRM<span className="font-medium"> Admin</span></span>
          </a>
          {/* <!-- END: Logo --> */}

          {/* <!-- BEGIN: Breadcrumb --> */}
          <div className="-intro-x breadcrumb breadcrumb--light mr-auto">
            <a href="" className="">Application</a>
            <i data-feather="chevron-right" className="breadcrumb__icon"></i>
            <a href="" className="breadcrumb--active">Dashboard</a>
          </div>
          {/* <!-- END: Breadcrumb --> */}


          {/* <!-- BEGIN: Account Menu --> */}
          <div className="intro-x dropdown w-8 h-8 relative">
            <div className="dropdown-toggle w-8 h-8 rounded-full overflow-hidden shadow-lg image-fit zoom-in scale-110">
              <Image alt="HRM Admin" width="100%" height="100%" src="/images/profile.jpg" onClick={() => setToggleViewMode(!toggleViewMode)} />
            </div>
            <div className={`dropdown-box w-56 ${toggleViewMode ? 'show' : ''}`} style={ toggleViewMode ? toggleStyle : {} }>
              <div className="dropdown-box__content box bg-theme-38 dark:bg-dark-6 text-white">
                <div className="p-4 border-b border-theme-40 dark:border-dark-3">
                  <div className="font-medium">Tom Cruise</div>
                  <div className="text-xs text-theme-41 mt-0.5 dark:text-gray-600">Software Engineer</div>
                </div>
                <div className="p-2 border-t border-theme-40 dark:border-dark-3">
                  <a href="" className="flex items-center block p-2 transition duration-300 ease-in-out hover:bg-theme-1 dark:hover:bg-dark-3 rounded-md"> <i data-feather="toggle-right" className="w-4 h-4 mr-2"></i> Logout </a>
                </div>
              </div>
            </div>
          </div>
          {/* <!-- END: Account Menu --> */}
        </div>
      </div>
      {/* <!-- END: Top Bar --> */}

      {/* <!-- BEGIN: Top Menu --> */}
      <nav className="top-nav">
        <ul>
          <li>
            <a href="top-menu-light-dashboard.html" className="top-menu top-menu--active">
              <div className="top-menu__icon"> <i data-feather="home"></i> </div>
              <div className="top-menu__title"> Dashboard </div>
            </a>
          </li>
          <li>
            <a href="" className="top-menu">
                <div className="top-menu__icon"> <i data-feather="box"></i> </div>
                <div className="top-menu__title"> Menu Layout <i data-feather="chevron-down" className="top-menu__sub-icon"></i> </div>
            </a>
            <ul className="">
              <li>
                <a href="index.html" className="top-menu">
                  <div className="top-menu__icon"> <i data-feather="activity"></i> </div>
                  <div className="top-menu__title"> Side Menu </div>
                </a>
              </li>
              <li>
                <a href="simple-menu-light-dashboard.html" className="top-menu">
                  <div className="top-menu__icon"> <i data-feather="activity"></i> </div>
                  <div className="top-menu__title"> Simple Menu </div>
                </a>
              </li>
            </ul>
          </li>
        </ul>
      </nav>
      {/* <!-- END: Top Menu --> */}

      {/* <!-- BEGIN: Content --> */}
      <div className="content">
        {children}
      </div>
      {/* <!-- END: Content --> */}
    </div>
  )
}

export default Layout
