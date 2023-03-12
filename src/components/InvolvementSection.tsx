import { involvementData } from "~/involvementData";
import ImageCarousel from "./ImageCarousel";

export default function InvolvementSection() {
  return (
    <>
      <h1 className="my-16 text-center font-header text-4xl uppercase">
        Involvement
      </h1>

      <div className="m-auto grid max-w-7xl grid-cols-3 gap-8">
        {involvementData.map((set, i) => (
          <div key={i} className="rounded bg-white p-8 drop-shadow-lg">
            <ImageCarousel data={set} />
          </div>
        ))}
      </div>
    </>
  );
}
