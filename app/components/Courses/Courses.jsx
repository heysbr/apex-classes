import React from "react";

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
            <div className="mb-8 lg:mb-0 w-full lg:w-1/3 px-4">
              <div className="py-12 px-6 bg-white rounded shadow-lg text-center transform transition duration-500 hover:scale-105">
                <span className="mb-6 inline-block p-2 rounded-lg bg-red-100">
                   <img src="./images/WelcomeSection/svg1.svg" />
                </span>
                <h3 className="px-8 mb-4 text-2xl font-bold font-heading text-black">
                  IIT / JEE
                </h3>
                <p className="text-gray-500">
                  Apex Institute give you an excellence in the coaching for
                  three elementary subjects i.e. Physics, Chemistry and
                  Mathematics This course includes Theory classNamees to cover the
                  complete syllabus.
                </p>
              </div>
            </div>{" "}
            <div className="w-full lg:w-1/3 px-4">
              <div className="py-12 px-6 bg-white rounded shadow-lg text-center transform transition duration-500 hover:scale-105">
                <span className="mb-6 inline-block p-2 rounded bg-red-100">
                   <img src="./images/WelcomeSection/svg2.svg" />
                </span>{" "}
                <h3 className="px-8 mb-4 text-2xl font-bold font-heading text-black">
                  JEE Main
                </h3>{" "}
                <p className="text-gray-500">
                  This course is specially designed for className 12th pass students
                  for giving a platform to prepare for JEE Main in a systematic
                  manner. This course includes Theory classNamees to cover the
                  complete syllabus.
                </p>
              </div>
            </div>{" "}
            <div className="mb-8 lg:mb-0 w-full lg:w-1/3 px-4">
              <div className="py-12 px-6 bg-white rounded shadow-lg text-center transform transition duration-500 hover:scale-105">
                <span className="mb-6 inline-block p-2 rounded-lg bg-red-100">
                   <img src="./images/WelcomeSection/svg3.svg" />
                </span>{" "}
                <h3 className="px-8 mb-4 text-2xl font-bold font-heading text-black">NEET</h3>{" "}
                <p className="text-gray-500">
                  Apex Institute give you a place to get ready for Pre Medical
                  Test, NEET Exam. With the change in the pattern Medical exams
                  our faculty has already adapted themselves to meet the
                  expectations of thousands of students.
                </p>
              </div>
            </div>
          </div>{" "}
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
