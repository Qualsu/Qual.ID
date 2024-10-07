import "./globals.css";
import "./scroll.css";
import { ClerkProvider } from "@clerk/nextjs";
import { Header } from "./component/header";
import { dark } from '@clerk/themes'
import { Footer } from "./component/footer";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Qual ID",
  description: "Единый аккаунт для всех",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider appearance={{
      baseTheme: dark,
    }}>
      <html lang="ru">
        <body>
          <Header/>
          {children}
          <Footer/>
        </body>
      </html>
    </ClerkProvider>
  );
}
