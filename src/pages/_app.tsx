import { type AppType } from "next/dist/shared/lib/utils";

import "~/styles/globals.css";

const MyApp: AppType = ({ Component, pageProps }) => {
  return (
    <div className="m-auto">
      {/* <NavBar /> */}
      <Component {...pageProps} />
    </div>
  );
};

export default MyApp;
