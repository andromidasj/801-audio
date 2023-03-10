import Link from "next/link";
import { useRouter } from "next/router";

const HOME_PATH = "/";
const ABOUT_PATH = "/about";
const CONTACT_PATH = "/contact";
export default function NavBar() {
  const router = useRouter();

  function underlineCurrentPage(page: string) {
    return router.pathname === page
      ? "underline decoration-blue-600 decoration-4 underline-offset-4"
      : "";
  }

  const hoverUnderline =
    "decoration-blue-400 decoration-4 underline-offset-4 hover:underline";

  return (
    <nav className="sticky top-0 z-50 flex items-center justify-between bg-blue-50/50 px-8 py-4 font-semibold backdrop-blur-md">
      <h1 className="font-logo text-2xl">
        <Link href={HOME_PATH}>Parker Holt</Link>
      </h1>

      <ul className="flex justify-end gap-8">
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
