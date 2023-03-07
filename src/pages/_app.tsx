import { IconChevronDown } from "@tabler/icons-react";
import { type AppType } from "next/dist/shared/lib/utils";
import Link from "next/link";

import "~/styles/globals.css";

const MyApp: AppType = ({ Component, pageProps }) => {
  return (
    <div className="min-h-screen bg-slate-900 text-white">
      <nav className="sticky top-0 z-50 flex items-center justify-between bg-slate-900/50 p-4 pr-8 backdrop-blur-md">
        <h1 className="font-logo text-2xl">
          <Link href="/">801 Audio</Link>
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
      <div className="p-12">
        <Component {...pageProps} />
      </div>
    </div>
  );
};

export default MyApp;
