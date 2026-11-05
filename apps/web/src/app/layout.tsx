import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Wavora Studio — Editor de vídeo",
  description: "Editor de vídeo gratuito no navegador. Edite, corte e exporte os seus vídeos no seu dispositivo."
};

export const viewport: Viewport = {
  // The editor is a fixed application surface; pinch-zooming the chrome breaks
  // canvas pointer math and helps nobody.
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
  themeColor: "#101820",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    // `data-theme` is set here rather than by a client script: dark is the
    // default, so there is no flash to avoid and no hydration mismatch to risk.
    <html lang="pt-AO" data-theme="dark" className={`${inter.variable} h-full`}>
      <body className="h-full overflow-hidden">{children}</body>
    </html>
  );
}
