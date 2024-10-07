"use client"

import "./globals.css";
import "./scroll.css";
import { ClerkProvider } from "@clerk/nextjs";
import { Header } from "./component/header";
import { dark } from '@clerk/themes'
import { Footer } from "./component/footer";
import { useEffect } from "react";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  useEffect(() => {
    const timer = setTimeout(() => {
        window.scrollTo({
            top: document.body.scrollHeight / 4,
            behavior: 'smooth'
        });
    }, 1500)

    return () => clearTimeout(timer)
}, []);

  return (
    <ClerkProvider appearance={{
      baseTheme: dark,
    }}>
      <html lang="ru">
        <link rel="shortcut icon" href="/favicon.ico" />
        <body>
          <Header/>
          {children}
          <Footer/>
        </body>
      </html>
    </ClerkProvider>
  );
}
