import { Anton, Tilt_Warp } from "next/font/google";
import Footer from "~/components/Footer";
import NavBar from "~/components/NavBar";
import "~/styles/globals.css";

const anton = Anton({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
  variable: "--font-anton",
});

const tiltWarp = Tilt_Warp({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-tilt-warp",
});

export const metadata = {
  title: "801 Audio",
  description: "801 Audio",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${anton.variable} ${tiltWarp.variable}`}>
      <body className="flex min-h-screen flex-col bg-slate-900 text-white">
        <NavBar />
        <div className="flex-1">{children}</div>
        <Footer />
      </body>
    </html>
  );
}
