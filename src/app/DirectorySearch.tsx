import { promises as fs } from "fs";
import { ArrowLeftIcon } from "lucide-react";
import Link from "next/link";
import Folder from "~/components/Folder";
import hyphenatedToCapitalized from "~/utils/hyphenatedToCapitalized";
import AudioFiles from "./AudioFiles";

export default async function DirectorySearch({ path }: { path: [string] }) {
  const directoryPath =
    process.cwd() + "/public/assets/downloads/" + path.join("/");
  const dirPathRelative = "/assets/downloads/" + path.join("/");
  const directories: string[] = [];
  const files: string[] = [];

  try {
    const dirContents = await fs.readdir(directoryPath);

    for (const item of dirContents) {
      const filePath = `${directoryPath}/${item}`;
      const stat = await fs.stat(filePath);

      if (stat.isDirectory()) {
        directories.push(item);
      } else if (
        stat.isFile() &&
        (item.endsWith(".aac") || item.endsWith(".mp3"))
      ) {
        files.push(item);
      }
    }
  } catch (error) {
    console.error("Error reading directory:", error);
  }

  return (
    <>
      <Link
        href={`/downloads/${path.slice(0, -1).join("/")}`}
        className="mb-4 flex gap-1 hover:text-green-300"
      >
        <ArrowLeftIcon />
        Back
      </Link>

      <div className="grid grid-cols-3 gap-6">
        {directories.map((directory) => (
          <Folder
            key={directory}
            name={hyphenatedToCapitalized(directory)}
            path={`/downloads/${path.join("/")}/${directory}`}
          />
        ))}
      </div>
      <div className="m-auto mt-16 flex max-w-xl flex-col gap-8 p-8 text-center">
        <AudioFiles path={dirPathRelative} files={files} />
      </div>
    </>
  );
}
