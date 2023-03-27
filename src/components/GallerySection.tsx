import ReactImageGallery from "react-image-gallery";
import { involvementData } from "~/involvementData";

import "react-image-gallery/styles/css/image-gallery.css";

export default function GallerySection() {
  return (
    <div className="m-auto grid max-w-7xl grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
      {involvementData.map((set) => (
        <div
          key={set.title}
          className="flex flex-col gap-3 border-b-0 border-green-400 p-6 text-white"
        >
          <h3 className="[100px] text-center font-logo text-2xl uppercase underline decoration-green-400 underline-offset-4">
            {set.title}
          </h3>

          <ReactImageGallery
            items={set.images.map((img) => ({
              original: `/assets/involvement_data/${set.title}/${img}`,
            }))}
            showBullets
            showThumbnails={false}
            showPlayButton={false}
          />

          <div className="flex flex-col gap-1">
            {set.date && (
              <span className=" italic text-slate-400">
                {set.date.toDateString()}
              </span>
            )}

            <p>{set.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
