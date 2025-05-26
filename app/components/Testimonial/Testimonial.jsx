import React from "react";
import StudentCard from "./StudentCard";
import NewsCard from "./NewsCard";

export default function Testimonial() {
  return (
    <section className="bg-white">
      <div className="py-20  container mx-auto text-black px-4">
        <div className="flex flex-wrap items-center">
          <div className="w-full lg:w-1/2 mb-12 lg:mb-0">
            {/* What Our Students Say */}
            <div>
              <h3 className="text-3xl font-bold mb-6 text-red-700">
                What Our Students Say
              </h3>
              <StudentCard />
            </div>
          </div>
          <div className="w-full lg:w-1/2 flex flex-wrap ">
            {/* News Section */}
            <NewsCard />
            <NewsCard />
          </div>
        </div>
      </div>
    </section>
  );
}
