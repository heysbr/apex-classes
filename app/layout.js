import "./globals.css";
import { Roboto } from 'next/font/google';
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
