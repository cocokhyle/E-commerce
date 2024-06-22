import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { useRouter } from "next/router";
import Footer from "./components/footer";
import Header from "./components/header";
import SideBar from "./components/sidebar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="grid grid-cols-[auto,1fr] h-screen">
          <div className="">
            <SideBar />
          </div>
          <div className="flex flex-col">
            <div>
              <Header />
            </div>
            <div className="p-5 flex-grow">
              <div className="p-5">{children}</div>
            </div>
          </div>
        </div>
      </body>
    </html>
  );
}
