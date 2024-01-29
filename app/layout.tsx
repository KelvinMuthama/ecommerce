import { ClerkProvider } from "@clerk/nextjs";
import type { Metadata } from "next";
import { DM_Sans } from "next/font/google";

import { ModalProvider } from "@/providers/modal-provider";
import { ToasterProvider } from "@/providers/toast-provider";

import "./globals.css";

const dM_Sans = DM_Sans({ subsets: ["latin"], weight: ["400"] });

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
        <body className={dM_Sans.className}>
          <ModalProvider />
          <ToasterProvider />
          {children}
        </body>
      </html>
    </ClerkProvider>
  );
}
