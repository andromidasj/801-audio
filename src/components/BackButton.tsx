"use client";

import { ArrowLeftIcon } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function BackButton() {
  const pathname = usePathname();

  if (!pathname || pathname === "/downloads") return <div className="h-8" />;

  return (
    <Link
      href={pathname.split("/").slice(0, -1).join("/")}
      className="mb-8 flex gap-1 hover:text-green-300"
    >
      <ArrowLeftIcon />
      Back
    </Link>
  );
}
