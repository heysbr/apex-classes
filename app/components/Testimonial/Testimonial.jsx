import React from "react";

export default function Testimonial() {
  return (
    <section>
      <div className="py-20 radius-for-skewed bg-white  text-black">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap items-center">
            <div className="w-full lg:w-1/2 mb-12 lg:mb-0">
              <section>
                <h3 className="text-3xl font-bold mb-6 text-red-700">
                  What Our Students Say
                </h3>{" "}
                <div className="py-10 radius-for-skewed">
                  <div className="container mx-auto px-2">
                    <div className="max-w-6xl p-4 flex flex-wrap justify-center items-center">
                      <div className="w-full pr-4">
                        <img src="./images/Testimonial/svg1.svg" className="mb-4 text-red-600 h-10"/>
                        <h3 className="mb-6 bg-gray-50 text-2xl lg:text-2xl">
                          Maecenas nibh purus, pharetra ac felis sed, elementum
                          molestie urna. Nunc at arcu non ipsum.
                        </h3>{" "}
                        <div className="flex flex-1">
                          <div className="mb-6 w-full lg:w-1/3 text-center flex">
                            <img
                              src="https://images.unsplash.com/photo-1564564321837-a57b7070ac4f?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&amp;ixlib=rb-1.2.1&amp;auto=format&amp;fit=crop&amp;w=1055&amp;q=80"
                              alt=""
                              className="mb-6 mx-auto w-10 h-10 rounded-full object-cover"
                            />{" "}
                            <span className="flex-wrap">
                              <h4 className="text-md ml-2 flex-none text-black">Ian Brown</h4>{" "}
                              <p className="text-red-600 flex-none">
                                Head of Development
                              </p>
                            </span>
                          </div>
                          <div className="ml-6">
                            <button className="mr-1 bg-gray-200 rounded-full p-1"></button>{" "}
                            <button className="mr-1 bg-gray-200 rounded-full p-1"></button>{" "}
                            <button className="mr-1 bg-red-600 rounded-full p-1"></button>{" "}
                            <button className="bg-gray-200 rounded-full p-1"></button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
            </div>
            <div className="w-full lg:w-1/2 flex flex-wrap ">
              <section>
                <h3 className="text-3xl font-bold mb-6 text-red-700">
                  Apex Education News
                </h3>
                <div className="flex flex-wrap -mx-3 mb-8 lg:mb-6 py-10">
                  <div className="mb-4 lg:mb-0 w-full lg:w-1/4 px-3">
                    <img
                      src="https://images.unsplash.com/photo-1552338804-c42590cb7b88?ixlib=rb-1.2.1&amp;ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&amp;auto=format&amp;fit=crop&amp;w=1189&amp;q=80"
                      alt=""
                      className="w-full h-full object-cover rounded"
                    />
                  </div>
                  <div className="w-full lg:w-3/4 px-3">
                    <a href="#" className="hover:underline">
                      <h3 className="mb-1 text-2xl font-bold font-heading">
                        Apex News Title
                      </h3>
                    </a>
                    <div className="mb-2 flex items-center text-sm">
                      <a
                        href="#"
                        className="text-red-600 hover:underline hover:text-red-700"
                      >
                        John Doe
                      </a>
                      <span className="text-gray-400 mx-2">•</span>
                      <span className="text-gray-400">24 Jan, 2021</span>
                    </div>
                    <p className="text-gray-500">
                      Quisque id sagittis turpis. Nulla sollicitudin rutrum eros
                      eu dictum...
                    </p>
                  </div>
                </div>
                <div className="flex flex-wrap -mx-3 mb-8 lg:mb-6">
                  <div className="mb-4 lg:mb-0 w-full lg:w-1/4 px-3">
                    <img
                      src="https://images.unsplash.com/photo-1552338804-c42590cb7b88?ixlib=rb-1.2.1&amp;ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&amp;auto=format&amp;fit=crop&amp;w=1189&amp;q=80"
                      alt=""
                      className="w-full h-full object-cover rounded"
                    />
                  </div>
                  <div className="w-full lg:w-3/4 px-3">
                    <a href="#" className="hover:underline">
                      <h3 className="mb-1 text-2xl font-bold font-heading">
                        Apex News Title
                      </h3>
                    </a>
                    <div className="mb-2 flex items-center text-sm">
                      <a
                        href="#"
                        className="text-red-600 hover:underline hover:text-red-700"
                      >
                        John Doe
                      </a>
                      <span className="text-gray-400 mx-2">•</span>
                      <span className="text-gray-400">24 Jan, 2021</span>
                    </div>
                    <p className="text-gray-500">
                      Quisque id sagittis turpis. Nulla sollicitudin rutrum eros
                      eu dictum...
                    </p>
                  </div>
                </div>
              </section>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
