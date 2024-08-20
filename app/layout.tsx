import Header from "@/components/Header";
import type { Metadata } from "next";
import { JetBrains_Mono } from "next/font/google";
import "./globals.css";
import Footer from "@/components/Footer";
import PageTransition from "@/components/PageTransition";
import StairTransition from "@/components/StairTransition";
import Head from "next/head";
import Script from "next/script";

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
        url: "https://raw.githubusercontent.com/buithienphat/portfolio-v2/main/public/assets/home/home.png",
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
      <Head>
        <Script id="google-tag-manager" strategy="afterInteractive">
          {`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-WLBM66TP');`}
        </Script>

        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-V8TRDYWYVM"
        ></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-V8TRDYWYVM');
            `,
          }}
        />
      </Head>
      <body className={jetbrainsMono.variable}>
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-WLBM66TP"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          ></iframe>
        </noscript>

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
