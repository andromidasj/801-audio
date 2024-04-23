"use client";

export default function AudioPlayer({
  path,
  external,
}: {
  path: string;
  external?: boolean;
}) {
  return (
    <audio
      controls
      onPlay={async (thisAudio) => {
        const audios = document.getElementsByTagName("audio");
        for (const audio of audios) {
          if (audio !== thisAudio.currentTarget) {
            audio.pause();
          }
        }

        await thisAudio.currentTarget.play();
      }}
    >
      {external ? (
        <source src={path} />
      ) : (
        <>
          <source src={path + ".ogg"} type="audio/ogg" />
          <source src={path + ".mp3"} type="audio/mpeg" />
        </>
      )}
      Your browser does not support the audio element.
    </audio>
  );
}
