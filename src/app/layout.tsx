import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import { Montserrat } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Head from "next/head";
import Providers from './providers';

const poppins = Montserrat({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: "400",
})

export const metadata: Metadata = {
  title: "Nivek Techs",
  description: "Buy the latest and trendy tech",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Head>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <body
        className={`${poppins.className} antialiased`}
      >
        <Navbar />
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  );
}
