import {
  IconChevronLeft,
  IconChevronRight,
  IconPoint,
  IconPointFilled,
} from "@tabler/icons-react";
import Image from "next/image";
import { useState } from "react";
import { type InvolvementData } from "~/involvementData";

export default function ImageCarousel({ data }: { data: InvolvementData }) {
  const [selectedImage, setSelectedImage] = useState(0);

  function prevSlide() {
    setSelectedImage((e) => (e <= 0 ? data.items.length - 1 : e - 1));
  }

  function nextSlide() {
    setSelectedImage((e) => (e >= data.items.length - 1 ? 0 : e + 1));
  }

  const buttonClass =
    "flex h-10 w-10 items-center justify-center rounded-full bg-white drop-shadow-lg active:bg-slate-50 hover:scale-105";

  return (
    <div className="flex flex-col items-center gap-4">
      <h3 className="text-2xl">{data.title}</h3>
      <div className="grid w-full grid-cols-3">
        <div className="col-span-2 flex items-center justify-between gap-2">
          <button onClick={prevSlide}>
            <div className={buttonClass}>
              <IconChevronLeft />
            </div>
          </button>

          <div className="relative h-[600px] w-full">
            <Image
              src={data.items[selectedImage]!.img}
              alt=""
              fill
              className="object-contain drop-shadow-lg"
            />
            {/* {images[selectedImage]} */}
          </div>

          <button onClick={nextSlide}>
            <div className={buttonClass}>
              <IconChevronRight />
            </div>
          </button>
        </div>

        <p className="m-auto p-8 text-2xl">
          {data.items[selectedImage]?.description}
        </p>
      </div>

      <div className="flex">
        {data.items.map((e, i) => (
          <button
            key={i}
            onClick={() => {
              setSelectedImage(i);
            }}
            className="text-6xl text-blue-400"
          >
            {selectedImage === i ? <IconPointFilled /> : <IconPoint />}
          </button>
        ))}
      </div>
    </div>
  );
}
