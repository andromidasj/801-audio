import { type AppType } from "next/dist/shared/lib/utils";
import Footer from "~/components/Footer";
import NavBar from "~/components/NavBar";

import "~/styles/globals.css";

const MyApp: AppType = ({ Component, pageProps }) => {
  return (
    <div className="flex min-h-screen flex-col justify-between">
      <div>
        <NavBar />
        <div className="m-auto">
          <Component {...pageProps} />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default MyApp;
