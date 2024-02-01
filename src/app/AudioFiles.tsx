"use client";
import { IconCircleArrowDown } from "@tabler/icons-react";
import { useEffect, useRef } from "react";

export default function AudioFiles({
  path,
  files,
}: {
  path: string;
  files: string[];
}) {
  const audioRefs = useRef<HTMLAudioElement[]>([]);

  useEffect(() => {
    audioRefs.current = audioRefs.current.slice(0, files.length);
  }, [files]);

  const handlePlay = (index: number) => {
    audioRefs.current.forEach((ref, i) => {
      if (i !== index && ref && !ref.paused) {
        ref.pause();
      }
    });
  };

  return (
    <>
      {files.map((file, index) => (
        <div key={file} className="flex flex-col gap-2">
          <a
            href={`${path}/${file}`}
            download
            className="flex cursor-pointer items-center gap-2 hover:text-green-300"
          >
            {hyphenatedToCapitalized(file.split(".aac")[0])}
            <IconCircleArrowDown />
          </a>
          <audio
            controls
            ref={(el) => el && (audioRefs.current[index] = el)}
            onPlay={() => handlePlay(index)}
          >
            <source src={`${path}/${file}`} type="audio/mp4" />
            Your browser does not support the audio element.
          </audio>
        </div>
      ))}
    </>
  );
}

function hyphenatedToCapitalized(string?: string): string {
  return (
    string
      ?.split("-")
      .map((word: string) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" ")
      .replaceAll("_", "'") || ""
  );
}
