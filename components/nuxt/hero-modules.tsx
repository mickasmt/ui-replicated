import React from "react";

function HeroModules() {
  return (
    <div className="relative py-6 overflow-hidden sm:py-12">
      {/**/}
      <div className="nuxt-container relative px-4 sm:px-6 lg:px-8">
        <div className="absolute -right-12 -inset-y-6 sm:inset-y-0 sm:right-6 lg:right-8">
          <div className="flex h-full items-center justify-center">
            <img
              src="/nuxt/images/hero-light.webp"
              className="dark:hidden object-contain h-3/4 lg:mx-10 opacity-0 md:opacity-100"
              alt=""
              width={400}
              height={216}
            />
            <img
              src="/nuxt/images/hero-dark.webp"
              className="hidden dark:block object-contain h-3/4 lg:mx-10 opacity-0 md:opacity-100"
              alt=""
              width={400}
              height={216}
            />
          </div>
        </div>
        <div className="relative flex flex-col justify-center gap-y-4 sm:gap-y-5 sm:h-72">
          
          <h1 className="text-4xl font-semibold sm:text-5xl text-zinc-900 dark:text-zinc-200">
            Modules
          </h1>
          <div className="font-medium sm:text-lg text-zinc-500 sm:max-w-lg">
            Discover our list of modules to supercharge your Nuxt project.
            Created by the Nuxt team and community.
          </div>
        </div>
      </div>
    </div>
  );
}

export default HeroModules;
