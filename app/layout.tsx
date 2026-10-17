import type { Metadata } from "next";
import { IBM_Plex_Sans_Thai } from "next/font/google";
import "./globals.css";

const thai = IBM_Plex_Sans_Thai({
  variable: "--font-thai",
  subsets: ["thai", "latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "CUBIC Longevity | โปรแกรมสุขภาพยืนยาวสำหรับลูกค้าใหม่",
  description:
    "เริ่มต้นดูแลสุขภาพให้แข็งแรงและอยู่ได้ยาวนานกับ CUBIC คลับออกกำลังกายสมรรถนะสูงใจกลางกรุงเทพฯ ทักไลน์เพื่อจองประเมินครั้งแรก",
  openGraph: {
    title: "CUBIC Longevity",
    description: "โปรแกรมสุขภาพยืนยาวสำหรับลูกค้าใหม่ ทักไลน์เพื่อจองประเมินครั้งแรก",
    locale: "th_TH",
    type: "website",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="th" className={`${thai.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
