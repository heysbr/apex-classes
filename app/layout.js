import Footer from "../app/components/Footer/Footer";
import Header from "../app/components/Header/Header";

import "./globals.css";
import { Roboto } from 'next/font/google';

import { Merriweather_Sans } from 'next/font/google';

const merriweather = Merriweather_Sans({
  subsets: ['latin'], // Specify subsets
  weight: ['400', '700'], // Include the weights you need
  style: ['normal', 'italic'], // Optional: Include styles (normal, italic)
});


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
        className={merriweather.className} 
      >
            <Header/>
        {children}
              <Footer/>
      </body>
    </html>
  );
}
