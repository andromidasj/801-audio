import { cn } from "~/lib/utils";

export default function TitleBanner({
  title,
  className,
  overlay,
}: {
  title: string;
  className?: string;
  overlay?: boolean;
}) {
  return (
    <>
      <div
        className={cn(
          "absolute inset-x-0 top-0 flex h-96 w-full items-center justify-center bg-black bg-cover",
          className,
        )}
      >
        {overlay && (
          <div className="absolute inset-0 bg-slate-900 bg-opacity-60" />
        )}
        <h1 className="font-header text-6xl uppercase drop-shadow md:text-[100px]">
          {title}
        </h1>
      </div>

      <div className="h-80" />
    </>
  );
}
