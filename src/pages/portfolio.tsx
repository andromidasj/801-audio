import Head from "next/head";
import Image from "next/image";
import MusicSection from "~/components/MusicSection";
import musicBg from "../../public/assets/hero-music.jpeg";

// import "react-image-gallery/styles/css/image-gallery.css";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import GallerySection from "~/components/GallerySection";

export default function Portfolio() {
  return (
    <>
      <Head>
        <title>Parker Holt Portfolio</title>
        <meta name="description" content="Parker Holt's Portfolio" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="">
        {/* Music */}
        <div className="relative h-96 bg-fixed">
          <Image
            priority
            src={musicBg}
            alt="MUSIC"
            fill
            className="absolute bg-center object-cover"
          />

          <div className="flex h-full items-center justify-center">
            <h1 className="font-header text-[100px] uppercase text-white drop-shadow">
              Music
            </h1>
          </div>
        </div>

        <div className="m-auto max-w-7xl p-8">
          <MusicSection />
        </div>

        {/* Involvement */}
        <div className="">
          <div className="my-16 flex h-96 items-center justify-center bg-hero-cheer bg-center md:bg-cover md:bg-fixed">
            <h1 className="font-header text-6xl uppercase text-white drop-shadow md:text-[100px]">
              Involvement
            </h1>
          </div>

          <GallerySection />
        </div>
      </div>
    </>
  );
}
