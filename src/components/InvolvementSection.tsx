import { involvementData } from "~/involvementData";
import ImageCarousel from "./ImageCarousel";

export default function InvolvementSection() {
  return (
    <>
      <h1 className="my-16 text-center font-header text-4xl uppercase">
        Involvement
      </h1>

      <div className="m-auto flex max-w-7xl flex-col gap-8">
        {involvementData.map((set, i) => (
          <div key={i} className="rounded bg-white p-8 drop-shadow-lg">
            <ImageCarousel data={set} />
          </div>
        ))}
      </div>
    </>
  );
}
