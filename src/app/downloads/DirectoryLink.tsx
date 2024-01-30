"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"

export default function DirectoryLink({name}: {name: string}) {
  const pathname = usePathname()

  if (!pathname) {
    return null
  }

  return (
    <Link href={`${pathname}/${name}`}>{hyphenatedToCapitalized(name)}</Link>
  )
}

function hyphenatedToCapitalized(string: string): string {
  return string
    .split("-")
    .map((word: string) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
}