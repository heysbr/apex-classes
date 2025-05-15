import React from "react";

export default function Pedagogy() {
  return (
    <section className="text-black">
      <div className="py-20 bg-red-50 radius-for-skewed">
        <div className="container mx-auto px-4">
          <div className="mb-10 max-w-xl mx-auto text-center">
            <h2 className="text-5xl font-bold text-red-700">Our Pedagogy</h2>
          </div>{" "}
          <p className="text-white-400 leading-loose mb-6">
            Apex is a Poineer in revolutionizing the concept of comprehensive
            approach in IIT JEE and NEET coaching classNamees in Gujrat which
            enables the students to save time and efforts. This in turn enables
            students to achieve top ranks in National and international level
            competitive exams like JEE Main and Advance, KVPY, NEET, AIIMS and
            National &amp; International olypiads with our tried and tested
            methods. We are consistently producing the top results year after
            year.
          </p>{" "}
          <div className="flex flex-wrap -mx-4 -mb-8">
            <div className="w-full lg:w-1/2 px-4 mb-8">
              <div className="h-full p-8 bg-white rounded shadow-lg transform transition duration-500 hover:scale-105">
                <div className="mb-6 flex items-start">
                  <span className="mr-4 inline-block p-3 rounded-full bg-red-600">
                    <img src="./images/Pedagogy/svg1.svg" className="h-6 w-6"/>
                  </span>{" "}
                  <h3 className="text-xl font-bold">Academic Team</h3>
                </div>{" "}
                <p className="text-gray-400 leading-loose">
                  Best brains of India with umpteen experience and expertise to
                  guide you through all the levels of preparation.
                </p>
              </div>
            </div>{" "}
            <div className="w-full lg:w-1/2 px-4 mb-8">
              <div className="h-full p-8 bg-white rounded shadow-lg transform transition duration-500 hover:scale-105">
                <div className="mb-6 flex items-start">
                  <span className="mr-4 inline-block p-3 rounded-full bg-red-600">
                    <img src="./images/Pedagogy/svg1.svg" className="h-6 w-6"/>
                  </span>{" "}
                  <h3 className="text-xl font-bold">Regular classNamees</h3>
                </div>{" "}
                <p className="text-gray-400 leading-loose">
                  Fundamental Learning via rigorous &amp; enriched classNameroom
                  experience to develop child's curiosity, reasoning and out of
                  the box thinking skills.
                </p>
              </div>
            </div>{" "}
            <div className="w-full lg:w-1/2 px-4 mb-8">
              <div className="h-full p-8 bg-white rounded shadow-lg transform transition duration-500 hover:scale-105">
                <div className="mb-6 flex items-start">
                  <span className="mr-4 inline-block p-3 rounded-full bg-red-600">
                    <img src="./images/Pedagogy/svg1.svg" className="h-6 w-6"/>
                  </span>{" "}
                  <h3 className="text-xl font-bold">Practice Modules</h3>
                </div>{" "}
                <p className="text-gray-400 leading-loose">
                  Practice your way to perfection with these practice modules
                  enriched with all concepts and knowledge.
                </p>
              </div>
            </div>{" "}
            <div className="w-full lg:w-1/2 px-4 mb-8">
              <div className="h-full p-8 bg-white rounded shadow-lg transform transition duration-500 hover:scale-105">
                <div className="mb-6 flex items-start">
                  <span className="mr-4 inline-block p-3 rounded-full bg-red-600">
                    <img src="./images/Pedagogy/svg1.svg" className="h-6 w-6"/>
                  </span>{" "}
                  <h3 className="text-xl font-bold">
                    Doubt Discussion Sessions
                  </h3>
                </div>{" "}
                <p className="text-gray-400 leading-loose">
                  A mentor is assigned to every className which cousels and take
                  care of all of the student's problems &amp; guides them for
                  the best solution.
                </p>
              </div>
            </div>
          </div>{" "}
          <div className="justify-center items-center mt-4">
            <center>
              <a
                href="/pedagogy"
                className="inline-block py-2 px-6 rounded-l-xl rounded-t-xl bg-red-600 hover:bg-red-700 text-gray-50 font-bold leading-loose outline-none transition duration-200"
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
