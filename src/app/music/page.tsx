import MusicSection from "~/components/MusicSection";
import TitleBanner from "~/components/TitleBanner";

export const metadata = {
  title: "Parker Holt Portfolio | 801 Audio",
  description: "Parker Holt's Digital Audio Portfolio | 801 Audio",
};

export default function Portfolio() {
  return (
    <>
      <TitleBanner title="Music" className="bg-hero-music bg-bottom" />

      <div className="mx-auto max-w-7xl p-8">
        <MusicSection />
      </div>
    </>
  );
}
