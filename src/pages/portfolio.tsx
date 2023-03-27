import Head from "next/head";
import { ParallaxBanner } from "react-scroll-parallax";
import GallerySection from "~/components/GallerySection";
import Grades from "~/components/Grades";
import LetterOfIntent from "~/components/LetterOfIntent";
import MusicSection from "~/components/MusicSection";

import "react-responsive-carousel/lib/styles/carousel.min.css";

export default function Portfolio() {
  return (
    <>
      <Head>
        <title>Parker Holt Portfolio | 801 Audio</title>
        <meta
          name="description"
          content="Parker Holt's Digital Audio Portfolio | 801 Audio"
        />
        <link rel="preload" href="/assets/portfolio-banner.jpeg" as="image" />
      </Head>

      <ParallaxBanner
        layers={[
          {
            image: "/assets/portfolio-banner.jpeg",
            speed: -20,
          },
          {
            speed: -10,
            translateY: [10, 30],
            shouldAlwaysCompleteAnimation: true,
            children: (
              <div className="absolute inset-0 flex items-center justify-center">
                <h1 className="text-center font-header text-6xl uppercase drop-shadow md:text-[100px]">
                  {"Parker Holt's Portfolio"}
                </h1>
              </div>
            ),
          },
        ]}
        className="h-96 w-full"
      />

      <LetterOfIntent />

      <Grades />

      {/* Music */}
      <ParallaxBanner
        layers={[
          { image: "/assets/hero-music.jpeg", speed: -20 },
          {
            speed: -10,
            shouldAlwaysCompleteAnimation: true,
            children: (
              <div className="absolute inset-0 flex items-center justify-center">
                <h1 className="font-header text-6xl uppercase drop-shadow md:text-[100px]">
                  Music
                </h1>
              </div>
            ),
          },
        ]}
        className="h-96 w-full"
      />

      <div className="m-auto max-w-7xl p-8">
        <MusicSection />
      </div>

      {/* Involvement */}
      <div>
        <ParallaxBanner
          className="my-16 h-96 w-full"
          layers={[
            { image: "/assets/hero-cheer.jpeg", speed: -20 },
            {
              speed: -10,
              shouldAlwaysCompleteAnimation: true,
              children: (
                <div className="absolute inset-0 flex items-center justify-center">
                  <h1 className="font-header text-6xl uppercase drop-shadow md:text-[100px]">
                    Involvement
                  </h1>
                </div>
              ),
            },
          ]}
        />
      </div>

      <GallerySection />
    </>
  );
}
