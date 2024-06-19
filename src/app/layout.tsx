import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Providers } from '../pages/provider';

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Shadcn UI (Mail)",
  description: "Generated from Shadcn UI Examples",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
      <Providers>
             

      className={inter.className}{children}
      </Providers>

        </body>
    </html>
  );
}
