import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "../components/header"

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// Metadata (SEO) global
export const metadata: Metadata = {
  title: "Aula Next.js",
  description: "Aprendendo do zero com Next.js",
  openGraph: {
    title: "Aula Next.js",
    description: "Aprendendo do zero com Next.js",
    images: ['https://sujeitoprogramador.com/steve.png']
  },
  robots: {
    index: true,
    follow: true,
    nocache: false
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <Header />
        <div className="flex flex-col min-h-screen">
          <main className="p-2 flex-1 flex flex-col bg-gray-100 dark:bg-gray-900 text-gray-600 dark:text-gray-300">
            {children}
          </main>
        </div>
      </body>
    </html>
  );
}
