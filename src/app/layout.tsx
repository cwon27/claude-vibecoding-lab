import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
});

const pretendard = {
  variable: "--font-pretendard",
};

export const metadata: Metadata = {
  title: "K-NOMAD - 한국 디지털 노마드 생활 가이드",
  description: "실제 거주 경험에 기반한 신뢰할 수 있는 도시 정보를 통해 노마드들의 한국 생활 정착을 돕는 원스톱 플랫폼",
  keywords: "디지털노마드, 한국생활, 도시가이드, 노마드, 한국여행, 리모트워크",
  authors: [{ name: "K-NOMAD Team" }],
  openGraph: {
    title: "K-NOMAD - 한국 디지털 노마드 생활 가이드",
    description: "실제 거주 경험에 기반한 신뢰할 수 있는 도시 정보를 통해 노마드들의 한국 생활 정착을 돕는 원스톱 플랫폼",
    type: "website",
    locale: "ko_KR",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <head>
        <link rel="preconnect" href="https://cdn.jsdelivr.net" />
        <link 
          rel="stylesheet" 
          href="https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.9/dist/web/static/pretendard.css"
          as="style"
        />
      </head>
      <body
        className={`${outfit.variable} ${pretendard.variable} font-pretendard antialiased`}
      >
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}