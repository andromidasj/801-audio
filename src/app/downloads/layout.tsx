import TitleBanner from "~/components/TitleBanner";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <TitleBanner
        title="Downloads"
        className="bg-hero-downloads bg-center"
        overlay
      />
      <div className="mx-auto flex max-w-xl flex-col gap-8 p-8">{children}</div>
    </>
  );
}
