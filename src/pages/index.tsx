import { type NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import { useRef } from "react";
import { ParallaxBanner } from "react-scroll-parallax";
import { DEMO_REEL_URL } from "~/consts";

const Home: NextPage = () => {
  const musicRef = useRef<null | HTMLDivElement>(null);

  return (
    <>
      <Head>
        <title>801 Audio</title>
        <meta name="description" content="801 Audio by Parker Holt" />
        <link rel="preload" href="/assets/hero-mic.jpeg" as="image" />
      </Head>

      <ParallaxBanner
        className="h-[600px] w-full sm:h-[800px]"
        layers={[
          { image: "/assets/hero-mic.jpeg", speed: -20 },
          {
            speed: 0,
            children: (
              <div className="absolute bottom-0 h-24 w-full bg-gradient-to-t from-slate-900" />
            ),
          },
          {
            speed: -3,
            children: (
              <div className="relative mt-10 flex h-full flex-col items-center justify-between gap-12 px-4 py-20 pb-52 sm:mt-0 sm:bg-fixed sm:py-40 lg:bg-bottom">
                <div className="flex flex-col gap-16 md:gap-4">
                  <h1 className="font-white text-center font-logo text-6xl leading-none text-white drop-shadow-lg sm:text-[100px] md:text-[140px]">
                    801 AUDIO
                  </h1>

                  <h2 className="text-center font-header text-4xl uppercase text-white drop-shadow-lg sm:text-5xl md:text-6xl">
                    Where{" "}
                    <span className="bg-gradient-to-bl from-green-200 to-green-300 bg-clip-text text-transparent">
                      quality
                    </span>{" "}
                    meets{" "}
                    <span className="bg-gradient-to-br from-green-200 to-green-300 bg-clip-text text-transparent">
                      creativity
                    </span>
                  </h2>
                </div>
                <div className="flex w-full justify-evenly gap-2 font-semibold text-black sm:justify-center sm:gap-8">
                  <Link
                    href="/music"
                    className="flex w-44 items-center justify-center gap-2 rounded-sm bg-green-300 p-4 px-6 uppercase drop-shadow hover:bg-green-400 active:scale-95"
                  >
                    Music
                  </Link>

                  <Link
                    href="/contact"
                    className="w-40 rounded-sm bg-slate-50 p-4 px-6 text-center uppercase drop-shadow hover:bg-slate-200 active:scale-95"
                  >
                    Contact
                  </Link>
                </div>
              </div>
            ),
          },
        ]}
      />

      <div
        ref={musicRef}
        className="m-auto flex max-w-7xl flex-col items-center gap-14 px-4"
      >
        <h1 className="mt-10 text-center font-header text-5xl uppercase text-white underline decoration-green-300 underline-offset-8 sm:text-6xl">
          Demo Reel
        </h1>

        <div className="relative m-auto w-full pb-[56.25%]">
          <iframe
            className="absolute top-0 left-0 h-full w-full border-0"
            src={DEMO_REEL_URL}
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          />
        </div>
      </div>
    </>
  );
};

export default Home;
