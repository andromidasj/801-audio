import { Anton } from "next/font/google";
import NavBar from "~/components/NavBar";
import "~/styles/globals.css";

const anton = Anton({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
  variable: "--font-anton",
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
    <html lang="en" className={anton.variable}>
      <body className="min-h-screen bg-slate-900 text-white">
        <NavBar />
        <div className="mt-16">{children}</div>
      </body>
    </html>
  );
}
