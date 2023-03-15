import Image from "next/image";
import { useState } from "react";
import { songs } from "~/musicData";
import UVULogo from "../../public/assets/uvu.png";

const findAsset = (name: string, type: "image" | "audio") => {
  const path = "/assets/music/";
  const ext = type === "image" ? ".jpg" : ".mp3";
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
      {songs.slice(0, n).map((s) => (
        <div
          key={s.title}
          className="m-auto flex w-full flex-col overflow-clip rounded bg-[#F1F3F4] text-black transition-transform sm:h-44 sm:flex-row sm:hover:scale-[101%]"
        >
          <Image
            src={findAsset(s.title, "image")}
            alt={`${s.title} by ${s.artist}`}
            className="w-full sm:h-44 sm:w-44"
            height={360}
            width={360}
            priority
          />

          <div className="relative flex w-full flex-col justify-between p-4">
            {s.title === "Six Of One" && (
              <Image
                className="absolute right-0 top-0 z-10"
                src={UVULogo}
                alt="UVU Logo"
                height={60}
              />
            )}
            <h3 className="text-lg font-bold">
              {s.title} • {s.artist}
            </h3>
            <h4 className="italic">Involvement: {s.involvement.join(" • ")}</h4>
            <audio
              controls
              src={findAsset(s.title, "audio")}
              className="mt-4 w-full sm:m-0"
              ref={(audio) => audio && (audio.onplay = () => handlePlay(audio))}
            />
          </div>
        </div>
      ))}
    </div>
  );
}
