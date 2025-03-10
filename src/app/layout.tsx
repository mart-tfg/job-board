"use client"; // Still a client component

import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { GlobalComponentProvider } from "@/providers/GlobalComponents";
import { LoadingProvider } from "@/context/LoadingContext";
import { LoadingSpinner } from "@/components/ui/loadingSpinner";
import { useLoading } from "@/context/LoadingContext";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <LoadingProvider>
          <LoadingComponent />
          <GlobalComponentProvider>{children}</GlobalComponentProvider>
        </LoadingProvider>
      </body>
    </html>
  );
}

function LoadingComponent() {
  const { isLoading } = useLoading();

  return (
    isLoading && (
      <div className="fixed inset-0 flex justify-center items-center   bg-opacity-50 backdrop-blur-sm z-50">
        <LoadingSpinner className="text-white" />
      </div>
    )
  );
}
