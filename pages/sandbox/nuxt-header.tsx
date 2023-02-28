import NuxtLayout from "@/components/nuxt/layout";
import NuxtHeader from "@/components/nuxt/header";
import NuxtSubHeader from "@/components/nuxt/sub-header";
import HeroModules from "@/components/nuxt/hero-modules";

export default function NuxtHeaderPage() {
  return (
    <NuxtLayout>
      <div className="flex flex-col min-h-screen w-full">
        
        {/* Header */}
        <NuxtHeader />

        <main className="min-h-[calc(100vh-4rem)] lg:min-h-[calc(100vh-5rem)] flex flex-col">
          <div className="relative flex-1">

            {/* Sub Header */}
            <NuxtSubHeader />
            
            <HeroModules />

            <section className="relative pb-16 sm:pb-32 lg:pt-8 overflow-hidden">


              <div className="nuxt-container">
                <h2 className="font-semibold u-text-zinc-900 text-xl lg:text-3xl my-4">
                  Scroll for play with the header effect
                </h2>

                {Array.from({ length: 10 }, (item, index) => (
                  <p key={index} className="mb-4">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel
                    hic fugiat voluptatum voluptas, quam consectetur facere
                    quisquam provident corrupti aliquid quis enim mollitia magni
                    sapiente nulla cupiditate cum iste aperiam! Lorem ipsum,
                    dolor sit amet consectetur adipisicing elit. Totam quisquam
                    ab nostrum veniam aut odio qui commodi accusantium ea minus
                    modi excepturi, officiis dignissimos fugit possimus
                    similique alias sapiente veritatis.
                  </p>
                ))}
              </div>
            </section>
          </div>
        </main>
      </div>
    </NuxtLayout>
  );
}
