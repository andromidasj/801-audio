import Head from "next/head";
import Image from "next/image";
import MusicSection from "~/components/MusicSection";
import { involvementData } from "~/involvementData";
import musicBg from "../../public/assets/hero-music.jpg";

// import "react-image-gallery/styles/css/image-gallery.css";
// import "src/styles/galleryOverride.css";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

export default function Portfolio() {
  return (
    <>
      <Head>
        <title>Parker Holt Portfolio</title>
        <meta name="description" content="Parker Holt's Portfolio" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="bg-black">
        {/* Music */}
        <div className="">
          <div className="relative h-96">
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
        </div>

        {/* Involvement */}
        <div className="">
          <div className="my-16 flex h-96 items-center justify-center bg-hero-cheer bg-center md:bg-cover md:bg-fixed">
            <h1 className="font-header text-6xl uppercase text-white drop-shadow md:text-[100px]">
              Involvement
            </h1>
          </div>

          <div className="m-auto grid max-w-7xl grid-cols-1 gap-8 md:grid-cols-3">
            {involvementData.map((set) => (
              <div
                key={set.title}
                className="flex flex-col gap-4 rounded-lg p-6 text-white"
              >
                <h3 className="text-center font-logo text-2xl uppercase">
                  {set.title}
                </h3>

                {/* <ReactImageGallery
                  items={set.images.map((img) => ({
                    original: `/assets/involvement_data/${set.title}/${img}`,
                  }))}
                  showBullets
                  showThumbnails={false}
                  showPlayButton={false}
                /> */}

                <Carousel
                  infiniteLoop
                  showStatus={false}
                  showThumbs={false}
                  useKeyboardArrows
                  dynamicHeight
                  className="opacity-100"
                >
                  {set.images.map((img) => (
                    <div key={img} className="h-96">
                      <Image
                        src={`/assets/involvement_data/${set.title}/${img}`}
                        alt=""
                        width={384}
                        height={384}
                        className="object-contain"
                      />
                    </div>
                  ))}
                </Carousel>

                <p>{set.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
