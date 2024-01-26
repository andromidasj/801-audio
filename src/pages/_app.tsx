import { Analytics } from "@vercel/analytics/react";
import Footer from "~/components/Footer";
import NavBar from "~/components/NavBar";
import { type AppType } from "next/dist/shared/lib/utils";
import { ParallaxProvider } from "react-scroll-parallax";
import { trpc } from "../utils/trpc";
import "~/styles/globals.css";

const MyApp: AppType = ({ Component, pageProps }) => {
  return (
    <>
      <ParallaxProvider>
        <div className="flex min-h-screen flex-col justify-between">
          <div>
            <NavBar />
            <div className="m-auto">
              <Component {...pageProps} />
            </div>
          </div>
          <Footer />
        </div>
      </ParallaxProvider>
      <Analytics />
    </>
  );
};

export default trpc.withTRPC(MyApp);
