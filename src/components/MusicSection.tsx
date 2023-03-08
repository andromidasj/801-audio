import Image from "next/image";
import piano from "../../public/assets/music/piano-rock.jpg";
import skeleton from "../../public/assets/music/skeleton.jpg";
import sleeper from "../../public/assets/music/sleeper.jpg";

const songs = [
  {
    title: "Sleeper",
    artist: "Josh Andromidas",
    involvement: ["Recording", "Mixing", "Mastering"],
    image: sleeper,
    audio: "/assets/music/sleeper.mp3",
  },
  {
    title: "In the Meantime",
    artist: "Josh Andromidas",
    involvement: ["Recording", "Mixing", "Mastering"],
    image: piano,
    audio: "/assets/music/sleeper.mp3",
  },
  {
    title: "Skeledins",
    artist: "Random Girl",
    involvement: ["Mixing", "Mastering", "Producing"],
    image: skeleton,
    audio: "/assets/music/sleeper.mp3",
  },
];

export default function MusicSection() {
  return (
    <>
      <h1 className="text-4xl font-bold">Music</h1>
      <br />
      <div className="grid grid-cols-2 gap-8">
        {songs.map((s) => (
          <>
            <div className="flex h-40 w-full min-w-[500px] rounded border-2 border-stone-200">
              <div className="relative h-full w-48">
                <Image
                  src={s.image}
                  alt="Sleeper"
                  className="rounded-tl rounded-bl object-cover"
                  fill
                />
              </div>
              <div className="flex w-full flex-col justify-between p-4">
                <div>
                  <h3 className="text-lg font-bold">
                    {s.title} • {s.artist}
                  </h3>
                  <h4 className="italic">
                    Involvement: {s.involvement.join(", ")}
                  </h4>
                </div>
                <audio
                  controls
                  src="/assets/music/sleeper.mp3"
                  className="w-full"
                />
              </div>
            </div>
          </>
        ))}
        {/* {song}
        {song} */}
      </div>
    </>
  );
}
