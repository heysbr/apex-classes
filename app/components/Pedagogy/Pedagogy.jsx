import React from "react";
import PedagogyPara from "../Paragraphs/PedagogyPara";
import Button from "../Button/Button";
import Container from "../layout/Container";
import PedagogyCard from "./PedagogyCard";

const PedagogyData = [
  {
    title: "Academic Team",
    description:
      "Best brains of India with umpteen experience and expertise to guide you through all the levels of preparation.",
  },
  {
    title: "Regular classes",
    description:
      "Fundamental Learning via rigorous & enriched classroom experience to develop child's curiosity, reasoning, and out-of-the-box thinking skills.",
  },
  {
    title: "Practice Modules",
    description:
      "Practice your way to perfection with these practice modules enriched with all concepts and knowledge.",
  },
  {
    title: "Doubt Discussion Sessions",
    description:
      "A mentor is assigned to every class which counsels and takes care of all of the student's problems & guides them for the best solution.",
  },
];

export default function Pedagogy() {
  return (
    <Container>
      <div className="p-20 text-black mx-auto px-4">
        <div className="mb-10 max-w-xl mx-auto text-center text-5xl font-bold text-red-700">
          Our Pedagogy
        </div>
        <PedagogyPara />
        <PedagogyCard PedagogyData={PedagogyData} />
        <center className="mt-10 text-white">
          <Button>View More Courses</Button>
        </center>
      </div>
    </Container>
  );
}
