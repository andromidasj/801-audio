"use client";

export default function AudioPlayer({ streamUrl }: { streamUrl: string }) {
  return (
    <audio
      controls
      src={streamUrl}
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
      Your browser does not support the audio element.
    </audio>
  );
}
