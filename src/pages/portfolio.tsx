import Head from "next/head";
import GallerySection from "~/components/GallerySection";
import MusicSection from "~/components/MusicSection";

import "react-responsive-carousel/lib/styles/carousel.min.css";
import Grades from "~/components/Grades";
import LetterOfIntent from "~/components/LetterOfIntent";

export default function Portfolio() {
  return (
    <>
      <Head>
        <title>Parker Holt Portfolio</title>
        <meta
          name="description"
          content="Parker Holt's Digital Audio Portfolio"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="flex h-96 items-center justify-center bg-hero-portfolio bg-bottom md:bg-cover md:bg-fixed">
        <h1 className="text-center font-header text-6xl uppercase drop-shadow md:text-[100px]">
          Parker Holt Portfolio
        </h1>
      </div>

      <LetterOfIntent />

      <Grades />

      {/* Music */}
      <div className="relative h-96 bg-hero-music bg-bottom md:bg-cover md:bg-fixed md:bg-center">
        <div className="flex h-full items-center justify-center">
          <h1 className="font-header text-6xl uppercase drop-shadow md:text-[100px]">
            Music
          </h1>
        </div>
      </div>

      <div className="m-auto max-w-7xl p-8">
        <MusicSection />
      </div>

      {/* Involvement */}
      <div className="my-16 flex h-96 items-center justify-center bg-hero-cheer bg-center md:bg-cover md:bg-fixed">
        <h1 className="font-header text-6xl uppercase drop-shadow md:text-[100px]">
          Involvement
        </h1>
      </div>

      <GallerySection />
    </>
  );
}
