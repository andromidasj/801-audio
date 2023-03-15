import Head from "next/head";
import Image from "next/image";
import GallerySection from "~/components/GallerySection";
import MusicSection from "~/components/MusicSection";
import PortfolioSection from "~/components/PortfolioSection";
import { gradesData } from "~/gradesData";
import musicBg from "../../public/assets/hero-music.jpeg";

import "react-responsive-carousel/lib/styles/carousel.min.css";

export default function Portfolio() {
  return (
    <>
      <Head>
        <title>Parker Holt Portfolio</title>
        <meta name="description" content="Parker Holt's Portfolio" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div>
        <div className="mb-16 flex h-96 items-center justify-center bg-hero-portfolio bg-bottom md:bg-cover md:bg-fixed">
          <h1 className="font-header text-6xl uppercase drop-shadow md:text-[100px]">
            Portfolio
          </h1>
        </div>

        <PortfolioSection title="Letter of Intent">
          <div className="mt-8 flex flex-col gap-6 text-2xl md:m-8">
            <p>
              Hello! My name is Parker Holt and I am currently pursuing a degree
              in digital audio at Utah Valley University. Over the past three
              years, I have immersed myself in this field and have become
              passionate about all things audio. From recording and mixing to
              mastering and sound design, I am constantly seeking to expand my
              knowledge and improve my skills.
            </p>
            <p>
              As a student at UVU, I have been fortunate to have access to
              top-of-the-line equipment and resources. I am constantly seeking
              out opportunities to collaborate with my peers and learn from
              their experiences and perspectives. In addition to honing my
              technical skills, I am also focused on developing my interpersonal
              skills and building strong relationships with my classmates and
              industry professionals. I believe that these connections will be
              invaluable as I embark on my career in digital audio.
            </p>
            <p>
              Ultimately, my goal is to become a successful mix engineer for
              podcasts or music. I am drawn to the creative and technical
              aspects of this role, and am excited by the prospect of working
              with talented artists and content creators to help bring their
              vision to life. I would like to establish connections here at UVU
              that can assist me in starting new projects, providing
              opportunities to learn, and seek help from fellow program members
              when necessary.
            </p>
            <p>
              In the long term, my goal is to build a consistent and stable
              client base, either by working for an established company or
              establishing my own studio brand. I am aware that my success will
              largely depend on my ability to deliver excellent work, as well as
              the relationships I forge and networks I build over time. To
              achieve this, I am committed to networking and building
              connections early on in my career, which will help me gain
              recognition, develop my skills, and ultimately expand my brand.
            </p>
          </div>
          <Image
            src={"assets/signature.svg"}
            alt="Parker Holt signature"
            className="self-end"
            height={90}
            width={324}
          />
        </PortfolioSection>

        <PortfolioSection title="grades">
          <table className="table-auto text-xl md:m-8">
            <thead>
              <tr className="border-b-2 border-green-400/80 text-left uppercase">
                <th className="p-4">Course</th>
                <th className="p-4">Title</th>
                <th className="p-4">Grade</th>
              </tr>
            </thead>
            <tbody>
              {gradesData.map((e) => (
                <tr
                  key={e.course}
                  className="border-b-2 border-green-300/20 last:border-0"
                >
                  <td className="p-4">{e.course}</td>
                  <td className="p-4">{e.title}</td>
                  <td className="p-4">{e.grade}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </PortfolioSection>

        <PortfolioSection title="Proficiency">
          {/* <h2 className="m-8 text-center text-4xl">
            Grade for Location Sound Proficiency (DGM 2440): 70/80 (88%)
          </h2> */}
          <div className="m-8 flex justify-between text-3xl">
            <span>Location Sound Proficiency</span>
            <span>DGM 2440</span>
            <span>70/80 (88%)</span>
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
