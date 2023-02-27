function NuxtLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="antialiased font-sans text-gray-700 bg-white [--scroll-mt:10rem] lg:[--scroll-mt:7rem] w-full">
      {children}
    </div>
  );
}

export default NuxtLayout;
