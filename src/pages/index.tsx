import { IconArrowDown } from "@tabler/icons-react";
import { type NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import MusicSection from "~/components/MusicSection";
import NavBar from "~/components/NavBar";

const Home: NextPage = () => {
  const musicRef = useRef<null | HTMLDivElement>(null);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    addEventListener("scroll", () => {
      setScrolled(window.scrollY > 0);
    });
  }, []);

  return (
    <>
      <Head>
        <title>Parker Holt</title>
        <meta name="description" content="Parker Holt's Portfolio" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <NavBar scrolled={scrolled} />

      <div className="relative mt-[-64px] flex h-[600px] flex-col items-center justify-evenly bg-[url('/assets/bg.jpg')] bg-left-bottom p-16">
        <h1 className="pb-40 text-center font-header text-6xl uppercase text-white drop-shadow-md">
          Where <span className="text-blue-300">quality</span> meets
          <span className="text-green-400"> creativity</span>
        </h1>

        <div className="flex gap-8 font-semibold">
          <button
            className="flex w-44 items-center justify-center gap-2 rounded-sm bg-yellow-300 p-4 px-6 uppercase drop-shadow hover:bg-yellow-500 active:scale-95"
            onClick={() => musicRef.current?.scrollIntoView()}
          >
            Portfolio <IconArrowDown size={18} />
          </button>
          <Link
            href="/contact"
            className="w-40 rounded-sm bg-white p-4 px-6 text-center uppercase drop-shadow hover:bg-stone-200 active:scale-95"
          >
            Contact
          </Link>
        </div>
      </div>

      <hr className="m-16" />

      <div ref={musicRef} className="m-auto max-w-7xl">
        <MusicSection />
        {/* <hr className="my-12 mx-16" />
          <InvolvementSection /> */}
      </div>
    </>
  );
};

export default Home;
