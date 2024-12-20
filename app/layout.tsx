import type { Metadata } from "next";
import { Space_Grotesk, Bai_Jamjuree } from "next/font/google";

import "./globals.css";
import AppNavbar from "@/components/AppNavbar";
import AppModals from "@/components/modals/AppModals";
import appConfig from "@/utils/appConfig";
import { Toaster } from "sonner";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-space-grotesk",
});

const baiJamjuree = Bai_Jamjuree({
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700"],
  variable: "--font-bai-jamjuree",
});

export const metadata: Metadata = {
  title: appConfig.APP_NAME,
  description: `Demo - ${appConfig.APP_NAME}`,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${spaceGrotesk.variable} ${baiJamjuree?.variable} antialiased`}
      >
        <AppNavbar />
        {children}
        <Toaster richColors position="top-right" theme="light" />
        <AppModals />
      </body>
    </html>
  );
}
