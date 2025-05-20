import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});



import { Roboto } from '@next/font/google';
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";

const roboto = Roboto({
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: "--font-roboto",
});

export const metadata = {
  title: "Apex Classes",
  description: "Online Learning Platform",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${roboto.variable}antialiased`}
      >
        <Header/>
        {children}
        <Footer/>
      </body>
    </html>
  );
}
