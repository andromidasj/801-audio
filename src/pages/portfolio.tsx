import Head from "next/head";
import Image from "next/image";
import GallerySection from "~/components/GallerySection";
import MusicSection from "~/components/MusicSection";
import PortfolioSection from "~/components/PortfolioSection";
import musicBg from "../../public/assets/hero-music.jpeg";

import "react-responsive-carousel/lib/styles/carousel.min.css";
import { gradesData } from "~/gradesData";

export default function Portfolio() {
  return (
    <>
      <Head>
        <title>Parker Holt Portfolio</title>
        <meta name="description" content="Parker Holt's Portfolio" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div>
        <div className="flex h-96 items-center justify-center bg-hero-cheer bg-center md:bg-cover md:bg-fixed">
          <h1 className="font-header text-6xl uppercase drop-shadow md:text-[100px]">
            Portfolio
          </h1>
        </div>

        <PortfolioSection title="Letter of Intent">
          <p className="text-2xl">
            My name is Parker Holt and I have been pursuing a degree in digital
            audio for the past three years. During my time here at UVU, I hope
            to learn as much as I can across a variety of topics in the digital
            audio field, as well as make strong connections with my classmates
            here that can benefit me in the future. I would love to start
            working as a mix engineer for podcasts or music, and then overtime
            be able to have a consistent client base whether through a company
            or under my own personal brand.
          </p>
        </PortfolioSection>

        <PortfolioSection title="grades">
          <div className="mx-[-3rem] overflow-scroll">
            <table className="ml-12 w-full table-auto text-lg">
              <thead>
                <tr className="border-b-2 text-left uppercase">
                  <th className="p-4">Course</th>
                  <th className="p-4">Title</th>
                  <th className="p-4">Grade</th>
                  <th className="p-4">Credits</th>
                  <th className="p-4">Term</th>
                </tr>
              </thead>
              <tbody>
                {gradesData.map((e) => (
                  <tr key={e.course}>
                    <td className="p-4">{e.course}</td>
                    <td className="p-4">{e.title}</td>
                    <td className="p-4">{e.grade}</td>
                    <td className="p-4">{e.credits}</td>
                    <td className="p-4">{e.term}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </PortfolioSection>

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
            <h1 className="font-header text-[100px] uppercase drop-shadow">
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
            <h1 className="font-header text-6xl uppercase drop-shadow md:text-[100px]">
              Involvement
            </h1>
          </div>

          <GallerySection />
        </div>
      </div>
    </>
  );
}
