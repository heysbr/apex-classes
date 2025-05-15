import React from "react";

export default function Query() {
  return (
    <section className="py-10 bg-red-50 text-black">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap items-center justify-center -mx-4">
          <div className="mb-16 lg:mb-0 max-w-2xl lg:w-1/2 px-4">
            <h2 className="mb-4 text-4xl md:text-5xl font-bold font-heading">
              Apex Educations
            </h2>{" "}
            <p className="mb-8 text-gray-500 leading-loose">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Pellentesque efficitur nisl sodales egestas lobortis.
            </p>{" "}
            <a
              href="#"
              className="inline-block py-2 px-6 bg-red-600 hover:bg-red-700 text-white font-bold leading-loose transition duration-250 rounded-l-xl rounded-t-xl"
            >
              Get Started
            </a>
          </div>{" "}
          <div className="w-full lg:w-1/2 px-4">
            <div className="max-w-sm mx-auto lg:mr-0 lg:ml-auto">
              <div className="mb-6 py-8 px-6 bg-white shadow rounded-t-3xl rounded-bl-3xl text-center">
                <form action="">
                  <div className="mb-6">
                    <span className="text-sm text-gray-400">Sign Up</span>{" "}
                    <h4 className="text-2xl">Create an account</h4>
                  </div>{" "}
                  <div className="mb-4 flex flex-wrap -mx-2">
                    <div className="mb-4 lg:mb-0 w-full lg:w-1/2 px-2">
                      <input
                        placeholder="First Name"
                        className="py-2 px-3 w-full bg-gray-50 rounded leading-loose"
                      />
                    </div>{" "}
                    <div className="w-full lg:w-1/2 px-2">
                      <input
                        placeholder="Last Name"
                        className="py-2 px-3 w-full bg-gray-50 rounded leading-loose"
                      />
                    </div>
                  </div>{" "}
                  <input
                    type="email"
                    placeholder="hello@example.com"
                    className="mb-4 py-2 px-3 w-full bg-gray-50 rounded leading-loose"
                  />{" "}
                  <input
                    type="password"
                    placeholder="Enter your password"
                    className="mb-6 py-2 px-3 w-full bg-gray-50 rounded leading-loose"
                  />{" "}
                  <button className="mb-4 py-4 w-full rounded text-sm bg-red-600 hover:bg-red-700 text-white font-bold leading-normal transition duration-200">
                    Sign Up
                  </button>
                </form>{" "}
                <p className="text-xs text-gray-400">
                  <span>Already have an account?</span>{" "}
                  <a href="#" className="text-red-500">
                    Sign In
                  </a>
                </p>
              </div>{" "}
              <p className="text-center text-gray-400">
                <a href="#" className="text-red-600 hover:text-red-700">
                  Police privacy
                </a>{" "}
                <span>and</span>{" "}
                <a href="#" className="text-red-600 hover:text-red-700">
                  Terms of Use
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
