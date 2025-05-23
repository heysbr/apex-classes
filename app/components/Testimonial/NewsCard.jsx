import React from "react";

export default function NewsCard() {
  return (
    <section>
      <h3 className="text-3xl font-bold mb-6 text-red-700">
        Apex Education News
      </h3>
      <div className="flex flex-wrap -mx-3 mb-8 lg:mb-6 py-10 hover:border border-red-600 hover:rounded-3xl hover:shadow-xl duration-400 rounded-3xl">
        <div className="mb-4 lg:mb-0 w-full lg:w-1/4 px-3">
          <img
            src="https://images.unsplash.com/photo-1552338804-c42590cb7b88?ixlib=rb-1.2.1&amp;ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&amp;auto=format&amp;fit=crop&amp;w=1189&amp;q=80"
            alt=""
            className="w-full h-full object-cover rounded"
          />
        </div>
        <div className="w-full lg:w-3/4 px-3">
          <a>
            <h3 className="mb-1 text-2xl font-bold font-heading">
              Apex News Title
            </h3>
          </a>
          <div className="mb-2 flex items-center text-sm">
            <a href="#" className="text-red-600 hover:text-red-700">
              John Doe
            </a>
            <span className="text-gray-400 mx-2">•</span>
            <span className="text-gray-400">24 Jan, 2021</span>
          </div>
          <p className="text-gray-500">
            Quisque id sagittis turpis. Nulla sollicitudin rutrum eros eu
            dictum...
          </p>
        </div>
      </div>
    </section>
  );
}
