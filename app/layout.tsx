import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

// import Footer from "./ui/footer";
// import Navbar from "./ui/navbar";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: " 900",
});
const ibmPlexSansBold = localFont({
  src: "./fonts/IBMPlexSans-Bold.ttf",
  variable: "--font-ibmplex-bold",
  weight: " 900",
});
export const metadata: Metadata = {
  title: "School_Hub",
  description: "A school management system built with Nextjs15",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${ibmPlexSansBold} antialiased`}>
        {/* <Navbar/> */}
        {children}
        {/* <Footer/> */}
      </body>
    </html>
  );
}
