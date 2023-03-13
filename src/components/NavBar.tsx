import { useWindowScroll } from "@mantine/hooks";
import Link from "next/link";
import { useRouter } from "next/router";

const HOME_PATH = "/";
const ABOUT_PATH = "/about";
const CONTACT_PATH = "/contact";
const PORTFOLIO_PATH = "/portfolio";

export default function NavBar() {
  const router = useRouter();
  const [scrolled] = useWindowScroll();

  function underlineCurrentPage(page: string) {
    return router.pathname === page
      ? "underline decoration-white decoration-4 underline-offset-4"
      : "";
  }

  const hoverUnderline =
    "decoration-green-500 decoration-4 underline-offset-4 hover:underline";

  return (
    <nav
      className={`sticky top-0 z-50 flex w-full items-center justify-between ${
        scrolled.y || ![HOME_PATH, PORTFOLIO_PATH].includes(router.pathname)
          ? "bg-slate-900/50 backdrop-blur"
          : ""
      } px-8 py-4 font-semibold text-white transition-colors duration-300`}
    >
      <h1 className="font-logo text-2xl">
        <Link href={HOME_PATH}>801 AUDIO</Link>
      </h1>

      <ul className="flex justify-end gap-8 uppercase">
        <li>
          <Link
            className={underlineCurrentPage(HOME_PATH) || hoverUnderline}
            href={HOME_PATH}
          >
            Home
          </Link>
        </li>

        <li>
          <Link
            className={underlineCurrentPage(PORTFOLIO_PATH) || hoverUnderline}
            href={PORTFOLIO_PATH}
          >
            Portfolio
          </Link>
        </li>

        <li>
          <Link
            className={underlineCurrentPage(ABOUT_PATH) || hoverUnderline}
            href={ABOUT_PATH}
          >
            About
          </Link>
        </li>

        <li>
          <Link
            className={underlineCurrentPage(CONTACT_PATH) || hoverUnderline}
            href={CONTACT_PATH}
          >
            Contact
          </Link>
        </li>
      </ul>
    </nav>
  );
}
