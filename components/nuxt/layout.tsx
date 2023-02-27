function NuxtLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="antialiased font-sans text-gray-700 dark:text-gray-200 bg-white dark:bg-black [--scroll-mt:10rem] lg:[--scroll-mt:7rem]">
      {children}
    </div>
  );
}

export default NuxtLayout;
