import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./Navbar";

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="max-w-[1140px] mt-0 mx-auto">
        <nav>
          <Navbar />
        </nav>
        <main>{children}</main>
      </body>
    </html>
  );
}
