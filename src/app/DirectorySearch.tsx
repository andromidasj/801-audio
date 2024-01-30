import { IconCircleArrowDown } from "@tabler/icons-react";
import { promises as fs } from "fs";
import Folder from "~/components/Folder";

export default async function DirectorySearch({ path }: { path: [string] }) {
  console.log("🚀 ~ Page ~ path:", path);
  const directoryPath =
    process.cwd() + "/public/assets/downloads/" + path.join("/");
  const directories: string[] = [];
  const files: string[] = [];

  try {
    const dirContents = await fs.readdir(directoryPath);

    for (const item of dirContents) {
      const filePath = `${directoryPath}/${item}`;
      const stat = await fs.stat(filePath);

      if (stat.isDirectory()) {
        directories.push(item);
      } else if (stat.isFile() && item.endsWith(".ogg")) {
        files.push(item);
      }
    }
  } catch (error) {
    console.error("Error reading directory:", error);
  }

  return (
    <>
      <div className="grid grid-cols-3 gap-6">
        {directories.map((directory) => (
          <Folder
            key={directory}
            name={directory}
            path={`${path.join("/")}/${directory}`}
          />
        ))}
      </div>
      <div className="m-auto mt-16 flex max-w-xl flex-col gap-8 p-8 text-center">
        {files.map((file) => (
          <div key={file} className="flex flex-col gap-2">
            <a
              href={`${directoryPath}/${file}`}
              download
              className="flex cursor-pointer items-center gap-2 hover:text-green-300"
            >
              {file.split(".ogg")[0]?.replaceAll("-", " ")}
              <IconCircleArrowDown />
            </a>
            <audio controls>
              <source src={`${directoryPath}/${file}`} type="audio/ogg" />
              Your browser does not support the audio element.
            </audio>
          </div>
        ))}
      </div>
    </>
  );
}
