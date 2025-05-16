import React from "react";

export default function Slides() {
  return (
    <div className="h-full w-full bg-cover  bg-[url('/images/carousel/carousel.jpg')]" >
      <div className="backdrop-brightness-[35%] h-full w-full text-[20vh] content-center text-center  text-white ">

      <div className="mx-12 text-shadow-lg/30">
        <div>
          <div>
            <h2 className="text-3xl mb-4 mt-12 text-shadow-white font-bold font-heading">
              <span>Welcome to</span>
              <br />
              <div className="flex">
                <span className="text-red-600 text-8xl">APEX</span>
              </div>
            </h2>
            <p className="text-shadow-white text-2xl w-1/2">
              Apex Education is an educational Institute founded with a sole
              motto of propagating quality education for the students those who
              are seeking career in engineering /medical entrance examination.
            </p>
          </div>
          <div>
            <a
              href="#"
              className="block sm:inline-block py-4 px-8  mt-5 sm:mb-0 sm:mr-3 text-xs text-white text-center font-semibold leading-none bg-red-600 hover:bg-red-700 rounded"
            >
              Join Us
            </a>
          </div>
        </div>
      
      </div>
      </div>
    </div>
  );
}
