import { Analytics } from "@vercel/analytics/react";
import { type AppType } from "next/dist/shared/lib/utils";
import { Anton } from "next/font/google";
import { ParallaxProvider } from "react-scroll-parallax";
import Footer from "~/components/Footer";
import NavBar from "~/components/NavBar";
import { cn } from "~/lib/utils";
import "~/styles/globals.css";
import { trpc } from "../utils/trpc";

const anton = Anton({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
  variable: "--font-anton",
});

const MyApp: AppType = ({ Component, pageProps }) => {
  return (
    <>
      <ParallaxProvider>
        <div
          className={cn(
            anton.variable,
            "flex min-h-screen flex-col justify-between",
          )}
        >
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
