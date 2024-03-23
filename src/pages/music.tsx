import Head from "next/head";
import { ParallaxBanner } from "react-scroll-parallax";
import MusicSection from "~/components/MusicSection";

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

      {/* Music */}
      <ParallaxBanner
        className="h-96 w-full"
        layers={[
          { image: "/assets/hero-music.jpeg", speed: -20 },
          {
            speed: -3,
            // shouldAlwaysCompleteAnimation: true,
            children: (
              <div className="absolute inset-0 flex items-center justify-center">
                <h1 className="font-header text-6xl uppercase drop-shadow md:text-[100px]">
                  Music
                </h1>
              </div>
            ),
          },
        ]}
      />

      <div className="m-auto max-w-7xl p-8">
        <MusicSection />
      </div>
    </>
  );
}
