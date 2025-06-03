import Bullets from "./Bullets";
import AboutCards from "./AboutCards";
import AboutPara from "../HeroSection/AboutPara";
import Container from "../layout/Container";

const BulletData = [
  { id: 1, para: "Teaching by excelled academicians for better results" },
  { id: 2, para: "Regular Motivation Sessions for students" },
  { id: 3, para: "Daily Doubt Clearing Sessions" },
];

const features = [
  {
    id: 1,
    imgSrc:
      "https://images.pexels.com/photos/6981006/pexels-photo-6981006.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    title: "Expert Teachers",
    description: "Teaching by excelled academicians for better results.",
  },
  {
    id: 2,
    imgSrc:
      "https://images.pexels.com/photos/2740956/pexels-photo-2740956.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    title: "Regular Motivation",
    description: "Providing Regular Motivation Sessions for students.",
  },
  {
    id: 3,
    imgSrc:
      "https://images.pexels.com/photos/5428830/pexels-photo-5428830.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    title: "Doubt Clearing",
    description: "Daily providing Doubt Clearing Sessions for our students.",
  },
  {
    id: 4,
    imgSrc:
      "https://images.pexels.com/photos/6517287/pexels-photo-6517287.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    title: "PTM",
    description: "Regular Parents Teacher Meeting for better understanding.",
  },
];

export default function About() {
  return (
    <Container>
      <div className="container w-full text-black flex flex-wrap mx-auto ">
        <div className="w-full lg:w-1/2 mb-10  mt-10 md:my-auto">
          <div className="max-w-md mx-6">
            <p className="my-2 text-4xl lg:text-5xl font-bold font-heading">
              <span className="text-red-600 ">About</span> Section
            </p>
            <AboutPara />
            <Bullets BulletData={BulletData} />
          </div>
        </div>
        <AboutCards features={features} />
      </div>
    </Container>
  );
}
