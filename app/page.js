import HeroSection from "./components/HeroSection/HeroSection";
import WelcomeSection from "./components/WelcomeSection/WelcomeSection";
import Courses from "./components/Courses/Courses";
import Testimonial from "./components/Testimonial/Testimonial";
import Pedagogy from "./components/Pedagogy/Pedagogy";
import Teachers from "./components/Teachers/Teachers";
import Query from "./components/Query/Query";
import Features from "./components/Features/Features";

export default function Home() {
  return (
    <>
      <HeroSection />
      <WelcomeSection />
      <Features />
      <Courses />
      <Testimonial />
      <Pedagogy />
      <Teachers />
      <Query />
    </>
  );
}
