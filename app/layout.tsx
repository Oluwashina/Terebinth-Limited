import type { Metadata } from "next";
import { Lato } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";


const lato = Lato({
  variable: "--font-lato",
  weight: ["400", "700"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Terebinth Limited",
  description: "Compassionate Residential Care for Your Loved Ones",
  keywords: [
    "residential care",
    "elderly care",
    "compassionate care",
    "person-centred care",
    "quality care",
    "Fylde Coast care homes",
    "dementia care",
    "nursing care",
    "care home services",
  ],
  authors: [{name: "Terebinth Limited"}], 
  openGraph: {
    title: "Terebinth Limited - Compassionate Residential Care",
    description: "Providing safe, respectful, person-centred support across the Fylde Coast.",
    url: "https://www.terebinthlimited.co.uk",
    siteName: "Terebinth Limited",
    images: [
      {
        url: "https://www.terebinthlimited.co.uk/logo.svg",
        width: 1200,
        height: 630,
        alt: "Terebinth Limited care home",
      },
    ],
    locale: "en_GB",
    type: "website",
  },
} 

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${lato.variable} h-full antialiased`}
    >
      <head>
         <link rel="icon" href="/favicon.png" type="image/png" sizes="any" />
      </head>
      <body>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
