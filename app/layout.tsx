"use client";
import "jsvectormap/dist/jsvectormap.css";
import "flatpickr/dist/flatpickr.min.css";
import "css/satoshi.css";
import "css/style.css";
import { Provider } from "./provider";
import "./globals.css";
import { useEffect, useState } from "react";
import Loader from "components/common/loader";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [loading, setLoading] = useState<boolean>(true);
  useEffect(() => {
    setTimeout(() => setLoading(false), 500);
  }, []);
  return (
    <html lang="en">
      <Provider>
        <body suppressHydrationWarning={true}>
          <div className="dark:bg-black dark:text-neutral-300 ">
            {loading ? <Loader /> : children}
          </div>
        </body>
      </Provider>
    </html>
  );
}
