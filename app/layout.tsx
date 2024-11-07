"use client";
import "jsvectormap/dist/jsvectormap.css";
import "flatpickr/dist/flatpickr.min.css";
import "css/satoshi.css";
import "css/style.css";
import { Provider } from "./provider";
import "./globals.css";
import { useEffect, useState } from "react";
import Loader from "components/common/loader";
import { useSession } from "next-auth/react";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Provider>
        <body suppressHydrationWarning={true}>
          <div className="dark:bg-black dark:text-neutral-300 ">{children}</div>
        </body>
      </Provider>
    </html>
  );
}
