import { type AppType } from "next/dist/shared/lib/utils";
import NavBar from "~/components/NavBar";

import "~/styles/globals.css";

const MyApp: AppType = ({ Component, pageProps }) => {
  return (
    <div className="m-auto">
      <NavBar />
      <div className="m-auto max-w-7xl p-8">
        <Component {...pageProps} />
      </div>
    </div>
  );
};

export default MyApp;
