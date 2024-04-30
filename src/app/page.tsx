import Link from "next/link";
import { DEMO_REEL_URL } from "~/consts";

export const metadata = {
  title: "801 Audio",
  description: "Where quality meets creativity",
};

export default function Page() {
  return (
    <>
      {/* <Head>
        <title>801 Audio</title>
        <meta name="description" content="801 Audio by Parker Holt" />
        <link rel="preload" href="/assets/hero-mic.jpeg" as="image" />
      </Head> */}

      <div className="flex flex-col items-center justify-between gap-60 bg-hero-mic bg-cover bg-fixed bg-center px-4 pb-36 pt-20">
        <div className="mt-16 flex flex-col gap-8">
          <h1 className="font-white text-center font-logo text-6xl leading-none text-white drop-shadow-xl sm:text-[100px] md:text-[140px]">
            801 AUDIO
          </h1>

          <h2 className="text-center font-header text-4xl uppercase text-white drop-shadow-lg sm:text-5xl md:text-6xl">
            Where{" "}
            <span className="bg-green-500 bg-gradient-to-bl from-green-200 to-green-300 bg-clip-text text-transparent">
              quality
            </span>{" "}
            meets{" "}
            <span className="bg-green-500 bg-gradient-to-br from-green-200 to-green-300 bg-clip-text text-transparent">
              creativity
            </span>
          </h2>
        </div>

        <div className="flex w-full justify-evenly gap-2 font-semibold text-black sm:justify-center sm:gap-8">
          <Link
            href="/music"
            className="flex w-44 items-center justify-center gap-2 rounded-sm bg-green-300 p-4 px-6 uppercase drop-shadow hover:bg-green-400"
          >
            Music
          </Link>

          <Link
            href="/contact"
            className="w-40 rounded-sm bg-slate-50 px-6 py-4 text-center uppercase drop-shadow hover:bg-slate-200"
          >
            Contact
          </Link>
        </div>
      </div>

      <div className="m-auto flex max-w-7xl flex-col items-center gap-14 p-4">
        <h1 className="mt-10 text-center font-header text-5xl uppercase text-white underline decoration-green-300 underline-offset-8 sm:text-6xl">
          Demo Reel
        </h1>

        <div className="relative m-auto w-full overflow-clip rounded-md border-2 border-green-300 pb-[56.25%]">
          <iframe
            className="absolute left-0 top-0 size-full border-0"
            src={DEMO_REEL_URL}
            title="801 Audio Demo Reel"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          />
        </div>
      </div>
    </>
  );
}
