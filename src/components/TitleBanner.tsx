import { cn } from "~/lib/utils";

export default function TitleBanner({
  title,
  subtitle,
  className,
  overlay,
}: {
  title: string;
  subtitle?: string;
  className?: string;
  overlay?: boolean;
}) {
  return (
    <div
      className={cn(
        "relative flex h-96 w-full items-center justify-center bg-black bg-cover px-4",
        className,
      )}
    >
      <div className="z-10 flex flex-col text-center">
        <h1 className="font-header text-6xl uppercase drop-shadow md:text-[100px]">
          {title}
        </h1>
        {subtitle && (
          <h2 className="mt-4 text-center text-xl font-bold uppercase md:text-3xl">
            {subtitle}
          </h2>
        )}
      </div>
      {overlay && (
        <div className="absolute inset-0 bg-slate-900 bg-opacity-60" />
      )}
    </div>
  );
}
