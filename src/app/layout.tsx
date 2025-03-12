"use client"; // Still a client component

import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { GlobalComponentProvider } from "@/providers/GlobalComponents";
import { LoadingProvider } from "@/context/LoadingContext";
import { LoadingSpinner } from "@/components/ui/loadingSpinner";
import { useLoading } from "@/context/LoadingContext";
import Navbar from "@/components/navbar";
import { usePathname } from "next/navigation";
import { AuthProvider } from "@/context/AuthContext";

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
  const pathname = usePathname();
  const hideNavbar = pathname === "/login" || pathname === "/register";
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <LoadingProvider>
          <LoadingComponent />
          <AuthProvider>
            {!hideNavbar && <Navbar />}
            <GlobalComponentProvider>{children}</GlobalComponentProvider>
          </AuthProvider>
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
