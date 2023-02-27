import Head from "next/head";
import Link from "next/link";

export default function HomePage() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center py-2">
      <Head>
        <title>Ui Design Systems</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex w-full flex-1 flex-col items-center justify-center px-20 text-center">
        <h1 className="text-6xl font-bold">
          Welcome to{" "}
          <a className="text-blue-600" href="https://nextjs.org">
            Ui App
          </a>
        </h1>

        <div className="mt-6 flex max-w-4xl flex-wrap items-center justify-around sm:w-full">
          {sandbox.map(({ title, route }) => (
            <Link key={route} href={route} className="mt-6 w-auto rounded-xl border py-3 px-6 text-left hover:text-blue-600 focus:text-blue-600">
              <h3 className="text-lg font-semibold">{title} &rarr;</h3>
            </Link>
          ))}
        </div>
      </main>
    </div>
  );
}

//#region  //*=========== Sandbox ===========
const sandbox = [
  {
    title: 'Nuxt Header',
    route: '/sandbox/nuxt-header',
  },
  // {
  //   title: 'Colors',
  //   route: '/sandbox/colors',
  // },
  // {
  //   title: 'Form',
  //   route: '/sandbox/form',
  // },
  // {
  //   title: 'Searchable Select Form',
  //   route: '/sandbox/searchable-select-form',
  // }
];
//#endregion  //*======== Sandbox ===========
