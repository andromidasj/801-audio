import Image from "next/image";
import { songs } from "~/musicData";

export default function MusicSection() {
  const MUSIC_FOLDER = "/assets/music/";
  return (
    <>
      <h1 className="mb-10 text-center font-header text-4xl uppercase text-white">
        Music
      </h1>

      <div className="grid grid-cols-2 gap-8">
        {songs.map((s) => (
          <div
            key={s.title}
            className="flex h-40 w-full min-w-[500px] rounded bg-slate-100 transition-transform hover:scale-[101%]"
          >
            <div className="relative h-full w-48">
              <Image
                src={MUSIC_FOLDER + s.title + ".jpg"}
                alt="Sleeper"
                className="rounded-tl rounded-bl object-cover"
                fill
                priority
              />
            </div>
            <div className="flex w-full flex-col justify-between p-4">
              <h3 className="text-lg font-bold">
                {s.title} • {s.artist}
              </h3>
              <h4 className="italic">
                Involvement: {s.involvement.join(" • ")}
              </h4>
              <audio
                controls
                src={MUSIC_FOLDER + s.title + ".mp3"}
                className="w-full rounded-full"
              />
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
