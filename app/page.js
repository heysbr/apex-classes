import Image from "next/image";
import Header from "./components/Header/Header";
import HeroSection from "./components/HeroSection/HeroSection";
import WelcomeSection from "./components/WelcomeSection/WelcomeSection";

export default function Home() {
  return (
    <>
      <Header />
      <HeroSection />
      <WelcomeSection/>
    </>
  );
}
