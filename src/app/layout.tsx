import type { Metadata } from "next";
// import localFont from "next/font/local";
import { Roboto } from "next/font/google";
import "./globals.css";
import Footer from "./components/Footer";

// const geistSans = localFont({
//   src: "./fonts/GeistVF.woff",
//   variable: "--font-geist-sans",
//   weight: "100 900",
// });
// const geistMono = localFont({
//   src: "./fonts/GeistMonoVF.woff",
//   variable: "--font-geist-mono",
//   weight: "100 900",
// });

const roboto = Roboto({
  weight: '400',
  subsets: ['latin'],
  display: 'swap',
})

export const metadata: Metadata = {
  title: "Cidade R3",
  description: "Cidade R3",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${roboto} antialiased bg-slate-100 text-slate-900 dark:bg-slate-900 dark:text-slate-50
        `}
      >
        
        {children}

        <Footer />
      </body>
    </html>
  );
}
