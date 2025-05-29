import React from "react";
import FeeTable from "./FeeTable";

const courseData = [
  {
    course: "Foundation – I",
    eligibility: "Class – VI-VIII Studying",
    fee: "25,000–30,000/ Year",
  },
  {
    course: "Foundation – II",
    eligibility: "Maths, Science",
    fee: "35,000 – 40,000/ Year",
  },
  {
    course: "Two Years Course",
    eligibility: "Class – XI Studying",
    fee: "1,75,000 for two years",
  },
  {
    course: "One Year Course",
    eligibility: "Class – XII Studying",
    fee: "90,000/Year",
  },
  {
    course: "One Year Course",
    eligibility: "Class – XII Passed",
    fee: "1,10,000/Year",
  },
];

export default function page() {
  return (
    <div className="mb-8 flex justify-center items-start">
      
      <div>
        <FeeTable data={courseData} index={1}>
          Courses for JEE Main &amp; Advance Cum CBSE &amp; NTSE / KVPY &amp; National / International Olympiads
        </FeeTable>
        <FeeTable data={courseData} index={2}>
          Classroom Courses for NEET- UG (Medical) Cum CBSE & NTSE / KVPY & National / International Olympiads
        </FeeTable>
        <FeeTable data={courseData} index={3}>
          Video Lectures Programme for NEET- UG (Medical) Cum CBSE & NTSE / KVPY & National / International Olympiads
        </FeeTable>
        <FeeTable data={courseData} index={4}>
          Distance Learning Programme for JEE Main & Advance Cum CBSE & NTSE / KVPY & National / International Olympiads
        </FeeTable>
      </div>
    </div>
  );
}
