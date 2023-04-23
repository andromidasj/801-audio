import Image from "next/image";
import { useState } from "react";
import { songs } from "~/musicData";

const findAsset = (name: string, ext: ".jpg" | ".mp3" | ".ogg") => {
  const path = "/assets/music/";
  return path + name.replaceAll(" ", "-").toLowerCase() + ext;
};

export default function MusicSection({ n }: { n?: number }) {
  const [currentAudio, setCurrentAudio] = useState<HTMLAudioElement | null>(
    null
  );

  const handlePlay = (audio: HTMLAudioElement) => {
    if (currentAudio && currentAudio !== audio) {
      currentAudio.pause();
    }
    setCurrentAudio(audio);
  };

  return (
    <div className="grid w-full gap-8 md:grid-cols-1 lg:mx-0 lg:grid-cols-2">
      {songs.slice(n).map((s) => (
        <div
          key={s.title}
          className="flex w-full flex-col overflow-clip rounded-sm text-slate-900 transition-transform sm:h-40 sm:flex-row sm:hover:scale-[101%]"
        >
          <Image
            src={findAsset(s.title, ".jpg")}
            alt={`${s.title} by ${s.artist}`}
            className="w-full sm:h-40 sm:w-40"
            height={180}
            width={180}
            priority
          />

          <div className="relative flex w-full flex-col justify-between bg-[#F1F3F4] p-4">
            <div className="flex flex-col gap-2">
              <h3 className="text-lg font-bold">
                {s.title} • {s.artist}
              </h3>
              <div className="ml-4 flex gap-2 text-slate-700">
                {s.involvement.join(" • ")}
              </div>
            </div>
            <audio
              controls
              className="mt-4 w-full sm:m-0"
              ref={(audio) => audio && (audio.onplay = () => handlePlay(audio))}
            >
              <source src={findAsset(s.title, ".ogg")} type="audio/ogg" />
              <source src={findAsset(s.title, ".mp3")} type="audio/mpeg" />
              Your browser does not support the audio element.
            </audio>
          </div>
        </div>
      ))}
    </div>
  );
}
