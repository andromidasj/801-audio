import { IconArrowDown } from "@tabler/icons-react";
import { type NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";
import MusicSection from "~/components/MusicSection";
import parker from "../../public/assets/parker/vertical-smile-cropped.jpeg";

const Home: NextPage = () => {
  const musicRef = useRef<null | HTMLDivElement>(null);

  return (
    <>
      <Head>
        <title>Parker Holt</title>
        <meta name="description" content="Parker Holt's Portfolio" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div>
        <div className="flex justify-between">
          <div className="flex w-[50%] flex-col justify-evenly gap-6">
            <h1 className="text-6xl font-bold">{"Hi, I'm Parker! 👋"}</h1>
            <p className="text-xl text-gray-700">
              As a recent graduate from{" "}
              <span className="font-bold text-green-800">
                Utah Valley University
              </span>
              {"'s Digital Audio program, I specialize in "}
              audio production, engineering, and sound design. From music
              production to podcast editing, I bring a passion for creativity
              and attention to detail to all my projects. Take a look around and
              explore my work, and feel free to reach out if you have any
              questions or would like to collaborate on a project!
            </p>
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
          <Image
            src={parker}
            // width={350}
            height={550}
            className="rounded-sm object-cover drop-shadow-xl"
            alt="Parker Holt"
          />
        </div>

        <hr className="m-16" />

        <div ref={musicRef} className="">
          <MusicSection />
          {/* <hr className="my-12 mx-16" />
          <InvolvementSection /> */}
        </div>
      </div>
    </>
  );
};

export default Home;
