"use client"
import { Inter } from "next/font/google";
import "./globals.css";
import NavBar from "./components/NavBar";
import Providers from "./providers";

const inter = Inter({ subsets: ['latin'] });

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <style jsx global>{`
          body {
            font-family: ${inter.style.fontFamily};
          }
        `}</style>
      </head>
      <body>
        <NavBar />
       <Providers> {children}</Providers>
      </body>
    </html>
  );
}
