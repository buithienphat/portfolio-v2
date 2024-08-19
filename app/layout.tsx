import Header from "@/components/Header";
import type { Metadata } from "next";
import { JetBrains_Mono } from "next/font/google";
import "./globals.css";
import Footer from "@/components/Footer";
import PageTransition from "@/components/PageTransition";
import StairTransition from "@/components/StairTransition";

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800"],
  variable: "--font-jetbrainsMono",
});

export const metadata: Metadata = {
  title: "Portfolio Thiên Phát",
  description: "Product create by Thiên Phát",
  openGraph: {
    type: "website",
    url: "https://thienphat-buithienphats-projects.vercel.app/",
    title: "Portfolio Thiên Phát",
    description: "Product create by Thiên Phát",
    siteName: "Portfolio Thiên Phát",
    images: [
      {
        url: "https://raw.githubusercontent.com/buithienphat/portfolio-v2/main/public/assets/home/home.png?token=GHSAT0AAAAAACTFQWYDYTUA4NCCU7VL3TXAZWC3WHA",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={jetbrainsMono.variable}>
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
