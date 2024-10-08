import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import ThemeProvider from "./providers/theme-provider";
import Header from "@/components/layouts/header";
import Footer from "@/components/layouts/footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "mvp",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full">
      <body className={inter.className}>
      <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
        <Header />
        {children}
      </ThemeProvider>
      <Footer />
        </body>
    </html>
  );
}
