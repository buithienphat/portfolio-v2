import Header from "@/components/Header";
import type { Metadata } from "next";
import { JetBrains_Mono } from "next/font/google";
import "./globals.css";
import Footer from "@/components/Footer";
import PageTransition from "@/components/PageTransition";
import StairTransition from "@/components/StairTransition";
import Head from "next/head";

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800"],
  variable: "--font-jetbrainsMono",
});

export const metadata: Metadata = {
  title: "Portfolio Thiên Phát",
  description: "Product create by Thiên Phát",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={jetbrainsMono.variable}>
        <Head>
          {/* Open Graph Meta Tags */}
          <meta property="og:title" content="Portfolio Thiên Phát" />
          <meta
            property="og:description"
            content="Portfolio create by Thiên Phát"
          />
          <meta
            property="og:image"
            content="https://vercel.com/_next/image?url=%2Fapi%2Fscreenshot%3Fdark%3D0%26deploymentId%3Ddpl_2H9wiEkWLUQoHYQU2biLs3juNYu1%26teamId%3Dbuithienphats-projects%26withStatus%3D1&w=1920&q=75&dpl=dpl_HEU2pGu4cXcREoxzyBrXVvpUMzZR"
          />
          <meta
            property="og:url"
            content="https://thienphat-buithienphats-projects.vercel.app/"
          />
          <meta property="og:type" content="website" />
          <meta property="og:site_name" content="Thiên Phát's Portfolio" />
        </Head>
        <Header />
        <StairTransition />
        <PageTransition>
          <main>{children}</main>
        </PageTransition>
        <Footer />
      </body>
    </html>
  );
}
