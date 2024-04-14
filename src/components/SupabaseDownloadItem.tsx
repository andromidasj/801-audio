import { IconCircleArrowDown, IconFolder } from "@tabler/icons-react";
import Link from "next/link";
import { supabase } from "~/app/downloads/page";
import hyphenatedToCapitalized from "~/utils/hyphenatedToCapitalized";

export default async function SupabaseDownloadItem({
  // name,
  path,
  // topLevel = false,
}: {
  // name: string;
  path?: string | [string];
  // topLevel?: boolean;
}) {
  if (typeof path === "string") path = [path];
  console.log("🚀 ~ path:", path);

  const urlPath = ["downloads"];

  if (path) urlPath.push(...path);
  console.log("🚀 ~ urlPath:", urlPath);

  const bucketItemUrl = path?.join("/");
  console.log("🚀 ~ bucketUrl:", bucketItemUrl);

  const { data: folderItems } = await supabase.storage
    .from("downloads")
    .list(bucketItemUrl);
  console.log("🚀 ~ folderItems:", folderItems);

  return folderItems?.map((item) => {
    if (!item.metadata) {
      return (
        <Link
          key={item.name}
          className="flex flex-col items-center p-2 text-center hover:text-green-300"
          href={["", ...urlPath, item.name].join("/")}
        >
          <IconFolder className="h-20 w-20" />
          {item.name}
        </Link>
      );
    }

    const downloadUrl = supabase.storage
      .from("downloads")
      .getPublicUrl([bucketItemUrl, item.name].join("/"), { download: true })
      .data.publicUrl;

    const streamUrl = supabase.storage
      .from("downloads")
      .getPublicUrl([bucketItemUrl, item.name].join("/")).data.publicUrl;

    return (
      <div key={item.name} className="flex flex-col gap-2">
        <a
          href={downloadUrl}
          download
          className="flex cursor-pointer items-center gap-2 hover:text-green-300"
        >
          {hyphenatedToCapitalized(item.name.split(/\.mp3|\.aac/)[0])}
          <IconCircleArrowDown />
        </a>
        <audio
          controls
          // ref={(el) => el && (audioRefs.current[index] = el)}
          // onPlay={() => handlePlay(index)}
        >
          <source src={streamUrl} type="audio/mp4" />
          Your browser does not support the audio element.
        </audio>
      </div>
    );
  });
}
