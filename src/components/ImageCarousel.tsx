import { IconChevronLeft, IconChevronRight } from "@tabler/icons-react";
import Image from "next/image";
import { useState } from "react";

export default function ImageCarousel({
  imageList,
}: {
  imageList: {
    img: string;
    description: string;
  }[];
}) {
  const [selectedImage, setSelectedImage] = useState(0);

  return (
    <>
      {imageList.map((e, i) => {
        const image = "bg-[url('" + e.img + "')]";
        console.log("🚀 ~ imageList.map ~ image:", image);

        return (
          <div
            key={i}
            className={`grid grid-cols-2 justify-between ${
              selectedImage !== i ? "hidden" : ""
            }`}
          >
            <div
              className="relative h-96"
              // style={{ backgroundImage: `url(${e.img})` }}
            >
              <Image src={e.img} height={400} width={400} alt={"alt"} />

              <button
                onClick={() => {
                  setSelectedImage((e) => {
                    if (e <= 0) return imageList.length - 1;
                    return e - 1;
                  });
                }}
              >
                <div className="absolute left-0 flex h-10 w-10 items-center justify-center rounded-full bg-white">
                  <IconChevronLeft />
                </div>
              </button>

              <button
                onClick={() => {
                  setSelectedImage((e) => {
                    if (e >= imageList.length - 1) return 0;
                    return e + 1;
                  });
                }}
              >
                <div className="absolute right-0 flex h-10 w-10 items-center justify-center rounded-full bg-white">
                  <IconChevronRight />
                </div>
              </button>
            </div>

            <p>{e.description}</p>
          </div>
        );
      })}
    </>
  );
}
