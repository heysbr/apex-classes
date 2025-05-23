import React from "react";
import PedagogyPara from "../Paragraphs/PedagogyPara";
import Button from "../Button/Button";


const PedagogyData= [
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

const icon = "./images/Pedagogy/svg1.svg";

export default function Pedagogy() {
  return (
    <section className="text-black">
      <div className="py-20 bg-red-50 radius-for-skewed">
        <div className="container mx-auto px-4">
          <div className="mb-10 max-w-xl mx-auto text-center">
            <h2 className="text-5xl font-bold text-red-700">Our Pedagogy</h2>
          </div>{" "}
          <PedagogyPara/>
          <div className="flex flex-wrap -mx-4 -mb-8">
            {
              PedagogyData.map((item)=>(<div className="w-full lg:w-1/2 px-4 mb-8">
              <div className="h-full p-8 bg-white rounded shadow-lg transform transition duration-500 hover:scale-105">
                <div className="mb-6 flex items-start">
                  <span className="mr-4 inline-block p-3 rounded-full bg-red-600">
                    <img src="./images/Pedagogy/svg1.svg" className="h-6 w-6"/>
                  </span>{" "}
                  <h3 className="text-xl font-bold">{item.title}</h3>
                </div>
                <p className="text-gray-400 leading-loose">
                  {item.description}
                </p>
              </div>
            </div>))
            }
          </div>

          <div className="justify-center items-center mt-4">
            <center>
              <Button>View More Courses</Button>
            </center>
          </div>
        </div>
      </div>
    </section>
  );
}
