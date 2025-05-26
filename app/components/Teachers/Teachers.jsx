import React from "react";
import Members from "./Members";

const teamMembers = [
  {
    name: "Ian Brown",
    role: "Head of Development",
    imageUrl:
      "https://images.unsplash.com/photo-1559548331-f9cb98001426?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
  },
  {
    name: "Daisy Carter",
    role: "Product Development",
    imageUrl:
      "https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
  },
  {
    name: "Dennis Robertson",
    role: "Frontend Developer",
    imageUrl:
      "https://images.unsplash.com/photo-1600486913747-55e5470d6f40?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=600&q=80",
  },
  {
    name: "Alice Bradley",
    role: "Backend Developer",
    imageUrl:
      "https://images.unsplash.com/photo-1484588168347-9d835bb09939?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
  },
  {
    name: "Sahra Ortiz",
    role: "Product Designer",
    imageUrl:
      "https://images.unsplash.com/photo-1604072366595-e75dc92d6bdc?ixid=MXwxMjA3fDB8MHxwcm9maWxlLXBhZ2V8MTB8fHxlbnwwfHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=600",
  },
  {
    name: "Danny Bailey",
    role: "CEO",
    imageUrl:
      "https://images.unsplash.com/photo-1580852300654-03c803a14e24?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
  },
];

export default function Teachers() {
  return (
    <section className="bg-white">
      <div className="py-20 text-black">
        <div className="px-10 mx-auto">
          <div className="mb-12 text-center">
            <span className="text-red-600 font-bold">
              Dolor sit amet consectutar
            </span>
            <h2 className="text-4xl lg:text-5xl font-bold font-heading">
              Our Teachers
            </h2>
          </div>
          <Members teamMembers={teamMembers} />
        </div>
      </div>
    </section>
  );
}
