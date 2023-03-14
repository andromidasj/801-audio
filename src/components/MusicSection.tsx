import Image from "next/image";
import { songs } from "~/musicData";

const findAsset = (name: string, type: "image" | "audio") => {
  const path = "/assets/music/";
  const ext = type === "image" ? ".jpg" : ".mp3";
  return path + name.replaceAll(" ", "-").toLowerCase() + ext;
};

export default function MusicSection({ n }: { n?: number }) {
  return (
    <div className="grid w-full gap-8 md:grid-cols-1 lg:mx-0 lg:grid-cols-2">
      {songs.slice(0, n).map((s) => (
        <div
          key={s.title}
          className="m-auto flex w-full flex-col overflow-clip rounded bg-[#F1F3F4] transition-transform sm:h-44 sm:flex-row sm:hover:scale-[101%]"
        >
          <Image
            src={findAsset(s.title, "image")}
            alt={s.title}
            className="w-full sm:h-44 sm:w-44"
            height={360}
            width={360}
            priority
          />

          <div className="flex w-full flex-col justify-between p-4">
            <h3 className="text-lg font-bold">
              {s.title} • {s.artist}
            </h3>
            <h4 className="italic">Involvement: {s.involvement.join(" • ")}</h4>
            <audio
              controls
              src={findAsset(s.title, "audio")}
              className="mt-4 w-full sm:m-0"
            />
          </div>
        </div>
      ))}
    </div>
  );
}
