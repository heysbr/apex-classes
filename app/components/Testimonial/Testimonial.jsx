import React from "react";
import StudentCard from "./StudentCard";
import NewsCard from "./NewsCard";

export default function Testimonial() {
  return (
    <section>
      <div className="py-20 radius-for-skewed bg-white  text-black">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap items-center">
            <div className="w-full lg:w-1/2 mb-12 lg:mb-0">
            {/* What Our Students Say */}
              <section>
                <h3 className="text-3xl font-bold mb-6 text-red-700">
                  What Our Students Say
                </h3>
                <StudentCard/>
              </section>
            </div>
            <div className="w-full lg:w-1/2 flex flex-wrap ">
            {/* News Section */}
              <NewsCard/>
              <NewsCard/>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
