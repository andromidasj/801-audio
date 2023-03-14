import Image from "next/image";
import { Carousel } from "react-responsive-carousel";
import { involvementData } from "~/involvementData";

export default function GallerySection() {
  return (
    <div className="m-auto grid max-w-7xl grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
      {involvementData.map((set) => (
        <div
          key={set.title}
          className="flex flex-col gap-4 border-b-0 border-green-400 p-6 text-white"
        >
          <h3 className="[100px] text-center font-logo text-2xl uppercase underline decoration-green-400 underline-offset-4">
            {set.title}
          </h3>

          {/* <ReactImageGallery
          items={set.images.map((img) => ({
            original: `/assets/involvement_data/${set.title}/${img}`,
          }))}
          showBullets
          showThumbnails={false}
          showPlayButton={false}
        /> */}

          <Carousel
            infiniteLoop
            showStatus={false}
            showThumbs={false}
            useKeyboardArrows
            dynamicHeight
          >
            {set.images.map((img) => (
              <div key={img} className="h-96 overflow-clip">
                <Image
                  src={`/assets/involvement_data/${set.title}/${img}`}
                  alt=""
                  // width={386}
                  // height={386}
                  blurDataURL="L57vr*Ri0zxv6lV?$%t810nh}sSO"
                  placeholder="blur"
                  fill
                  className="rounded object-contain"
                />
              </div>
            ))}
          </Carousel>

          <p>{set.description}</p>
        </div>
      ))}
    </div>
  );
}
