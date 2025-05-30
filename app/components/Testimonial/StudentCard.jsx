import React from "react";
import comma from "../Assests/images/Testimonial/svg1.svg"
import Image from "next/image";

export default function StudentCard() {
  return (
    <div className="py-10 radius-for-skewed">
      <div className="container mx-auto px-2">
        <div className="max-w-6xl p-4 flex flex-wrap justify-center items-center">
          <div className="w-full pr-4  p-4 hover:border border-red-600 hover:rounded-3xl hover:shadow-xl duration-400 rounded-3xl ">
            <Image
              src={comma}
              className="mb-4 text-red-600 h-10"
              alt="comma"
              
               style={{ width: '50px', height: '50px' }} 
            />
            <h3 className="mb-6 text-2xl lg:text-2xl">
              Maecenas nibh purus, pharetra ac felis sed, elementum molestie
              urna. Nunc at arcu non ipsum.
            </h3>{" "}
            <div className="flex flex-1">
              <div className="mb-6 w-full lg:w-1/3 text-center flex">
                <img
                  src="https://images.unsplash.com/photo-1564564321837-a57b7070ac4f?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&amp;ixlib=rb-1.2.1&amp;auto=format&amp;fit=crop&amp;w=1055&amp;q=80"
                  alt=""
                  className="mb-6 mx-auto w-10 h-10 rounded-full object-cover"
                />{" "}
                <span className="flex-wrap">
                  <h4 className="text-md ml-2 flex-none text-black">
                    Ian Brown
                  </h4>{" "}
                  <p className="text-red-600 flex-none">Head of Development</p>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
