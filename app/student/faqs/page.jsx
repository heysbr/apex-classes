import React from "react";

const faqs = [
  {
    question: "What is a home energy rating?",
    answer:
      "A home energy rating is an estimated calculation into a homes potential energy usage, which will determine the amount of heating and cooling required to make its occupants comfortable. It produces a star rating dependant on the amount of heating and cooling loads which will be required, from 0 to 10 stars.",
  },
  {
    question: "Why do I need a 6 Star energy rating?",
    answer:
      "In most Australian states the government requires that all new homes and apartments (along with certain types of building extensions) built since 2010 be energy rated and achieve a minimum of 6 Stars.",
  },
  {
    question: "What is the general cost of an energy rating?",
    answer:
      "Simple energy rating prices vary greatly on the size and type of building, generally an energy rating will cost somewhere between $130 to $700+.",
  },
  {
    question:
      "What information do I need to supply for an energy rating to be completed?",
    answer:
      "The information required to complete a full and comprehensive energy report are the following final working drawings: Site Plan, Floor Plan, Elevations, Sections, Lighting layout and window schedule (including sizes of the existing windows).",
  },
  {
    question: "Does building an extension need an energy rating?",
    answer:
      "Depended on the size of the extension you are building there is a chance that it too will need to be energy rated. It's always best to check first before going ahead with construction.",
  },
  {
    question: "What is the general cost of an energy rating?",
    answer:
      "Depended on the size of the extension you are building there is a chance that it too will need to be energy rated. It's always best to check first before going ahead with construction.",
  },
];

export default function page() {
  return (
    <div className="max-w-screen-xl mx-auto p-8">
      <h2 className="text-4xl font-extrabold leading-9 mt-10  text-center border-b-2 border-gray-100 text-gray-900 pb-4 mb-8">
        FAQs
      </h2>{" "}
      <ul className="flex items-start gap-8 flex-wrap">
        {faqs.map((item,i)=><FaqsBullets data={item} key={i}/>)}
      </ul>
    </div>
  );
}

function FaqsBullets({ data }) {
  return (
    <li className="w-full">
      <p className="text-lg font-bold leading-6 text-gray-900">
        {data.question}
      </p>
      <div className="mt-2">
        <p className="text-base leading-6 text-gray-500">{data.answer}</p>
      </div>
    </li>
  );
}
