import Image from "next/image";
import meantime from "../../public/assets/music/in-the-meantime.jpg";
import ruinMe from "../../public/assets/music/ruin-me.jpg";
import skeleton from "../../public/assets/music/skeleton.jpg";
import sleeper from "../../public/assets/music/sleeper.jpg";

const songs = [
  {
    title: "In the Meantime",
    artist: "Josh Andromidas",
    involvement: ["Recording Vocals", "Mixing", "Mastering"],
    image: meantime,
    audio: "/assets/music/in-the-meantime.mp3",
  },
  {
    title: "Sleeper",
    artist: "Josh Andromidas",
    involvement: ["Recording Vocals", "Mixing", "Mastering"],
    image: sleeper,
    audio: "/assets/music/sleeper.mp3",
  },
  {
    title: "Skeleton",
    artist: "Random Girl",
    involvement: ["Mixing", "Mastering", "Producing"],
    image: skeleton,
    audio: "/assets/music/skeleton.mp3",
  },
  {
    title: "Ruin Me",
    artist: "Random Girl",
    involvement: ["Mixing", "Mastering"],
    image: ruinMe,
    audio: "/assets/music/ruin-me.mp3",
  },
];

export default function MusicSection() {
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
                src={s.image}
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
              <audio controls src={s.audio} className="w-full rounded-full" />
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
