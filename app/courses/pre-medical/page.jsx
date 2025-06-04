import React from "react";
import List from "../one-year/List";

const NeetData = [
  {
    description:
      "The admission to thirteen All India Institute of Medical Sciences (AIIMS) is taken through the AIIMS MBBS entrance exam.",
  },
  {
    description:
      "AIIMS, New Delhi is the responsible body for holding the admission process each year.",
  },
  {
    description:
      "The entire form filling procedure has been revised by AIIMS. It will be a two-stage process comprising of Basic Registration and Registration.",
  },
  {
    description:
      "The entrance exam of AIIMS MBBS is held across four different shifts fora duration of 3 hours and 30 minutes.",
  },
  { description: "The mode of conduct of AIIMS MBBS exam is online." },
  {
    description:
      "The candidates qualifying the exam will be called to participate in the AIIMS MBBS counselling process.",
  },
  {
    description:
      "The admission will be taken on the basis of the merit score of the candidates and the preferences submitted by the candidates at the time of counselling.",
  },
  { description: "AIIMS result is announced in the month of June." },
];

const AimsData = [
  { description: "NEET is a single-stage exam." },
  {
    description:
      "Conducted by CBSE for admission to graduate medical courses (MBBS), dental courses (BDS), or postgraduate courses (MD/MS) in government or private colleges in India.",
  },
  {
    description:
      "Institutes which are outside the purview of NEET are AIIMS (New Delhi) and JIPMER, Pondicherry.",
  },
  {
    description:
      "The paper consists of 180 questions: 45 from Physics, 45 from Chemistry, and 90 from Biology (Botany & Zoology).",
  },
  { description: "Duration of the paper is 3 hours." },
  { description: "NEET is held every year in the month of May." },
  { description: "For more details, kindly visit http://cbseneet.nic.in." },
];

export default function Page() {
  return (
    <section className="container mx-auto">
      <div className="m-2 lg:mb-18">
        <h2 className="text-3xl lg:text-4xl text-red-500 font-bold font-heading text-center mx-auto mt-10 mb-5">
          Pre Medical Year Course
        </h2>
        <div className="overflow-hidden rounded-xl shadow-2xl bg-white p-10 border border-gray-200">
          <h3 className="text-2xl leading-8 font-extrabold sm:text-3xl sm:leading-9 mb-4 ">
            NEET/AIIMS
          </h3>
          <List data={NeetData}>NEET</List>
          <List data={AimsData}>AIMS</List>
        </div>
      </div>
    </section>
  );
}
