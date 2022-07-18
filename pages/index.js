import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { Player } from '@lottiefiles/react-lottie-player';

export default function Home() {
  return (
    <div>
    <Head>
    <title>Fast Lane</title>
    <meta charSet="utf-8" />
    <meta
      name="viewport"
      content="width=device-width, initial-scale=1, shrink-to-fit=no"
      />
    <meta name="description" content="" />
    <meta name="author" content="" />
    <link
      rel="stylesheet"
      href="https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;700&display=swap"
      />
    {/* <link rel="stylesheet" href="css/tailwind/tailwind.min.css" /> */}
    <link rel="icon" type="image/png" sizes="16x16" href="favicon-tailwind.png" />
    </Head>

    <div className="antialiased bg-body text-body font-body">
  <div className="">

    {/* HEADER INTRO */}
    <section className="skewed-bottom-right">
      <nav className="relative px-6 py-6 flex justify-between items-center bg-gray-50">
        <a className="text-3xl font-bold leading-none justify-center items-center flex h-12" href="#">
          <img
            className="h-12 hover:h-[2.85rem] transition-all duration-200"
            src="/assets/logos/PFL/PFL-purple-black.svg"
            alt="PFL logo"
            width="auto"
          />
        </a>
        <div className="lg:hidden">
          <button className="navbar-burger flex items-center text-gray-400 p-3">
            <svg
              className="block h-4 w-4 fill-current"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title>Mobile menu</title>
              <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
            </svg>
          </button>
        </div>
        <ul className="hidden absolute top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2 lg:flex lg:mx-auto lg:flex lg:items-center lg:w-auto lg:space-x-6">
          <li>
            <a className="text-sm text-gray-400 hover:text-gray-600 duration-500" href="#">
              Start
            </a>
          </li>
          <li className="text-gray-200">
            <svg
              className="w-4 h-4 current-fill"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z"
              />
            </svg>
          </li>
          <li>
            <a className="text-sm text-purple-600 font-bold" href="#">
              About Us
            </a>
          </li>
          <li className="text-gray-200">
            <svg
              className="w-4 h-4 current-fill"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z"
              />
            </svg>
          </li>
          <li>
            <a className="text-sm text-gray-400 hover:text-gray-600 duration-500" href="#">
              Documentation
            </a>
          </li>
          <li className="text-gray-200">
            {/* <svg class="w-4 h-4 current-fill" xmlns="http://www.w3.org/2000/svg" fill="none" viewbox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z"></path></svg></li>
      <li><a class="text-sm text-gray-400 hover:text-gray-500" href="#">Contact Us</a></li>
      <li class="text-gray-200">
        <svg class="w-4 h-4 current-fill" xmlns="http://www.w3.org/2000/svg" fill="none" viewbox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z"></path></svg></li>
      <li><a class="text-sm text-gray-400 hover:text-gray-500" href="#">Discord</a></li> */}
          </li>
        </ul>
        <a
          className="hidden lg:block py-2 px-6 bg-white hover:bg-gray-50 text-sm text-purple-600 font-bold rounded-l-xl rounded-t-xl transition duration-200"
          href="#"
        >
          Contact Us
        </a>
      </nav>
      <div className="bg-gray-50 px-20 radius-for-skewed">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap -mx-4">
            <div className="w-full lg:w-1/2 px-4 mb-12 md:mb-20 lg:mb-0 flex items-center">
              <div className="w-full text-center lg:text-left">
                <div className="max-w-md mx-auto lg:mx-0">
                  <h2 className="mb-3 text-4xl lg:text-5xl font-bold font-heading leading-snug">
                    <span>Introducing the</span>
                    <span className="text-purple-600"> Fast Lane </span>
                    <span>on Polygon</span>
                  </h2>
                </div>
                <div className="max-w-sm mx-auto lg:mx-0">
                  <p className="mb-6 text-gray-400 leading-relaxed">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Pellentesque efficitur nisl sodales egestas lobortis.
                  </p>
                  <div>
                    <a
                      className="inline-block mb-3 lg:mb-0 lg:mr-3 w-full lg:w-auto py-2 px-6 leading-loose bg-purple-600 hover:bg-purple-700 text-white font-semibold rounded-l-xl rounded-t-xl transition duration-200"
                      href="#"
                    >
                      Get Started
                    </a>
                    <a
                      className="inline-block w-full lg:w-auto py-2 px-6 leading-loose font-semibold bg-white hover:bg-gray-50 rounded-l-xl rounded-t-xl transition duration-200"
                      href="#"
                    >
                      How it works
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-full lg:w-1/2 px-4 flex items-center justify-center">
              <Player
                autoplay
                loop
                src="https://assets7.lottiefiles.com/packages/lf20_zjcthz6w.json"
                // style={{ height: '670px', width: '670px' }}
                // className="h-[800px] w-[800px]"
              >
              </Player>
            </div>
          </div>
        </div>
      </div>
      <div className="mr-for-radius">
        <svg
          className="h-8 md:h-12 lg:h-20 w-full text-gray-50"
          viewBox="0 0 10 10"
          preserveAspectRatio="none"
        >
          <polygon fill="currentColor" points="0 0 10 0 0 10" />
        </svg>
      </div>
      {/* mobile burger navbar */}
      <div className="hidden navbar-menu fixed top-0 left-0 bottom-0 w-5/6 max-w-sm z-50">
        <div className="navbar-backdrop fixed inset-0 bg-gray-800 opacity-25" />
        <nav className="relative flex flex-col py-6 px-6 h-full w-full bg-white border-r overflow-y-auto">
          <div className="flex items-center mb-8">
            <a className="mr-auto text-3xl font-bold leading-none" href="#">
              <img
                className="h-10"
                src="/assets/logos/PFL/PFL-purple-black.svg"
                alt=""
                width="auto"
              />
            </a>
            <button className="navbar-close">
              <svg
                className="h-6 w-6 text-gray-400 cursor-pointer hover:text-gray-500"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
          <div>
            <ul>
              <li className="mb-1">
                <a
                  className="block p-4 text-sm font-semibold text-gray-400 hover:bg-purple-50 hover:text-purple-600 rounded"
                  href="#"
                >
                  Start
                </a>
              </li>
              <li className="mb-1">
                <a
                  className="block p-4 text-sm font-semibold text-gray-400 hover:bg-purple-50 hover:text-purple-600 rounded"
                  href="#"
                >
                  About Us
                </a>
              </li>
              <li className="mb-1">
                <a
                  className="block p-4 text-sm font-semibold text-gray-400 hover:bg-purple-50 hover:text-purple-600 rounded"
                  href="#"
                >
                  Services
                </a>
              </li>
              <li className="mb-1">
                <a
                  className="block p-4 text-sm font-semibold text-gray-400 hover:bg-purple-50 hover:text-purple-600 rounded"
                  href="#"
                >
                  Platform
                </a>
              </li>
              <li className="mb-1">
                <a
                  className="block p-4 text-sm font-semibold text-gray-400 hover:bg-purple-50 hover:text-purple-600 rounded"
                  href="#"
                >
                  Testimonials
                </a>
              </li>
            </ul>
          </div>
          <div className="mt-auto">
            <div className="pt-6">
              <a
                className="block px-4 py-3 mb-3 leading-loose text-xs text-center font-semibold leading-none bg-gray-50 hover:bg-gray-100 rounded-l-xl rounded-t-xl"
                href="#"
              >
                Sign In
              </a>
              <a
                className="block px-4 py-3 mb-2 leading-loose text-xs text-center text-white font-semibold bg-purple-600 hover:bg-purple-700 rounded-l-xl rounded-t-xl"
                href="#"
              >
                Sign Up
              </a>
            </div>
            <p className="my-4 text-xs text-center text-gray-400">
              <span>© 2022 All rights reserved.</span>
            </p>
            <div className="text-center">
              <a className="inline-block px-1" href="#">
                <img src="/assets/logos/social/facebook-purple.svg" alt="" />
              </a>
              <a className="inline-block px-1" href="#">
                <img src="/assets/logos/social/twitter-purple.svg" alt="" />
              </a>
              <a className="inline-block px-1" href="#">
                <img src="/assets/logos/social/instagram-purple.svg" alt="" />
              </a>
            </div>
          </div>
        </nav>
      </div>

    </section>
    {/* STATS */}
    <section className="pt-10 pb-0">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap text-center">
          <div className="mb-8 w-full md:w-1/2 lg:w-1/4">
            <h4 className="mb-2 text-gray-50">Stat One</h4>
            <span className="text-3xl lg:text-4xl font-bold text-gray-50">
              $33,261
            </span>
          </div>
          <div className="mb-8 w-full md:w-1/2 lg:w-1/4">
            <h4 className="mb-2 text-gray-50">Statistic Two</h4>
            <span className="text-3xl lg:text-4xl font-bold text-gray-50">
              481,095
            </span>
          </div>
          <div className="mb-8 w-full md:w-1/2 lg:w-1/4">
            <h4 className="mb-2 text-gray-50">Stat Three</h4>
            <span className="text-3xl lg:text-4xl font-bold text-gray-50">
              643,533
            </span>
          </div>
          <div className="mb-8 w-full md:w-1/2 lg:w-1/4">
            <h4 className="mb-2 text-gray-50">Statistic Four</h4>
            <span className="text-3xl lg:text-4xl font-bold text-gray-50">
              +12%
            </span>
          </div>
        </div>
      </div>
    </section>

    {/* FEATURES  */}
    <section>
      {/* <div className="skew skew-top mr-for-radius">
        <svg
          className="h-8 md:h-12 lg:h-20 w-full text-gray-900"
          viewBox="0 0 10 10"
          preserveAspectRatio="none"
        >
          <polygon fill="currentColor" points="0 0 10 10 0 10" />
        </svg>
      </div>
      <div className="skew skew-top ml-for-radius">
        <svg
          className="h-8 md:h-12 lg:h-20 w-full text-gray-900"
          viewBox="0 0 10 10"
          preserveAspectRatio="none"
        >
          <polygon fill="currentColor" points="0 10 10 0 10 10" />
        </svg>
      </div> */}
      <div className="pt-12 bg-gray-900 radius-for-skewed">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap items-center">
            <div className="w-full lg:w-1/2 mb-12 lg:mb-0">
              <div className="max-w-md lg:mx-auto">
                <span className="text-purple-600 font-bold">
                  Dolor sit amet consectutar
                </span>
                <h2 className="my-2 text-4xl lg:text-5xl font-bold font-heading text-white">
                  Build &amp; Launch without problems
                </h2>
                <p className="mb-6 text-gray-500 leading-loose">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Pellentesque efficitur nisl sodales egestas lobortis.
                </p>
                <ul className="text-gray-500 font-bold">
                  <li className="flex mb-4">
                    <svg
                      className="mr-2 w-6 h-6 text-green-400"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span>Vestibulum viverra ante non libero</span>
                  </li>
                  <li className="flex mb-4">
                    <svg
                      className="mr-2 w-6 h-6 text-green-400"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span>Morbi mollis metus pretium ultrices tincidunt</span>
                  </li>
                  <li className="flex mb-4">
                    <svg
                      className="mr-2 w-6 h-6 text-green-400"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span>Etiam lectus nunc, commodo et risus in</span>
                  </li>
                </ul>
              </div>
            </div>
            <div className="w-full lg:w-1/2 flex flex-wrap -mx-4">
              <div className="mb-8 lg:mb-0 w-full md:w-1/2 px-4">
                {/* FEATURE CARD 1 */}
                <div className="mb-8 py-6 pl-6 pr-4 shadow-md rounded bg-gray-800 border-gray-800 border-[1px] hover:border-purple-600 transition-all duration-500">
                  <span className="mb-4 inline-block p-3 rounded-lg bg-yellow-100">
                    {/* <svg
                      className="w-10 h-10 text-yellow-500"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                      />
                    </svg> */}
                    <img src='/assets/images/crypto-cycle.svg' className='h-11 w-11'></img>
                  </span>
                  <h4 className="mb-2 text-2xl font-bold font-heading text-white">
                    Earn From Your Order Flow
                  </h4>
                  <p className="text-gray-500 leading-loose">
                    Your new &amp; existing order flows will continue to
                    generate MEV, but without PFL you're not gaining anything
                    from it.
                  </p>
                </div>
                {/* FEATURE CARD 2 */}
                <div className="py-6 pl-6 pr-4 shadow-md rounded bg-gray-800 border-gray-800 border-[1px] hover:border-purple-600 transition-all duration-500">
                  <span className="mb-4 inline-block p-3 rounded-lg bg-pink-200">
                    {/* <svg
                      className="w-10 h-10 text-pink-500"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path d="M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3zM16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z" />
                    </svg> */}
                    <img src='/assets/images/secure.svg' className='h-11 w-11'></img>
                  </span>
                  <h4 className="mb-2 text-2xl font-bold font-heading text-white">
                    MEV Protection
                  </h4>
                  <p className="text-gray-500 leading-loose">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  </p>
                </div>
              </div>
              <div className="w-full md:w-1/2 lg:mt-20 px-4">
                {/* FEATURE CARD 3 */}
                <div className="mb-8 py-6 pl-6 pr-4 shadow-md rounded-lg bg-gray-800 border-gray-800 border-[1px] hover:border-purple-600 transition-all duration-500">
                  <span className="mb-4 inline-block p-3 rounded bg-blue-200">
                    {/* <svg
                      className="w-10 h-10 text-blue-500"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M16 4v12l-4-2-4 2V4M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                      />
                    </svg> */}
                    <img src='/assets/images/settings.svg' className='h-11 w-11'></img>
                  </span>
                  <h4 className="mb-2 text-2xl font-bold font-heading text-white">
                    Incredibly Simple Integration
                  </h4>
                  <p className="text-gray-500 leading-loose">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  </p>
                </div>
                {/* FEATURE CARD 4 */}
                <div className="py-6 pl-6 pr-4 shadow-md rounded-lg bg-gray-800 border-gray-800 border-[1px] hover:border-purple-600 transition-all duration-500">
                  <span className="mb-4 inline-block p-3 rounded bg-purple-200">
                    {/* <svg
                      className="w-10 h-10 text-purple-500"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M6 6V5a3 3 0 013-3h2a3 3 0 013 3v1h2a2 2 0 012 2v3.57A22.952 22.952 0 0110 13a22.95 22.95 0 01-8-1.43V8a2 2 0 012-2h2zm2-1a1 1 0 011-1h2a1 1 0 011 1v1H8V5zm1 5a1 1 0 011-1h.01a1 1 0 110 2H10a1 1 0 01-1-1z"
                        clipRule="evenodd"
                      />
                      <path d="M2 13.692V16a2 2 0 002 2h12a2 2 0 002-2v-2.308A24.974 24.974 0 0110 15c-2.796 0-5.487-.46-8-1.308z" />
                    </svg> */}
                    <img src='/assets/images/blockchain-lines.svg' className='h-11 w-11'></img>
                  </span>
                  <h4 className="mb-2 text-2xl font-bold font-heading text-white">
                    Instant Tx Propagation
                  </h4>
                  <p className="text-gray-500 leading-loose">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="skew skew-bottom mr-for-radius">
        <svg
          className="h-8 md:h-12 lg:h-20 w-full text-gray-900"
          viewBox="0 0 10 10"
          preserveAspectRatio="none"
        >
          <polygon fill="currentColor" points="0 0 10 0 0 10" />
        </svg>
      </div>
      <div className="skew skew-bottom ml-for-radius">
        <svg
          className="h-8 md:h-12 lg:h-20 w-full text-gray-900"
          viewBox="0 0 10 10"
          preserveAspectRatio="none"
        >
          <polygon fill="currentColor" points="0 0 10 0 10 10" />
        </svg>
      </div>
    </section>

    {/* SINGULAR PRODUCT IMAGE */}
    <section className="pb-56 sm:pb-72 bg-gray-50">
      <div className="relative pt-12 md:pt-16 pb-32 md:pb-64 bg-gray-900 border-b-4 border-purple-600">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center mb-12 md:mb-20">
            <h2 className="mb-10 text-3xl lg:text-4xl text-gray-50 font-bold">
              Learn what's possible with Fast Lane 
            </h2>
            <div>
              <a
                className="inline-block mb-3 lg:mb-0 lg:mr-3 w-full lg:w-auto py-2 px-6 leading-loose bg-purple-600 hover:bg-purple-700 text-white font-semibold rounded-l-xl rounded-t-xl transition duration-200"
                href="#"
              >
                Get Started
              </a>
              <a
                className="inline-block w-full lg:w-auto py-2 px-6 leading-loose text-white font-semibold bg-gray-900 border-2 border-gray-700 hover:border-gray-600 rounded-l-xl rounded-t-xl transition duration-200"
                href="#"
              >
                Read Documentation
              </a>
            </div>
          </div>
        </div>
        <div className="absolute inset-x-0 max-w-3xl mx-auto px-4">
          <img
            className="rounded-3xl md:rounded-6xl md:rounded-br-none"
            src="/assets/images/3-set-diagram.png"
            alt=""
          />
          <div className="absolute inset-0 flex items-center justify-center"></div>
        </div>
      </div>
    </section>

    {/* HOW IT WORKS | 3 STEPS */}
    <section>
      {/* <div className="skew skew-top mr-for-radius">
        <svg
          className="h-8 md:h-12 lg:h-20 w-full text-gray-50"
          viewBox="0 0 10 10"
          preserveAspectRatio="none"
        >
          <polygon fill="currentColor" points="0 0 10 10 0 10" />
        </svg>
      </div>
      <div className="skew skew-top ml-for-radius">
        <svg
          className="h-8 md:h-12 lg:h-20 w-full text-gray-50"
          viewBox="0 0 10 10"
          preserveAspectRatio="none"
        >
          <polygon fill="currentColor" points="0 10 10 0 10 10" />
        </svg>
      </div> */}
      <div className="pb-20 bg-gray-50 radius-for-skewed">
        <div className="container mx-auto px-4">
          <div className="mb-20 max-w-md text-center mx-auto">
            <span className="text-purple-600 font-bold">
              Launch the Fast Lane
            </span>
            <h2 className="text-4xl lg:text-5xl font-bold font-heading">
              Incredibly simple implementation
            </h2>
          </div>
          <div className="flex flex-wrap -mx-4">
            {/* step 1 */}
            <div className="mb-16 lg:mb-0 relative w-full md:w-1/2 lg:w-1/3 px-4">
              <svg
                className="absolute top-0 left-0 -mt-10 ml-4 text-yellow-600"
                width={36}
                height={101}
                viewBox="0 0 36 101"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  opacity="0.2"
                  d="M16.736 101V21.224L0.176 25.112V11L24.512 0.199993H35.888V101H16.736Z"
                  fill="currentColor"
                />
              </svg>
              <h3 className="relative text-2xl font-bold">
                Lorem ipsum dolor sit amet consectutar
              </h3>
              <p className="text-gray-500 leading-loose">
                Fusce quam tellus, placerat eu metus ut, viverra aliquet purus.
                Suspendisse potenti. Nulla non nibh feugiat.
              </p>
            </div>
            {/* step 2 */}
            <div className="mb-16 lg:mb-0 relative w-full md:w-1/2 lg:w-1/3 px-4">
              <svg
                className="absolute top-0 left-0 -mt-10 ml-4 text-blue-600"
                width={70}
                height={103}
                viewBox="0 0 70 103"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  opacity="0.2"
                  d="M0.344 103V89.608C6.488 84.52 12.44 79.48 18.2 74.488C24.056 69.496 29.24 64.552 33.752 59.656C38.36 54.76 42.008 50.008 44.696 45.4C47.48 40.696 48.872 36.136 48.872 31.72C48.872 27.592 47.72 23.944 45.416 20.776C43.208 17.608 39.512 16.024 34.328 16.024C29.048 16.024 25.064 17.752 22.376 21.208C19.688 24.664 18.344 28.84 18.344 33.736H0.488C0.68 26.344 2.312 20.2 5.384 15.304C8.456 10.312 12.536 6.616 17.624 4.21599C22.712 1.72 28.424 0.471998 34.76 0.471998C45.032 0.471998 53 3.304 58.664 8.96799C64.424 14.536 67.304 21.784 67.304 30.712C67.304 36.28 66.008 41.704 63.416 46.984C60.92 52.264 57.608 57.352 53.48 62.248C49.352 67.144 44.888 71.752 40.088 76.072C35.288 80.296 30.632 84.232 26.12 87.88H69.752V103H0.344Z"
                  fill="currentColor"
                />
              </svg>
              <h3 className="relative text-2xl font-bold">
                Lorem ipsum dolor sit amet consectutar
              </h3>
              <p className="text-gray-500 leading-loose">
                Fusce quam tellus, placerat eu metus ut, viverra aliquet purus.
                Suspendisse potenti. Nulla non nibh feugiat.
              </p>
            </div>
            {/* step 3 */}
            <div className="relative w-full md:w-1/2 lg:w-1/3 px-4">
              <svg
                className="absolute top-0 left-0 -mt-10 ml-4 text-pink-600"
                width={72}
                height={105}
                viewBox="0 0 72 105"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  opacity="0.2"
                  d="M36.768 104.728C30.144 104.728 24.144 103.576 18.768 101.272C13.392 98.872 9.072 95.224 5.808 90.328C2.544 85.432 0.816 79.288 0.624001 71.896H18.768C18.864 76.792 20.448 80.92 23.52 84.28C26.688 87.544 31.104 89.176 36.768 89.176C42.144 89.176 46.272 87.688 49.152 84.712C52.032 81.736 53.472 77.992 53.472 73.48C53.472 68.2 51.552 64.216 47.712 61.528C43.968 58.744 39.12 57.352 33.168 57.352H25.68V42.232H33.312C38.208 42.232 42.288 41.08 45.552 38.776C48.816 36.472 50.448 33.064 50.448 28.552C50.448 24.808 49.2 21.832 46.704 19.624C44.304 17.32 40.944 16.168 36.624 16.168C31.92 16.168 28.224 17.56 25.536 20.344C22.944 23.128 21.504 26.536 21.216 30.568H3.216C3.6 21.256 6.816 13.912 12.864 8.536C19.008 3.16 26.928 0.471998 36.624 0.471998C43.536 0.471998 49.344 1.72 54.048 4.21599C58.848 6.616 62.448 9.832 64.848 13.864C67.344 17.896 68.592 22.36 68.592 27.256C68.592 32.92 67.008 37.72 63.84 41.656C60.768 45.496 56.928 48.088 52.32 49.432C57.984 50.584 62.592 53.368 66.144 57.784C69.696 62.104 71.472 67.576 71.472 74.2C71.472 79.768 70.128 84.856 67.44 89.464C64.752 94.072 60.816 97.768 55.632 100.552C50.544 103.336 44.256 104.728 36.768 104.728Z"
                  fill="currentColor"
                />
              </svg>
              <h3 className="relative text-2xl font-bold">
                Lorem ipsum dolor sit amet consectutar
              </h3>
              <p className="text-gray-500 leading-loose">
                Fusce quam tellus, placerat eu metus ut, viverra aliquet purus.
                Suspendisse potenti. Nulla non nibh feugiat.
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* <div className="skew skew-bottom mr-for-radius">
        <svg
          className="h-8 md:h-12 lg:h-20 w-full text-gray-50"
          viewBox="0 0 10 10"
          preserveAspectRatio="none"
        >
          <polygon fill="currentColor" points="0 0 10 0 0 10" />
        </svg>
      </div>
      <div className="skew skew-bottom ml-for-radius">
        <svg
          className="h-8 md:h-12 lg:h-20 w-full text-gray-50"
          viewBox="0 0 10 10"
          preserveAspectRatio="none"
        >
          <polygon fill="currentColor" points="0 0 10 0 10 10" />
        </svg>
      </div> */}
    </section>

    {/* LOGO CONTAINERS */}
    {/* <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap -mx-2">
          <div className="mb-4 w-full md:w-1/2 lg:w-1/4 px-2">
            <div className="py-16 bg-gray-50 rounded">
              <a href="#">
                <img
                  className="mx-auto h-8"
                  src="/assets/logos/brands/slack.png"
                  alt=""
                />
              </a>
            </div>
          </div>
          <div className="mb-4 w-full md:w-1/2 lg:w-1/4 px-2">
            <div className="py-16 bg-gray-50 rounded">
              <a href="#">
                <img
                  className="mx-auto h-8"
                  src="/assets/logos/brands/dropbox.png"
                  alt=""
                />
              </a>
            </div>
          </div>
          <div className="mb-4 w-full md:w-1/2 lg:w-1/4 px-2">
            <div className="py-16 bg-gray-50 rounded">
              <a href="#">
                <img
                  className="mx-auto h-8"
                  src="/assets/logos/brands/spotify.png"
                  alt=""
                />
              </a>
            </div>
          </div>
          <div className="w-full md:w-1/2 lg:w-1/4 px-2">
            <div className="py-16 bg-gray-50 rounded">
              <a href="#">
                <img
                  className="mx-auto h-8"
                  src="/assets/logos/brands/stripe.png"
                  alt=""
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section> */}

        {/* Link Buttons */}
      {/* Link buttons blog style */}
      
  <section>
    <div className="py-2 bg-gray-50 radius-for-skewed">
      <div className="container mx-auto px-4">
        <div className="mb-3 text-center">
          <span className="text-purple-600 font-bold">
            Got any questions? Let's talk about it.
          </span>
          <h2 className="text-4xl lg:text-5xl font-bold font-heading">
            Get Involved
          </h2>
        </div>
        <div className="flex flex-wrap justify-center -mx-10">
          <div className="flex flex-wrap w-full lg:w-1/2">
        {/* blog style card 1 */}
            <div className="group w-full px-3 mb-5">
              <a href="#">
                <div className="relative h-56 mx-auto rounded overflow-hidden">
                  <img
                    className="relative h-full w-full rounded object-cover transform transition-all duration-500 group-hover:scale-110"
                    src="https://images.unsplash.com/photo-1559827291-72ee739d0d9a?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=968&q=80"
                    alt=""
                  />
                  <div className="absolute inset-0 bg-gray-900 opacity-75 rounded transition-all group-hover:bg-gray-800" />
                  <div className="absolute inset-0 p-6 flex flex-col items-start">
                    <span className="mb-auto py-1 px-3 text-sm bg-purple-600 rounded-l-xl rounded-t-xl text-white uppercase font-bold transition-all group-hover:bg-purple-800">
                        View Documentation
                      </span>
                      <span className="text-sm text-gray-400 transition-all group-hover:text-purple-400">24 Jan, 2022</span>
                      <p className="text-xl lg:text-2xl text-white font-bold transition-all group-hover:text-purple-600">
                        PFL White Paper
                      </p>
                  </div>
                </div>
              </a>
            </div>
            {/* blog style button 2 */}
            <div className="group w-full lg:w-1/2 px-3 mb-5">
              <a href="#">
                <div className="relative mx-auto rounded h-96 overflow-hidden">
                  <img
                    className="relative h-full w-full rounded object-cover transform transition-all duration-500 group-hover:scale-110"
                    src="https://images.unsplash.com/photo-1413752362258-7af2a667b590?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1055&q=80"
                    alt=""
                  />
                  <div className="absolute inset-0 bg-gray-900 opacity-75 rounded transition-all group-hover:bg-gray-800" />
                  <div className="absolute inset-0 p-6 flex flex-col items-start">
                    <span className="mb-auto py-1 px-3 text-sm bg-purple-600 rounded-l-xl rounded-t-xl text-white uppercase font-bold transition-all group-hover:bg-purple-800">
                        Button 2
                      </span>
                      <span className="text-sm text-gray-400 group-hover:text-purple-400">24 Jan, 2021</span>
                      <p className="text-xl lg:text-2xl text-white font-bold transition-all group-hover:text-purple-600">
                        Button 2 text
                      </p>
                  </div>
                </div>
              </a>
            </div>
            {/* blog style button 3 */}
            <div className="group w-full lg:w-1/2 px-3 mb-5 ">
              <a href="#">
                <div className="relative mx-auto rounded-lg h-96 overflow-hidden">
                  <img
                    className="relative h-full w-full rounded object-cover transform transition-all duration-500 group-hover:scale-110"
                    src="https://images.unsplash.com/photo-1459213599465-03ab6a4d5931?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1055&q=80"
                    alt=""
                  />
                  <div className="absolute inset-0 bg-gray-900 opacity-75 rounded group-hover:bg-gray-800" />
                  <div className="absolute inset-0 p-6 flex flex-col items-start">
                    <span className="mb-auto py-1 px-3 text-sm bg-purple-600 rounded-l-xl rounded-t-xl text-white uppercase font-bold group-hover:bg-purple-800">
                        Button 3
                      </span>
                      <span className="text-sm text-gray-400 group-hover:text-purple-400">24 Jan, 2022</span>
                      <p className="text-xl lg:text-2xl text-white font-bold group-hover:text-purple-600">
                        Button 3 text
                      </p>
                  </div>
                </div>
              </a>
            </div>
          </div>

      {/* Link Buttons simple style */}
    <div className="py-0 bg-gray-50 radius-for-skewed">
      <div className="container mx-auto px-0">
        <div className="flex flex-wrap flex-col">
          <a href='https://twitter.com/' className="mb-6 w-full lg:w-full rounded border-2 border-white hover:border-purple-600">
              <div className="p-5 flex flex-wrap bg-white hover:bg-purple-100 shadow rounded">
                <div>
                  <span className="mb-4 lg:mb-0 mr-6 inline-block p-3 md:p-5 rounded-l-xl rounded-t-xl bg-yellow-100">
                    <img src="/assets/logos/social/Twitter-Logo-Black.svg" className="h-8 w-8 md:w-10 md:h-10 " ></img>
                  </span>
                </div>
                <div className="w-full lg:w-2/3">
                  <h3 className="mb-2 text-2xl font-bold font-heading">
                    Twitter
                  </h3>
                  <p className="text-gray-500">
                    1st text
                  </p>
                </div>
              </div>
            </a>

            <a href='https://github.com/' className="mb-6 w-full lg:w-full rounded border-2 border-white hover:border-purple-600">
              <div className="p-5 flex flex-wrap bg-white hover:bg-purple-100 shadow rounded">
                <div>
                  <span className="mb-4 lg:mb-0 mr-6 inline-block p-3 md:p-5 rounded-l-xl rounded-t-xl bg-pink-100">
                    <img src="/assets/logos/social/Github-Logo-Black.svg" className="h-8 w-8 md:w-10 md:h-10" ></img>
                  </span>
                </div>
                <div className="w-full lg:w-2/3">
                  <h3 className="mb-2 text-2xl font-bold font-heading">
                    Github
                  </h3>
                  <p className="text-gray-500">
                    2nd Text
                  </p>
                </div>
              </div>
            </a>
            
            <a href='https://discord.com/' className="group mb-6 w-full lg:w-full rounded border-2 border-white hover:border-purple-600">
              <div className="p-5 flex flex-wrap bg-white hover:bg-purple-100 shadow rounded">
                <div>
                <span className="mb-4 lg:mb-0 mr-6 inline-block p-3 md:p-5 rounded-l-xl rounded-t-xl bg-blue-100">
                    <img src="/assets/logos/social/Discord-Logo-Black.svg" className="h-8 w-8 md:w-10 md:h-10" ></img>
                  </span>
                </div>
                <div className="w-full lg:w-2/3">
                  <h3 className="mb-2 text-2xl font-bold font-heading">
                    Discord
                  </h3>
                  <p className="text-gray-500">
                    Join our discord
                  </p>
                </div>
              </div>
            </a>

        </div>
      </div>
    </div>
        </div>

      </div>
    </div>
  </section>

    {/* CALL TO ACTION */}
    {/* <section className="py-0 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap items-center justify-center -mx-4">
          <div className="w-full lg:w-1/2 px-4 order-1 lg:order-0">
            <h2 className="mb-4 text-4xl md:text-5xl font-bold font-heading">
              So much more than a Lorem ipsum tool
            </h2>
            <p className="mb-8 text-gray-500 leading-loose">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Pellentesque efficitur nisl sodales egestas lobortis.
            </p>
            <a
              className="inline-block py-2 px-6 bg-purple-600 hover:bg-purple-700 text-white font-bold leading-loose rounded-l-xl rounded-t-xl transition duration-200"
              href="#"
            >
              Integrate With Us
            </a>
          </div>
          <div className="w-full lg:w-1/2 px-4 order-0 lg:order-1 mb-8 lg:mb-0">
                    <Player
                autoplay
                loop
                src="https://assets2.lottiefiles.com/packages/lf20_me1uv4m6.json"
                style={{ height: '450px', width: '450px' }}
              >
              </Player>
          </div>
        </div>
      </div>
    </section> */}
  
    {/* FAQ */}
    {/* <section>
      <div className="skew skew-top mr-for-radius">
        <svg
          className="h-8 md:h-12 lg:h-20 w-full text-purple-600"
          viewBox="0 0 10 10"
          preserveAspectRatio="none"
        >
          <polygon fill="currentColor" points="0 0 10 10 0 10" />
        </svg>
      </div>
      <div className="skew skew-top ml-for-radius">
        <svg
          className="h-8 md:h-12 lg:h-20 w-full text-purple-600"
          viewBox="0 0 10 10"
          preserveAspectRatio="none"
        >
          <polygon fill="currentColor" points="0 10 10 0 10 10" />
        </svg>
      </div>
      <div className="py-20 bg-purple-600 radius-for-skewed">
        <div className="container mx-auto px-4">
          <div className="mb-16 max-w-xl mx-auto text-center">
            <span className="text-purple-400 font-bold font-heading">
              Dolor sit amet consectutar
            </span>
            <h2 className="mb-6 text-white text-5xl font-bold font-heading">
              Frequently Asked Questions
            </h2>
          </div>
          <div className="max-w-3xl mx-auto">
            <ul className="space-y-4 lg:space-y-6">
              <li className="p-6 bg-gray-50 rounded shadow">
                <button className="w-full flex justify-between items-center text-left font-bold font-heading hover:text-gray-600">
                  <span className="text-xl">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit?
                  </span>
                  <svg
                    className="w-4 h-4 text-pink-600"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 10l7-7m0 0l7 7m-7-7v18"
                    />
                  </svg>
                </button>
                <p className="mt-4 text-gray-400 font-normal leading-loose">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Nullam euismod orci sed tristique placerat. Fusce in ligula
                  urna. Fusce eget nunc et libero accumsan rutrum quis nec
                  lectus. Quisque luctus sem nibh, quis ornare neque consectetur
                  varius. Maecenas rhoncus consectetur rutrum.
                </p>
              </li>
              <li className="p-6 bg-gray-50 rounded shadow">
                <button className="w-full flex justify-between items-center text-left font-bold font-heading hover:text-gray-600">
                  <span className="text-xl">
                    Nunc maximus odio sit amet eros faucibus?
                  </span>
                  <svg
                    className="w-4 h-4 text-pink-600"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 14l-7 7m0 0l-7-7m7 7V3"
                    />
                  </svg>
                </button>
                <p className="hidden mt-4 text-gray-400 font-normal leading-loose">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Vivamus quis ultricies est. Duis nec hendrerit magna. Ut vel
                  orci gravida, hendrerit enim non, gravida turpis. Praesent non
                  lectus porttitor, scelerisque nulla nec, ornare neque. Integer
                  massa libero, ornare ut leo nec, scelerisque rutrum elit.
                  Morbi et massa id ipsum lobortis rhoncus. Aenean sit amet
                  porta nulla, quis varius risus. Suspendisse ultrices ut lectus
                  non laoreet. Etiam ornare laoreet tortor quis porttitor.
                  Suspendisse tempus erat non dui volutpat eleifend.
                </p>
              </li>
              <li className="p-6 bg-gray-50 rounded shadow">
                <button className="w-full flex justify-between items-center text-left font-bold font-heading hover:text-gray-600">
                  <span className="text-xl">
                    Nam feugiat ex eget sapien lobortis?
                  </span>
                  <svg
                    className="w-4 h-4 text-pink-600"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 14l-7 7m0 0l-7-7m7 7V3"
                    />
                  </svg>
                </button>
                <p className="hidden mt-4 text-gray-400 font-normal leading-loose">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Vivamus quis ultricies est. Duis nec hendrerit magna. Ut vel
                  orci gravida, hendrerit enim non, gravida turpis. Praesent non
                  lectus porttitor, scelerisque nulla nec, ornare neque. Integer
                  massa libero, ornare ut leo nec, scelerisque rutrum elit.
                  Morbi et massa id ipsum lobortis rhoncus. Aenean sit amet
                  porta nulla, quis varius risus. Suspendisse ultrices ut lectus
                  non laoreet. Etiam ornare laoreet tortor quis porttitor.
                  Suspendisse tempus erat non dui volutpat eleifend.
                </p>
              </li>
              <li className="p-6 bg-gray-50 rounded shadow">
                <button className="w-full flex justify-between items-center text-left font-bold font-heading hover:text-gray-600">
                  <span className="text-xl">
                    In hac habitasse platea dictumst?
                  </span>
                  <svg
                    className="w-4 h-4 text-pink-600"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 14l-7 7m0 0l-7-7m7 7V3"
                    />
                  </svg>
                </button>
                <p className="hidden mt-4 text-gray-400 font-normal leading-loose">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Vivamus quis ultricies est. Duis nec hendrerit magna. Ut vel
                  orci gravida, hendrerit enim non, gravida turpis. Praesent non
                  lectus porttitor, scelerisque nulla nec, ornare neque. Integer
                  massa libero, ornare ut leo nec, scelerisque rutrum elit.
                  Morbi et massa id ipsum lobortis rhoncus. Aenean sit amet
                  porta nulla, quis varius risus. Suspendisse ultrices ut lectus
                  non laoreet. Etiam ornare laoreet tortor quis porttitor.
                  Suspendisse tempus erat non dui volutpat eleifend.
                </p>
              </li>
              <li className="p-6 bg-gray-50 rounded shadow">
                <button className="w-full flex justify-between items-center text-left font-bold font-heading hover:text-gray-600">
                  <span className="text-xl">
                    Nullam congue lacinia nibh quis scelerisque?
                  </span>
                  <svg
                    className="w-4 h-4 text-pink-600"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 14l-7 7m0 0l-7-7m7 7V3"
                    />
                  </svg>
                </button>
                <p className="hidden mt-4 text-gray-400 font-normal leading-loose">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Vivamus quis ultricies est. Duis nec hendrerit magna. Ut vel
                  orci gravida, hendrerit enim non, gravida turpis. Praesent non
                  lectus porttitor, scelerisque nulla nec, ornare neque. Integer
                  massa libero, ornare ut leo nec, scelerisque rutrum elit.
                  Morbi et massa id ipsum lobortis rhoncus. Aenean sit amet
                  porta nulla, quis varius risus. Suspendisse ultrices ut lectus
                  non laoreet. Etiam ornare laoreet tortor quis porttitor.
                  Suspendisse tempus erat non dui volutpat eleifend.
                </p>
              </li>
              <li className="p-6 bg-gray-50 rounded shadow">
                <button className="w-full flex justify-between items-center text-left font-bold font-heading hover:text-gray-600">
                  <span className="text-xl">
                    Nam feugiat ex eget sapien lobortis?
                  </span>
                  <svg
                    className="w-4 h-4 text-pink-600"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 14l-7 7m0 0l-7-7m7 7V3"
                    />
                  </svg>
                </button>
                <p className="hidden mt-4 text-gray-400 font-normal leading-loose">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Vivamus quis ultricies est. Duis nec hendrerit magna. Ut vel
                  orci gravida, hendrerit enim non, gravida turpis. Praesent non
                  lectus porttitor, scelerisque nulla nec, ornare neque. Integer
                  massa libero, ornare ut leo nec, scelerisque rutrum elit.
                  Morbi et massa id ipsum lobortis rhoncus. Aenean sit amet
                  porta nulla, quis varius risus. Suspendisse ultrices ut lectus
                  non laoreet. Etiam ornare laoreet tortor quis porttitor.
                  Suspendisse tempus erat non dui volutpat eleifend.
                </p>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="skew skew-bottom mr-for-radius">
        <svg
          className="h-8 md:h-12 lg:h-20 w-full text-purple-600"
          viewBox="0 0 10 10"
          preserveAspectRatio="none"
        >
          <polygon fill="currentColor" points="0 0 10 0 0 10" />
        </svg>
      </div>
      <div className="skew skew-bottom ml-for-radius">
        <svg
          className="h-8 md:h-12 lg:h-20 w-full text-purple-600"
          viewBox="0 0 10 10"
          preserveAspectRatio="none"
        >
          <polygon fill="currentColor" points="0 0 10 0 10 10" />
        </svg>
      </div>
    </section> */}

    {/* FOOTER */}
    <section>
      <div className="skew skew-top mr-for-radius">
        <svg
          className="h-8 md:h-12 lg:h-20 w-full text-gray-900"
          viewBox="0 0 10 10"
          preserveAspectRatio="none"
        >
          <polygon fill="currentColor" points="0 0 10 10 0 10" />
        </svg>
      </div>
      <div className="skew skew-top ml-for-radius">
        <svg
          className="h-8 md:h-12 lg:h-20 w-full text-gray-900"
          viewBox="0 0 10 10"
          preserveAspectRatio="none"
        >
          <polygon fill="currentColor" points="0 10 10 0 10 10" />
        </svg>
      </div>
      <div className="footer-bg relative py-20 bg-gray-900 radius-for-skewed overflow-hidden" >
      <img
            className="h-128 absolute opacity-10 top-0 mt-[-2rem] ml-[-12rem] md:inline hidden"
            src='/assets/images/lines-horizontal.svg'
            alt="tech-lines"
            width="auto"
          />
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap mb-6 lg:mb-20">
            <div className="mb-6 w-full lg:w-1/5">
              <a
                className="text-white text-3xl font-bold leading-none"
                href="#"
              >
                <img
                  className="h-12"
                  src="/assets/logos/PFL/PFL-purple-white.svg"
                  alt=""
                  width="auto"
                />
              </a>
            </div>
            <div className="mb-5 w-full lg:w-1/5">
              <p className="text-gray-400 leading-loose">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                luctus eget justo.
              </p>
            </div>
            <div className="w-full lg:w-3/5 flex flex-wrap -mx-3 justify-end">
              <div className="mb-6 w-full md:w-1/2 lg:w-1/4 lg:mr-6 px-3">
                <h5 className="mb-4 font-bold text-gray-50">Github</h5>
                <p className="text-gray-400 leading-loose">/35sada9asndka</p>
              </div>
              <div className="mb-6 w-full md:w-1/2 lg:w-1/4 px-3">
                <h5 className="mb-4 font-bold text-gray-50">Contacts</h5>
                <p className="text-gray-400">hello@MEVFastLane.com</p>
              </div>
            </div>
          </div>
          <div className="w-full flex justify-between">
            <p className="text-sm text-gray-400">
              © 2022. All rights reserved.
            </p>
            {/* if we want social media 
            <div class="flex space-x-2 lg:space-x-4">
          <a href="#">
            <img src="assets/logos/social/facebook-purple.svg" alt="">
          </a>
          <a href="#">
            <img src="assets/logos/social/twitter-purple.svg" alt="">
          </a>
          <a href="#">
            <img src="assets/logos/social/instagram-purple.svg" alt="">
          </a>
        </div> */}
          </div>
        </div>
      </div>
      <div className="skew skew-bottom mr-for-radius">
        <svg
          className="h-8 md:h-12 lg:h-20 w-full text-gray-900"
          viewBox="0 0 10 10"
          preserveAspectRatio="none"
        >
          <polygon fill="currentColor" points="0 0 10 0 0 10" />
        </svg>
      </div>
      <div className="skew skew-bottom ml-for-radius">
        <svg
          className="h-8 md:h-12 lg:h-20 w-full text-gray-900"
          viewBox="0 0 10 10"
          preserveAspectRatio="none"
        >
          <polygon fill="currentColor" points="0 0 10 0 10 10" />
        </svg>
      </div>
    </section>
  </div>
</div>
</div>

  )
}
