import Link from "next/link";
import { useEffect, useState } from "react";

//sublinks
const sublinks = [
  {
    title: "All",
    route: "/all",
  },
  {
    title: "Official",
    route: "/official",
  },
  {
    title: "Community",
    route: "/community",
  },
  {
    title: "Third Party",
    route: "/third-party",
  },
];

function NuxtSubHeader() {
  const [onTop, setOnTop] = useState(true);

  const handleScroll = () => {
    console.log(window.pageYOffset);
    
    if (onTop !== window.pageYOffset >= 80) {
      setOnTop(window.pageYOffset >= 80);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  });

  return (
    <div
      className={`${
        onTop
          ? "backdrop-blur-md bg-white/75 dark:bg-black/75 shadow shadow-zinc-200 dark:shadow-zinc-900"
          : "border-zinc-200 dark:border-zinc-800"
      } sticky top-0 z-20 hidden border-t border-transparent lg:block`}
    >
      <div className="nuxt-container">
        <nav
          id="sub-nav"
          className="relative grid items-center justify-between h-16 grid-cols-2 gap-3 sm:grid-cols-6"
          aria-label="Docs Sub Navigation"
        >
          <div className="flex items-center justify-start">
            {/* Nuxt logo : display after scroll & first header is hidden */}
            <svg
              width={135}
              height={90}
              viewBox="0 0 135 90"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className={`${
                onTop ? "w-auto mr-3" : "w-0"
              } h-4 transition-all cursor-pointer`}
            >
              <title>Nuxt logo</title>
              <path
                d="M74.2284 87.8731H123.414C124.977 87.8733 126.511 87.4745 127.864 86.7167C129.217 85.959 130.341 84.869 131.121 83.5565C131.902 82.244 132.313 80.7552 132.312 79.2398C132.312 77.7245 131.899 76.2361 131.118 74.9242L98.0856 19.4276C97.3048 18.1154 96.1817 17.0257 94.829 16.2681C93.4764 15.5105 91.942 15.1116 90.38 15.1116C88.8181 15.1116 87.2836 15.5105 85.931 16.2681C84.5784 17.0257 83.4552 18.1154 82.6745 19.4276L74.2284 33.6272L57.7148 5.86031C56.9334 4.54821 55.8097 3.45868 54.4567 2.70119C53.1037 1.9437 51.569 1.54492 50.0068 1.54492C48.4446 1.54492 46.9099 1.9437 45.5569 2.70119C44.2039 3.45868 43.0803 4.54821 42.2989 5.86031L1.1947 74.9242C0.41273 76.2361 0.000680577 77.7245 8.42355e-07 79.2398C-0.000678893 80.7552 0.410035 82.244 1.19083 83.5565C1.97163 84.869 3.09498 85.959 4.44789 86.7167C5.80081 87.4745 7.33558 87.8733 8.89785 87.8731H39.7727C52.0057 87.8731 61.0271 82.661 67.2346 72.4925L82.3054 47.1759L90.3776 33.6272L114.604 74.3244H82.3054L74.2284 87.8731ZM39.2694 74.3105L17.7227 74.3058L50.0212 20.046L66.1369 47.1759L55.3468 65.309C51.2244 71.9067 46.5411 74.3105 39.2694 74.3105Z"
                fill="#00DC82"
              />
            </svg>
            <p
              className={`${
                onTop ? "opacity-100" : "opacity-0"
              } font-semibold u-text-zinc-900`}
              tabIndex={-1}
            >
              SubHeader
            </p>
          </div>

          {/* Sublinks center */}
          <ul className="flex justify-center col-span-4 gap-x-8">
            {sublinks.map(({ title, route }) => (
              <li key={route}>
                <Link
                  href={route}
                  className={
                    route == '/all' ? "nuxt-sublink-active" : "nuxt-sublink"
                  }
                >
                  {title}
                </Link>
              </li>
            ))}
          </ul>

          {/* Empty div for fix nav sublinks in center */}
          <div className="flex justify-end gap-3" />
        </nav>
      </div>
    </div>
  );
}

export default NuxtSubHeader;
