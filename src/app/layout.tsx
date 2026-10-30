import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable} h-full justify-center flex bg-[#0a0a0a] antialiased`}>
      <body className=" w-18/20 my-18 bg-[#101010] flex flex-col ">
        <div className="absolute top-0 left-0 w-0 h-0 border-t-[150px] z-1 border-t-[#2CA3FA] border-r-[150px] border-r-transparent"></div>
        {children}
      </body>
    </html>
  );
}
