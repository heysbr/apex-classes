import React from "react";
import ApexPara from "../../../app/components/Paragraphs/ApexPara";
import Button from "../Button/Button";


export default function Slides() {
  return (
    <div
      className="w-full bg-cover "
      style={{ backgroundImage: "url('./images/carousel/carousel.jpg')" }}
    >
      <div className="backdrop-brightness-[35%] h-screen content-center ">
        <div className="text-center text-shadow-lg/30">

              <h2 className="text-3xl mb-4 mt-12 text-shadow-white font-bold font-heading ">
                  <span className="text-red-600 text-8xl">APEX</span>
              </h2>
              <ApexPara/>
              {/* <a href="#" className="block sm:inline-block py-4 px-10 mx-8 mt-5 text-lg text-white font-semibold leading-none rounded border-4 border-red-600 bg-red-600 hover:bg-transparent hover:border-4 hover:border-red-700 place-self-end">
                Join Us
              </a> */}
              <Button>Join Us</Button>
        </div>
      </div>
    </div>
  );
}