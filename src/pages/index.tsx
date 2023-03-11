import { IconArrowDown } from "@tabler/icons-react";
import { type NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import { useRef } from "react";
import InvolvementSection from "~/components/InvolvementSection";
import MusicSection from "~/components/MusicSection";

const Home: NextPage = () => {
  const musicRef = useRef<null | HTMLDivElement>(null);

  return (
    <>
      <Head>
        <title>Parker Holt</title>
        <meta name="description" content="Parker Holt's Portfolio" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="relative mt-[-64px] flex h-[800px] flex-col items-center justify-between gap-12 bg-hero1 bg-contain bg-fixed bg-top p-40">
        <h1 className="font-white font-header text-[140px] text-white">
          801 AUDIO
        </h1>

        <h2 className="text-center font-header text-6xl uppercase text-white drop-shadow-sm">
          Where <span className="text-green-300">quality</span> meets
          <span className="text-green-300"> creativity</span>
        </h2>

        <div className="flex gap-8 font-semibold">
          <button
            className="flex w-44 items-center justify-center gap-2 rounded-sm bg-green-300 p-4 px-6 uppercase text-black drop-shadow hover:bg-green-400 active:scale-95"
            onClick={() => musicRef.current?.scrollIntoView()}
          >
            Portfolio <IconArrowDown size={18} />
          </button>
          <Link
            href="/contact"
            className="w-40 rounded-sm bg-stone-50 p-4 px-6 text-center uppercase drop-shadow hover:bg-stone-200 active:scale-95"
          >
            Contact
          </Link>
        </div>
      </div>

      <div ref={musicRef} className="m-auto scroll-m-16 bg-slate-100 p-16">
        <MusicSection />
        <hr className="m-16" />
        <InvolvementSection />
      </div>
    </>
  );
};

export default Home;
