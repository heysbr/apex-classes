import React from 'react'

export default function CoursesCard({courses}) {
  return (
    <div className="flex flex-wrap -mx-4">
            {courses.map((course) => (
              <div
                key={course.id}
                className="mb-8 lg:mb-0 w-full lg:w-1/3 px-4 "
              >
                <div className="p-6 bg-white rounded-xl shadow-lg text-center transform transition duration-500 hover:scale-105">
                  <span className="mb-6 inline-block p-2 rounded-xl">
                    <img
                      src={course.imgSrc}
                      alt="Picture of the author"
                      className="rounded-xl"
                    />
                  </span>
                  <h3 className="px-8 mb-4 text-2xl font-bold font-heading text-black">
                    {course.title}
                  </h3>
                  <p className="text-gray-500">{course.description}</p>
                </div>
              </div>
            ))}
          </div>
  )
}
