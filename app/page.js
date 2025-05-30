import Carousel from "./components/HeroSection/Carousel";
import About from "./components/About/About";
import Courses from "./components/Courses/Courses";
import Testimonial from "./components/Testimonial/Testimonial";
import Pedagogy from "./components/Pedagogy/Pedagogy";
import Teachers from "./components/Teachers/Teachers";
import Query from "./components/Query/Query";
import Features from "./components/Features/Features";
import NavBarV2 from "./components/Header/NavBarV2";

export default function Home() {
  return (
    <>
      <Carousel />
      <About />
      <Features />
      <Courses /> 
      <Testimonial />
      <Pedagogy />
      <Teachers />
      <Query />
    </>
  );
}
