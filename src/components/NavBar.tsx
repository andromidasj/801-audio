"use client";

import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import { useToggle, useWindowScroll } from "@mantine/hooks";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "~/lib/utils";

export default function NavBar() {
  const [scrolled] = useWindowScroll();
  const pathname = usePathname();
  const [mobileMenu, toggleMobileMenu] = useToggle([false, true]);

  const HOME_PATH = "/";

  function LinkItem({ path, name }: { path: string; name: string }) {
    return (
      <li>
        <Link
          className={cn(
            "decoration-4 underline-offset-4 hover:underline",
            pathname === path && "underline decoration-green-400",
          )}
          href={path}
          onClick={() => toggleMobileMenu(false)}
        >
          {name}
        </Link>
      </li>
    );
  }

  const menuItems = (
    <>
      <LinkItem path={HOME_PATH} name="Home" />
      <LinkItem path="/music" name="Music" />
      <LinkItem path="/downloads" name="Downloads" />
      <LinkItem path="/contact" name="Contact" />
    </>
  );

  return (
    <nav
      className={cn(
        "sticky top-0 z-50 mb-[-64px] flex w-full list-none items-center justify-between px-8 py-4 font-semibold uppercase text-white transition-colors",
        scrolled.y && "bg-slate-900/50 backdrop-blur",
      )}
    >
      <h1 className="font-logo text-2xl decoration-4 underline-offset-4 transition-all hover:underline">
        <Link href={HOME_PATH}>801 AUDIO</Link>
      </h1>

      <button className="z-10 sm:hidden" onClick={() => toggleMobileMenu()}>
        {mobileMenu ? (
          <XMarkIcon className="h-8 w-8" />
        ) : (
          <Bars3Icon className="h-8 w-8" />
        )}
      </button>

      <ul className="hidden justify-end gap-8 sm:flex">{menuItems}</ul>

      <div
        className={`absolute inset-0 flex h-screen w-screen flex-col items-center justify-center gap-16 bg-black text-2xl transition-opacity duration-300 sm:hidden ${
          mobileMenu ? "opacity-100" : "invisible opacity-0"
        }`}
      >
        <h1 className="font-logo text-5xl">801 AUDIO</h1>
        {menuItems}
      </div>
    </nav>
  );
}
