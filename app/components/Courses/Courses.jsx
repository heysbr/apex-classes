import React from "react";

const courses = [
  {
    id: 1,
    imgSrc: "./images/WelcomeSection/svg4.svg",
    title: "IIT / JEE",
    description:
      "Apex Institute gives you excellence in coaching for three elementary subjects i.e. Physics, Chemistry, and Mathematics. This course includes theory classes to cover the complete syllabus.",
  },
  {
    id: 2,
    imgSrc: "./images/WelcomeSection/svg2.svg",
    title: "JEE Main",
    description:
      "This course is specially designed for class 12th pass students, providing a platform to prepare for JEE Main in a systematic manner. This course includes theory classes to cover the complete syllabus.",
  },
  {
    id: 3,
    imgSrc: "./images/WelcomeSection/svg3.svg",
    title: "NEET",
    description:
      "Apex Institute provides a place to prepare for the Pre-Medical Test, NEET Exam. With changes in the exam pattern, our faculty has adapted to meet the expectations of thousands of Indian students.",
  },
];


export default function Courses() {
  return (
    <section >
      <div className="py-20 bg-red-50 radius-for-skewed">
        <div className="container mx-auto px-4">
          <div className="mb-16 max-w-md mx-auto text-center">
            <h2 className="text-4xl lg:text-5xl font-bold font-heading text-red-700">
              Popular Courses
            </h2>
          </div>{" "}
          <div className="flex flex-wrap -mx-4">
  {courses.map((course) => (
    <div key={course.id} className="mb-8 lg:mb-0 w-full lg:w-1/3 px-4 ">
      <div className="p-6 bg-white rounded shadow-lg text-center transform transition duration-500 hover:scale-105">
        <span className="mb-6 inline-block p-2 rounded-xl bg-red-100">
          <img src={course.imgSrc} alt={course.title} className="w-1/2 mx-auto" />
        </span>
        <h3 className="px-8 mb-4 text-2xl font-bold font-heading text-black">
          {course.title}
        </h3>
        <p className="text-gray-500">{course.description}</p>
      </div>
    </div>
  ))}
</div>

          <div className="justify-center mt-4">
            <center>
              <a
                href="/"
                aria-current="page"
                className="inline-block py-2 px-6 rounded-l-xl rounded-t-xl bg-red-600 hover:bg-red-700 text-gray-50 font-bold leading-loose outline-none transition duration-200 nuxt-link-exact-active nuxt-link-active"
              >
                View More Courses
              </a>
            </center>
          </div>
        </div>
      </div>
    </section>
  );
}
