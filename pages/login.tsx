import type { NextPage } from 'next'
import Layout from '../components/layout/login'

const Login: NextPage = () => {
  return (
    <Layout title="Login">
      <div className="h-screen xl:h-auto flex py-5 xl:py-0 my-10 xl:my-0">
        <div className="my-auto mx-auto xl:ml-20 bg-white xl:bg-transparent px-5 sm:px-8 py-8 xl:p-0 rounded-md shadow-md xl:shadow-none w-full sm:w-3/4 lg:w-2/4 xl:w-auto">
          <h2 className="intro-x font-bold text-2xl xl:text-3xl text-center xl:text-left">
            Sign In
          </h2>
          <div className="intro-x mt-8">
            <input type="text" className="intro-x login__input input input--lg border border-gray-300 block" placeholder="Email" />
            <input type="password" className="intro-x login__input input input--lg border border-gray-300 block mt-4" placeholder="Password" />
          </div>
          <div className="intro-x mt-5 xl:mt-8 text-center xl:text-left">
            <button className="button button--lg w-full xl:w-32 text-white bg-theme-1 xl:mr-3 align-top">Login</button>
            <button className="button button--lg w-full xl:w-32 text-gray-700 border border-gray-300 dark:border-dark-5 dark:text-gray-300 mt-3 xl:mt-0 align-top">Sign up</button>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default Login
