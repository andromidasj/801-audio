import ImageCarousel from "./ImageCarousel";

export default function InvolvementSection() {
  const arr = [
    {
      img: "/assets/parker/contact.png",
      description:
        "Dolor quis reprehenderit cupidatat est consequat. Id aute amet voluptate deserunt. Ad reprehenderit aute excepteur ea qui veniam sit consectetur ut non occaecat. Dolor Lorem nostrud occaecat velit minim do deserunt incididunt Lorem esse nisi est. Minim irure dolor et enim incididunt. Laborum nulla cupidatat eiusmod pariatur nisi nostrud dolor in veniam aliqua consequat consequat et.",
    },
    {
      img: "/assets/parker/french-horn.png",
      description:
        "Non dolor nulla Lorem laborum et sint velit consequat anim cillum excepteur officia eiusmod aliqua. Officia ea sint do nostrud eu minim proident tempor. Officia voluptate do velit consequat occaecat occaecat. Officia anim aliquip cillum quis veniam amet adipisicing non irure tempor occaecat occaecat incididunt commodo. Pariatur sit nisi culpa dolore ex proident ea excepteur commodo Lorem nulla adipisicing dolor consectetur fugiat.",
    },
    {
      img: "/assets/parker/lumberjack.png",
      description:
        "Voluptate veniam quis consequat sint esse quis ad esse laboris occaecat commodo. Commodo minim ut consequat id esse esse et fugiat minim id sint est labore. Veniam quis minim aliqua non sit et anim officia sunt dolore ipsum. Cillum mollit sunt elit sint nostrud magna incididunt qui ullamco pariatur aliquip aliquip nisi duis dolor. Est velit exercitation aliquip culpa est deserunt veniam sint nisi. Ea voluptate quis et. Sint velit nostrud cillum proident Lorem qui cupidatat aliquip cillum deserunt nisi anim minim aliquip.",
    },
  ];

  return (
    <>
      <h1 className="my-16 text-center font-header text-4xl uppercase">
        Involvement
      </h1>

      <div className="flex h-[1000px] flex-col gap-8">
        <div className="border-8 border-green-400 p-8">
          <ImageCarousel imageList={arr} />
        </div>
      </div>
    </>
  );
}
