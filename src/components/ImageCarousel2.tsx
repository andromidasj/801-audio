import ImageGallery from "react-image-gallery";
import { type InvolvementData } from "~/involvementData";

export default function ImageCarousel({ data }: { data: InvolvementData }) {
  console.log(data.images.map((i) => ({ original: i })));
  return <ImageGallery items={data.images.map((i) => ({ original: i }))} />;
}
