import Image from "next/image";
import Header from "./components/Header/Header";
import HeroSection from "./components/HeroSection/HeroSection";
import WelcomeSection from "./components/WelcomeSection/WelcomeSection";
import Courses from "./components/Courses/Courses";
import Testimonial from "./components/Testimonial/Testimonial";
import Pedagogy from "./components/Pedagogy/Pedagogy";
import Teachers from "./components/Teachers/Teachers";
import Query from "./components/Query/Query";
import Footer from "./components/Footer/Footer";
import About from "./components/About/About";

import apexlogo from "@/public/images/apexlogo.svg"

export default function Home() {
  return (
    <>
    <Header />
      <HeroSection />
      <WelcomeSection/>
      <About/>
      <Courses/>
      <Testimonial/>
      <Pedagogy/>
      <Teachers/>
      <Query/>
      <Footer/>
    </>
  );
}
