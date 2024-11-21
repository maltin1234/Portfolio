"use client"

import "./globals.css";
import NavBar from "./components/NavBar";
import Providers from "./providers";



export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
       
      </head>
      <body>
        <NavBar />
       <Providers > {children}</Providers>
      </body>
    </html>
  );
}
