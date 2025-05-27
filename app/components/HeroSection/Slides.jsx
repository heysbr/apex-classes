import React from "react";
import ApexPara from "../About/ApexPara";
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
          <ApexPara />
          <center>
            <Button>Join Us</Button>
          </center>
        </div>
      </div>
    </div>
  );
}
