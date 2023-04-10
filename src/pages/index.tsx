import { type NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import { useRef } from "react";

const Home: NextPage = () => {
  const musicRef = useRef<null | HTMLDivElement>(null);
  const DEMO_REEL_URL = "https://www.youtube.com/embed/kp3xrWf9zz8";

  return (
    <>
      <Head>
        <title>801 Audio</title>
        <meta name="description" content="801 Audio by Parker Holt" />
        <link rel="preload" href="/assets/hero-mic.jpeg" as="image" />
      </Head>

      <div className="relative flex h-[800px] flex-col items-center justify-between gap-12 bg-hero-mic bg-cover bg-bottom px-4 py-20 sm:bg-fixed sm:py-40 lg:bg-bottom ">
        <div className="flex flex-col gap-16 md:gap-4">
          <h1 className="font-white text-center font-logo text-7xl leading-none text-white drop-shadow-lg sm:text-[100px] md:text-[140px]">
            801 AUDIO
          </h1>

          <h2 className="text-center font-header text-4xl uppercase text-white drop-shadow-lg sm:text-5xl md:text-6xl">
            Where <span className="text-green-300">quality</span> meets
            <span className="text-green-300"> creativity</span>
          </h2>
        </div>

        <div className="flex w-full justify-evenly font-semibold text-black sm:justify-center sm:gap-8">
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

      <div
        ref={musicRef}
        className="flex flex-col items-center gap-14 bg-slate-900 px-8"
      >
        <h1 className="mt-10 text-center font-header text-5xl uppercase text-white underline decoration-green-300 underline-offset-8 sm:text-6xl">
          Demo Reel
        </h1>

        <iframe
          className="aspect-video w-full sm:max-w-7xl sm:px-10"
          src={DEMO_REEL_URL}
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        />
      </div>
    </>
  );
};

export default Home;
