import { IconCircleArrowDown, IconFolder } from "@tabler/icons-react";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import React from "react";
import { cn } from "~/lib/utils";
import hyphenatedToCapitalized from "~/utils/hyphenatedToCapitalized";
import { supabase } from "~/utils/storage";
import AudioPlayer from "./AudioPlayer";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "./ui/breadcrumb";

export default async function SupabaseDownloadItems({
  path,
}: {
  path?: string | [string];
}) {
  if (typeof path === "string") path = [path];

  const urlPath = ["downloads"];
  if (path) urlPath.push(...path);

  const bucketItemUrl = path?.join("/");

  const { data: folderItems } = await supabase.storage
    .from("downloads")
    .list(bucketItemUrl);

  const containsDirectories = folderItems?.some((item) => !item.metadata);

  return (
    <div>
      {/* <BackButton /> */}

      <Breadcrumb className="dark mb-4">
        <BreadcrumbList>
          {urlPath.map((item, index, arr) => {
            const isLast = index === arr.length - 1;
            return (
              <React.Fragment key={item}>
                <BreadcrumbItem key={`link-${item}`}>
                  {!isLast ? (
                    <BreadcrumbLink
                      href={`/${arr.slice(0, index + 1).join("/")}`}
                    >
                      {hyphenatedToCapitalized(item)}
                    </BreadcrumbLink>
                  ) : (
                    <BreadcrumbPage>
                      {hyphenatedToCapitalized(item)}
                    </BreadcrumbPage>
                  )}
                </BreadcrumbItem>
                {!isLast && <BreadcrumbSeparator />}
              </React.Fragment>
            );
          })}
        </BreadcrumbList>
      </Breadcrumb>

      <div
        className={cn(
          "flex w-full flex-col rounded-lg",
          containsDirectories
            ? "divide-y border border-muted-foreground"
            : "items-center",
        )}
      >
        {folderItems?.map((item) => {
          if (!item.metadata) {
            return (
              <Link
                key={item.name}
                className="group flex items-center justify-between gap-2 border-muted-foreground px-2 py-3 text-center hover:bg-green-300/5 hover:text-green-300"
                href={["", ...urlPath, item.name].join("/")}
              >
                <div className="flex w-full items-center gap-2">
                  <IconFolder className="size-6" />
                  {hyphenatedToCapitalized(item.name)}
                </div>
                <ArrowRight className="-translate-x-4 opacity-0 transition-all group-hover:translate-x-0 group-hover:opacity-100" />
              </Link>
            );
          }

          const downloadUrl = supabase.storage
            .from("downloads")
            .getPublicUrl([bucketItemUrl, item.name].join("/"), {
              download: true,
            }).data.publicUrl;
          const streamUrl = supabase.storage
            .from("downloads")
            .getPublicUrl([bucketItemUrl, item.name].join("/")).data.publicUrl;

          return (
            <div
              key={item.name}
              className="my-4 flex flex-col gap-2 border-muted-foreground"
            >
              <a
                href={downloadUrl}
                download
                className="flex cursor-pointer items-center gap-2 hover:text-green-300"
              >
                {hyphenatedToCapitalized(item.name.split(/\.mp3|\.aac/)[0])}
                <IconCircleArrowDown />
              </a>
              <AudioPlayer streamUrl={streamUrl} />
            </div>
          );
        })}
      </div>
    </div>
  );
}
