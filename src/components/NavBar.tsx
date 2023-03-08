import { IconChevronDown } from "@tabler/icons-react";
import Link from "next/link";

export default function NavBar() {
  return (
    <nav className="sticky top-0 z-50 m-auto flex items-center justify-between bg-white/50 px-8 py-4 font-semibold backdrop-blur-md">
      <h1 className="font-logo text-2xl">
        <Link href="/">Parker Holt</Link>
      </h1>
      <ul className="flex justify-end gap-8">
        <li>
          <Link href="/">Home</Link>
        </li>
        <li className="flex items-center gap-1">
          Portfolio <IconChevronDown size={14} />
        </li>
        <li>
          <Link href="/about">About</Link>
        </li>
        <li>
          <Link href="/contact">Contact</Link>
        </li>
      </ul>
    </nav>
  );
}
