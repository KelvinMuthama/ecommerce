import { ClerkProvider } from "@clerk/nextjs";
import type { Metadata } from "next";
import { Manrope } from "next/font/google";

import { ModalProvider } from "@/providers/modal-provider";
import { ToasterProvider } from "@/providers/toast-provider";

import "./globals.css";

const manrope = Manrope({ subsets: ["latin"], weight: ["500"] });

export const metadata: Metadata = {
  title: "Admin Dashboard",
  description: "Admin dashboard",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={manrope.className}>
          <ModalProvider />
          <ToasterProvider />
          {children}
        </body>
      </html>
    </ClerkProvider>
  );
}
