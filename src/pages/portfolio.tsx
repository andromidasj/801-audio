import Image from "next/image";
// import "react-image-gallery/styles/css/image-gallery.css";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { involvementData } from "~/involvementData";

export default function Portfolio() {
  const images = involvementData[0]?.images.map((e) => ({ original: e || "" }));
  console.log(images);

  return (
    <>
      <h1 className="my-16 text-center font-header text-4xl uppercase text-white">
        Involvement
      </h1>

      <div className="m-auto grid max-w-7xl grid-cols-3 gap-8">
        {involvementData.map((set) => (
          <div
            key={set.title}
            className="flex flex-col gap-4 rounded-lg bg-slate-700 p-6 text-white"
          >
            <h3 className="text-center font-logo text-2xl uppercase">
              {set.title}
            </h3>

            <Carousel
              infiniteLoop
              showStatus={false}
              showThumbs={false}
              useKeyboardArrows
              className=""
            >
              {set.images.map((img) => (
                <div key={img} className="h-96 w-48">
                  <Image
                    src={`/assets/involvement_data/${set.title}/${img}`}
                    alt=""
                    fill
                    className="object-contain"
                  />
                </div>
              ))}
            </Carousel>

            <p>{set.description}</p>
          </div>
        ))}
      </div>
    </>
  );
}
