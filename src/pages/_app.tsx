import { type AppType } from "next/dist/shared/lib/utils";
import NavBar from "~/components/NavBar";

import "~/styles/globals.css";

const MyApp: AppType = ({ Component, pageProps }) => {
  return (
    <>
      <NavBar />
      <div className="m-auto">
        <Component {...pageProps} />
      </div>
      <footer className="mt-12 mb-4 flex justify-center text-slate-400">
        <a
          href="https://github.com/andromidasj"
          target="_blank"
          referrerPolicy="no-referrer"
        >
          Made with 💚 by Josh Andromidas
        </a>
      </footer>
    </>
  );
};

export default MyApp;
