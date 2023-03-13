import Image from "next/image";
import { songs } from "~/musicData";

export default function MusicSection({ n }: { n?: number }) {
  const MUSIC_FOLDER = "/assets/music/";

  return (
    <div className="grid w-full gap-8 md:grid-cols-1 lg:mx-0 lg:grid-cols-2">
      {songs.slice(0, n).map((s) => (
        <div
          key={s.title}
          className="m-auto flex w-full flex-col rounded bg-slate-100 transition-transform sm:h-44 sm:flex-row sm:hover:scale-[101%]"
        >
          <Image
            src={MUSIC_FOLDER + s.title + ".jpg"}
            alt={s.title}
            className="w-full rounded-t sm:h-44 sm:w-44 sm:rounded-none sm:rounded-l"
            height={160}
            width={160}
            priority
          />

          <div className="flex w-full flex-col justify-between p-4">
            <h3 className="text-lg font-bold">
              {s.title} • {s.artist}
            </h3>
            <h4 className="italic">Involvement: {s.involvement.join(" • ")}</h4>
            <audio
              controls
              src={MUSIC_FOLDER + s.title + ".mp3"}
              className="mt-4 w-full rounded-full sm:m-0"
            />
          </div>
        </div>
      ))}
    </div>
  );
}
