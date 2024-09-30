"use client";
import { SessionProvider } from "next-auth/react";
import { Toaster } from "react-hot-toast";

const Providers = ({ children }) => {
  return (
    <>
     
      <SessionProvider>{children}</SessionProvider>
    </>
  );
};

export default Providers;
