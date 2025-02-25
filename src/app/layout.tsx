"use client";

import { NextIntlClientProvider } from "next-intl";
import { notFound } from "next/navigation";
import { Poppins } from "next/font/google";
import "./globals.css";
import "@/fonts/line-awesome-1.3.0/css/line-awesome.css";
import "@/styles/index.scss";
import "rc-slider/assets/index.css";
import Footer from "@/components/Footer";
import FooterNav from "@/components/FooterNav";
import ReduxProvider from "@/utils/CurrencyStore/CurrencyProvider";
import ClientCommons from "./ClientCommons";
import { useEffect, useState } from "react";
import Script from "next/script";
import clsx from "clsx";
import Header3 from "./(client-components)/(Header)/Header3";

const poppins = Poppins({
  subsets: ["latin"],
  display: "swap",
  weight: ["300", "400", "500", "600", "700"],
});

export default function RootLayout({
  children,
  params: { locale },
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  const [hydrated, setHydrated] = useState(false);

  useEffect(() => {
    setHydrated(true);
  }, []);

  return (
    <html lang="en-IN">
      <body
        className={clsx(
          "relative bg-white text-base dark:bg-neutral-900 text-neutral-900 dark:text-neutral-200 overflow-y-scroll",
          hydrated && poppins.className // Apply font only after hydration
        )}
      >
        {/* Google Translate Element */}
        <div id="google_translate_element" className="absolute bottom-5 right-5"></div>

        {/* Providers */}
        <ReduxProvider>
            <ClientCommons />
            <Header3 />
            {children}
            <Footer />
        </ReduxProvider>

        {/* Move Scripts to the End of <body> */}
        <Script src="/assets/lang-config.js" strategy="beforeInteractive" />
        <Script src="/assets/translation.js" strategy="beforeInteractive" />
        <Script src="//translate.google.com/translate_a/element.js?cb=TranslateInit" strategy="afterInteractive" />
      </body>
    </html>
  );
}
