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
    </>
  );
};

export default MyApp;
