import { IconFolder } from "@tabler/icons-react";
import Link from "next/link";

export default function Folder({
  name,
  path,
  topLevel = false,
}: {
  name: string;
  path: string | [string];
  topLevel?: boolean;
}) {
  if (typeof path === "string") path = [path];

  const fullPath = topLevel ? ["downloads", ...path] : path;

  return (
    <Link
      className="flex flex-col items-center p-2 text-center hover:text-green-300"
      href={fullPath.join("/")}
    >
      <IconFolder className="h-20 w-20" />
      {name}
    </Link>
  );
}
