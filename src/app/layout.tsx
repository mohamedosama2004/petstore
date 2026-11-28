import type { Metadata } from "next";
import type { ReactNode } from "react";
import { IBM_Plex_Sans_Arabic } from "next/font/google";
import "./globals.css";

const ibmPlexArabic = IBM_Plex_Sans_Arabic({
  variable: "--font-ibm-plex-sans-arabic",
  subsets: ["arabic", "latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "New — مستلزمات الحيوانات الأليفة",
    template: "%s | New",
  },
  description:
    "متجر نيو للمستلزمات اليومية للقطط والكلاب في المملكة العربية السعودية.",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="ar" dir="rtl" className={`${ibmPlexArabic.variable} h-full antialiased`}>
      <body className="flex min-h-full flex-col bg-cream text-charcoal">{children}</body>
    </html>
  );
}
