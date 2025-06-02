import Image from "next/image";
import React from "react";
import Container from "../layout/Container";
import CoursesCard from "./CoursesCard";
import Button from "../Button/Button";

const courses = [
  {
    id: 1,
    imgSrc:
      "https://images.pexels.com/photos/8197534/pexels-photo-8197534.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    title: "IIT / JEE",
    description:
      "Apex Institute gives you excellence in coaching for three elementary subjects i.e. Physics, Chemistry, and Mathematics. This course includes theory classes to cover the complete syllabus.",
  },
  {
    id: 2,
    imgSrc:
      "https://images.pexels.com/photos/1595385/pexels-photo-1595385.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    title: "JEE Main",
    description:
      "This course is specially designed for class 12th pass students, providing a platform to prepare for JEE Main in a systematic manner. This course includes theory classes to cover the complete syllabus.",
  },
  {
    id: 3,
    imgSrc:
      "https://images.pexels.com/photos/6129507/pexels-photo-6129507.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    title: "NEET",
    description:
      "Apex Institute provides a place to prepare for the Pre-Medical Test, NEET Exam. With changes in the exam pattern, our faculty has adapted to meet the expectations of thousands of Indian students.",
  },
];

export default function Courses() {
  return (
    <Container>
      <div className="py-15">
        <div >
          <div className="mb-10 text-center text-4xl lg:text-5xl font-bold text-red-700">
              Popular Courses
          </div>
          <CoursesCard courses={courses}/>  
          <div className="justify-center mt-4">
            <center className="mt-8">
              <Button link={"/courses/one-year"}>View More Courses</Button>
            </center>
          </div>
        </div>
      </div>
    </Container>
  );
}
