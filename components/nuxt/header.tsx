import Link from "next/link";
import { useEffect, useState } from "react";
import ThemeToggle from "../theme-toggle";

//links
const navlinks = [
  {
    title: "Docs",
    route: "/docs",
  },
  {
    title: "Modules",
    route: "/modules",
  },
  {
    title: "Showcase",
    route: "/showcase",
  },
  {
    title: "Support",
    route: "/support",
  },
  {
    title: "Blog",
    route: "/blog",
  },
];

function NuxtHeader() {
  const [onTop, setOnTop] = useState(true);

  const handleScroll = () => {
    if (onTop !== (window.pageYOffset === 0)) {
      setOnTop(window.pageYOffset === 0);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  });

  return (
    <header
      className={`${
        onTop
          ? ""
          : "sbackdrop-blur-md bg-white/75 dark:bg-black/75 lg:!bg-transparent"
      } sticky top-0 z-30 lg:relative transition-all duration-[0.4s] ease`}
    >
      <div className="nuxt-container">
        <nav
          id="main-nav"
          className="grid items-center h-16 grid-cols-6 gap-3 lg:h-20 lg:justify-center"
          aria-label="Primary Navigation"
        >
          {/* Hamburger Mobile Icon */}
          <div className="lg:hidden">
            <button type="button">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
                aria-hidden="true"
                role="img"
                className="icon flex-shrink-0 w-6 h-6"
                focusable="false"
                style={{}}
                width="1em"
                height="1em"
                viewBox="0 0 24 24"
                data-v-76435d2f=""
              >
                <path
                  fill="currentColor"
                  d="M3 8h18a1 1 0 0 0 0-2H3a1 1 0 0 0 0 2Zm18 8H3a1 1 0 0 0 0 2h18a1 1 0 0 0 0-2Zm0-5H3a1 1 0 0 0 0 2h18a1 1 0 0 0 0-2Z"
                />
              </svg>
              <span className="sr-only">Menu</span>
            </button>
          </div>

          <div className="flex justify-center col-span-4 lg:col-span-1 lg:justify-start">
            <Link href="/" className="block u-text-black" title="Homepage">
              <span className="sr-only">Go to homepage</span>

              {/* Nuxt web icon */}
              <svg
                width={368}
                height={90}
                viewBox="0 0 368 90"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="hidden w-auto h-6 sm:block"
              >
                <title>Nuxt logo</title>
                <path
                  d="M74.2284 88.3575H123.414C124.977 88.3577 126.511 87.9588 127.864 87.2011C129.217 86.4433 130.341 85.3534 131.121 84.0409C131.902 82.7284 132.313 81.2396 132.312 79.7242C132.312 78.2089 131.899 76.7204 131.118 75.4086L98.0856 19.912C97.3048 18.5998 96.1817 17.5101 94.829 16.7525C93.4764 15.9948 91.942 15.596 90.38 15.596C88.8181 15.596 87.2836 15.9948 85.931 16.7525C84.5784 17.5101 83.4552 18.5998 82.6745 19.912L74.2284 34.1116L57.7148 6.34469C56.9334 5.03259 55.8097 3.94306 54.4567 3.18557C53.1037 2.42808 51.569 2.0293 50.0068 2.0293C48.4446 2.0293 46.9099 2.42808 45.5569 3.18557C44.2039 3.94306 43.0803 5.03259 42.2989 6.34469L1.1947 75.4086C0.41273 76.7204 0.000680577 78.2089 8.42355e-07 79.7242C-0.000678893 81.2396 0.410035 82.7284 1.19083 84.0409C1.97163 85.3534 3.09498 86.4433 4.44789 87.2011C5.80081 87.9588 7.33558 88.3577 8.89785 88.3575H39.7727C52.0057 88.3575 61.0271 83.1454 67.2346 72.9769L82.3054 47.6603L90.3776 34.1116L114.604 74.8088H82.3054L74.2284 88.3575ZM39.2694 74.7948L17.7227 74.7902L50.0212 20.5304L66.1369 47.6603L55.3468 65.7934C51.2244 72.391 46.5411 74.7948 39.2694 74.7948Z"
                  fill="#00DC82"
                />
                <path
                  d="M167.442 87.5462V55.2341C167.442 45.9876 166.479 36.741 166.479 36.741C166.479 36.741 170.137 45.1747 174.759 53.1003L194.495 87.5462H209.996V16.4189H195.458V48.731C195.458 57.9776 196.421 67.3257 196.421 67.3257C196.421 67.3257 192.762 58.7905 188.237 50.8649L168.404 16.4189H153V87.5462H167.442Z"
                  fill="currentColor"
                />
                <path
                  d="M255.798 36.3346V64.379C255.798 70.8821 251.658 75.7594 245.785 75.7594C240.297 75.7594 236.446 71.2886 236.446 65.0903V36.3346H223.063V68.2402C223.063 79.9254 230.188 88.3591 241.067 88.3591C247.71 88.3591 253.102 85.3108 255.798 80.4335V87.5462H269.276V36.3346H255.798Z"
                  fill="currentColor"
                />
                <path
                  d="M308.473 60.9243L324.744 36.3346H310.014L301.156 49.8488L292.299 36.3346H277.665L293.935 60.8227L276.413 87.5462H290.758L301.253 71.7966L311.65 87.5462H325.899L308.473 60.9243Z"
                  fill="currentColor"
                />
                <path
                  d="M339.79 36.3346H330.451V48.1214H339.79V68.9515C339.79 80.8399 347.01 87.5462 358.179 87.5462H366.17V75.6578H360.008C355.675 75.6578 353.172 73.3208 353.172 68.3419V48.1214H366.17V36.3346H353.172V21.1946H339.79V36.3346Z"
                  fill="currentColor"
                />
              </svg>

              {/* Nuxt mobile icon */}
              <svg
                width={135}
                height={90}
                viewBox="0 0 135 90"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="block w-auto h-6 sm:hidden"
              >
                <title>Nuxt logo</title>
                <path
                  d="M74.2284 87.8731H123.414C124.977 87.8733 126.511 87.4745 127.864 86.7167C129.217 85.959 130.341 84.869 131.121 83.5565C131.902 82.244 132.313 80.7552 132.312 79.2398C132.312 77.7245 131.899 76.2361 131.118 74.9242L98.0856 19.4276C97.3048 18.1154 96.1817 17.0257 94.829 16.2681C93.4764 15.5105 91.942 15.1116 90.38 15.1116C88.8181 15.1116 87.2836 15.5105 85.931 16.2681C84.5784 17.0257 83.4552 18.1154 82.6745 19.4276L74.2284 33.6272L57.7148 5.86031C56.9334 4.54821 55.8097 3.45868 54.4567 2.70119C53.1037 1.9437 51.569 1.54492 50.0068 1.54492C48.4446 1.54492 46.9099 1.9437 45.5569 2.70119C44.2039 3.45868 43.0803 4.54821 42.2989 5.86031L1.1947 74.9242C0.41273 76.2361 0.000680577 77.7245 8.42355e-07 79.2398C-0.000678893 80.7552 0.410035 82.244 1.19083 83.5565C1.97163 84.869 3.09498 85.959 4.44789 86.7167C5.80081 87.4745 7.33558 87.8733 8.89785 87.8731H39.7727C52.0057 87.8731 61.0271 82.661 67.2346 72.4925L82.3054 47.1759L90.3776 33.6272L114.604 74.3244H82.3054L74.2284 87.8731ZM39.2694 74.3105L17.7227 74.3058L50.0212 20.046L66.1369 47.1759L55.3468 65.309C51.2244 71.9067 46.5411 74.3105 39.2694 74.3105Z"
                  fill="#00DC82"
                />
              </svg>
            </Link>
          </div>

          {/* Center nav links */}
          <ul className="justify-center hidden lg:col-span-4 lg:gap-x-14 xl:gap-x-16 lg:flex">
            {navlinks.map(({ title, route }) => (
              <li key={route}>
                <Link
                  href={route}
                  className={
                    route == '/modules' ? "nuxt-link-active" : "nuxt-link"
                  }
                >
                  {title}
                </Link>
              </li>
            ))}
          </ul>

          {/* Right social links */}
          <div className="flex justify-end">
            <ul className="flex items-center justify-end gap-3">
              {/* theme toogle */}
              <li className="hidden md:flex mr-3">
                <ThemeToggle />
              </li>
              {/* twitter */}
              <li>
                <a
                  href="https://twitter.com/nuxt_js"
                  rel="noopener noreferrer"
                  target="_blank"
                  className="font-medium focus:outline-none disabled:cursor-not-allowed disabled:opacity-75 focus:ring-offset-white dark:focus:ring-offset-black text-sm px-4 py-2 border border-transparent u-text-gray-500 hover:u-text-gray-700 focus:u-text-gray-700 disabled:hover:u-text-gray-500 inline-flex items-center rounded-lg !p-0 u-text-gray-900 focus-visible:ring-2"
                  title="Follow Nuxt on Twitter"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    xmlnsXlink="http://www.w3.org/1999/xlink"
                    aria-hidden="true"
                    role="img"
                    className="icon flex-shrink-0 h-5 w-5 -ml-1 mr-2"
                    style={{}}
                    width="1em"
                    height="1em"
                    viewBox="0 0 24 24"
                    data-v-76435d2f=""
                  >
                    <path
                      fill="currentColor"
                      d="M22 5.8a8.49 8.49 0 0 1-2.36.64a4.13 4.13 0 0 0 1.81-2.27a8.21 8.21 0 0 1-2.61 1a4.1 4.1 0 0 0-7 3.74a11.64 11.64 0 0 1-8.45-4.29a4.16 4.16 0 0 0-.55 2.07a4.09 4.09 0 0 0 1.82 3.41a4.05 4.05 0 0 1-1.86-.51v.05a4.1 4.1 0 0 0 3.3 4a3.93 3.93 0 0 1-1.1.17a4.9 4.9 0 0 1-.77-.07a4.11 4.11 0 0 0 3.83 2.84A8.22 8.22 0 0 1 3 18.34a7.93 7.93 0 0 1-1-.06a11.57 11.57 0 0 0 6.29 1.85A11.59 11.59 0 0 0 20 8.45v-.53a8.43 8.43 0 0 0 2-2.12Z"
                    />
                  </svg>
                  {/*[*/}
                  <span className="sr-only">Follow Nuxt on Twitter</span>
                  {/*]*/}
                  {/**/}
                </a>
              </li>
              {/* discord */}
              <li>
                <a
                  href="https://discord.com/invite/ps2h6QT"
                  rel="noopener noreferrer"
                  target="_blank"
                  className="font-medium focus:outline-none disabled:cursor-not-allowed disabled:opacity-75 focus:ring-offset-white dark:focus:ring-offset-black text-sm px-4 py-2 border border-transparent u-text-gray-500 hover:u-text-gray-700 focus:u-text-gray-700 disabled:hover:u-text-gray-500 inline-flex items-center rounded-lg !p-0 u-text-gray-900 focus-visible:ring-2"
                  title="Join Nuxt community on Discord"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    xmlnsXlink="http://www.w3.org/1999/xlink"
                    aria-hidden="true"
                    role="img"
                    className="icon flex-shrink-0 h-5 w-5 -ml-1 mr-2"
                    style={{}}
                    width="1em"
                    height="1em"
                    viewBox="0 0 640 512"
                    data-v-76435d2f=""
                  >
                    <path
                      fill="currentColor"
                      d="M524.531 69.836a1.5 1.5 0 0 0-.764-.7A485.065 485.065 0 0 0 404.081 32.03a1.816 1.816 0 0 0-1.923.91a337.461 337.461 0 0 0-14.9 30.6a447.848 447.848 0 0 0-134.426 0a309.541 309.541 0 0 0-15.135-30.6a1.89 1.89 0 0 0-1.924-.91a483.689 483.689 0 0 0-119.688 37.107a1.712 1.712 0 0 0-.788.676C39.068 183.651 18.186 294.69 28.43 404.354a2.016 2.016 0 0 0 .765 1.375a487.666 487.666 0 0 0 146.825 74.189a1.9 1.9 0 0 0 2.063-.676A348.2 348.2 0 0 0 208.12 430.4a1.86 1.86 0 0 0-1.019-2.588a321.173 321.173 0 0 1-45.868-21.853a1.885 1.885 0 0 1-.185-3.126a251.047 251.047 0 0 0 9.109-7.137a1.819 1.819 0 0 1 1.9-.256c96.229 43.917 200.41 43.917 295.5 0a1.812 1.812 0 0 1 1.924.233a234.533 234.533 0 0 0 9.132 7.16a1.884 1.884 0 0 1-.162 3.126a301.407 301.407 0 0 1-45.89 21.83a1.875 1.875 0 0 0-1 2.611a391.055 391.055 0 0 0 30.014 48.815a1.864 1.864 0 0 0 2.063.7A486.048 486.048 0 0 0 610.7 405.729a1.882 1.882 0 0 0 .765-1.352c12.264-126.783-20.532-236.912-86.934-334.541ZM222.491 337.58c-28.972 0-52.844-26.587-52.844-59.239s23.409-59.241 52.844-59.241c29.665 0 53.306 26.82 52.843 59.239c0 32.654-23.41 59.241-52.843 59.241Zm195.38 0c-28.971 0-52.843-26.587-52.843-59.239s23.409-59.241 52.843-59.241c29.667 0 53.307 26.82 52.844 59.239c0 32.654-23.177 59.241-52.844 59.241Z"
                    />
                  </svg>
                  {/*[*/}
                  <span className="sr-only">
                    Join Nuxt community on Discord
                  </span>
                  {/*]*/}
                  {/**/}
                </a>
              </li>
              {/* github */}
              <li>
                <a
                  href="https://github.com/nuxt/nuxt"
                  rel="noopener noreferrer"
                  target="_blank"
                  className="font-medium focus:outline-none disabled:cursor-not-allowed disabled:opacity-75 focus:ring-offset-white dark:focus:ring-offset-black text-sm px-4 py-2 border border-transparent u-text-gray-500 hover:u-text-gray-700 focus:u-text-gray-700 disabled:hover:u-text-gray-500 inline-flex items-center rounded-lg !p-0 u-text-gray-900 focus-visible:ring-2"
                  title="Go to Nuxt Github repo"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    xmlnsXlink="http://www.w3.org/1999/xlink"
                    aria-hidden="true"
                    role="img"
                    className="icon flex-shrink-0 h-5 w-5 -ml-1 mr-2"
                    style={{}}
                    width="1em"
                    height="1em"
                    viewBox="0 0 24 24"
                    data-v-76435d2f=""
                  >
                    <path
                      fill="currentColor"
                      d="M12 2.247a10 10 0 0 0-3.162 19.487c.5.088.687-.212.687-.475c0-.237-.012-1.025-.012-1.862c-2.513.462-3.163-.613-3.363-1.175a3.636 3.636 0 0 0-1.025-1.413c-.35-.187-.85-.65-.013-.662a2.001 2.001 0 0 1 1.538 1.025a2.137 2.137 0 0 0 2.912.825a2.104 2.104 0 0 1 .638-1.338c-2.225-.25-4.55-1.112-4.55-4.937a3.892 3.892 0 0 1 1.025-2.688a3.594 3.594 0 0 1 .1-2.65s.837-.262 2.75 1.025a9.427 9.427 0 0 1 5 0c1.912-1.3 2.75-1.025 2.75-1.025a3.593 3.593 0 0 1 .1 2.65a3.869 3.869 0 0 1 1.025 2.688c0 3.837-2.338 4.687-4.563 4.937a2.368 2.368 0 0 1 .675 1.85c0 1.338-.012 2.413-.012 2.75c0 .263.187.575.687.475A10.005 10.005 0 0 0 12 2.247Z"
                    />
                  </svg>
                  {/*[*/}
                  <span className="sr-only">Go to Nuxt Github repo</span>
                  {/*]*/}
                  {/**/}
                </a>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </header>
  );
}

export default NuxtHeader;
