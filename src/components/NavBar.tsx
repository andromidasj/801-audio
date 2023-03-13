import { useToggle, useWindowScroll } from "@mantine/hooks";
import { IconMenu2, IconX } from "@tabler/icons-react";
import Link from "next/link";
import { useRouter } from "next/router";

const HOME_PATH = "/";
const ABOUT_PATH = "/about";
const CONTACT_PATH = "/contact";
const PORTFOLIO_PATH = "/portfolio";

export default function NavBar() {
  const router = useRouter();
  const [scrolled] = useWindowScroll();
  const [mobileMenu, toggleMobileMenu] = useToggle([false, true]);

  function underlineCurrentPage(page: string) {
    return router.pathname === page
      ? "underline decoration-green-400 decoration-4 underline-offset-4"
      : "";
  }

  const hoverUnderline =
    "decoration-white decoration-4 underline-offset-4 hover:underline";

  const menuItems = (
    <>
      <li>
        <Link
          className={underlineCurrentPage(HOME_PATH) || hoverUnderline}
          href={HOME_PATH}
          onClick={() => toggleMobileMenu()}
        >
          Home
        </Link>
      </li>

      <li>
        <Link
          className={underlineCurrentPage(PORTFOLIO_PATH) || hoverUnderline}
          href={PORTFOLIO_PATH}
          onClick={() => toggleMobileMenu()}
        >
          Portfolio
        </Link>
      </li>

      <li>
        <Link
          className={underlineCurrentPage(ABOUT_PATH) || hoverUnderline}
          href={ABOUT_PATH}
          onClick={() => toggleMobileMenu()}
        >
          About
        </Link>
      </li>

      <li>
        <Link
          className={underlineCurrentPage(CONTACT_PATH) || hoverUnderline}
          href={CONTACT_PATH}
          onClick={() => toggleMobileMenu()}
        >
          Contact
        </Link>
      </li>
    </>
  );

  return (
    <nav
      className={`sticky top-0 z-50 mb-[-64px] flex w-full list-none items-center justify-between px-8 py-4 font-semibold uppercase text-white transition-colors duration-300 ${
        scrolled.y || ![HOME_PATH, PORTFOLIO_PATH].includes(router.pathname)
          ? "bg-slate-900/50 backdrop-blur"
          : ""
      }`}
    >
      <h1 className="font-logo text-2xl">
        <Link href={HOME_PATH}>801 AUDIO</Link>
      </h1>

      <button className="z-10 sm:hidden" onClick={() => toggleMobileMenu()}>
        {mobileMenu ? <IconX /> : <IconMenu2 />}
      </button>

      <ul className="hidden justify-end gap-8 sm:flex">{menuItems}</ul>

      <div
        className={`absolute inset-0 flex h-screen w-screen flex-col items-center justify-center gap-16 bg-black text-2xl transition-opacity sm:hidden ${
          mobileMenu ? "opacity-100" : "invisible opacity-0"
        }`}
      >
        <h1 className="font-logo text-5xl">801 AUDIO</h1>
        {menuItems}
      </div>
    </nav>
  );
}
