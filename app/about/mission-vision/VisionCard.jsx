import { SendHorizontal } from "lucide-react";
import React from "react";

export default function VisionCard({ data }) {
  return (
    <>
      {data.map((item) => (
        <div key={item.id}>
          <div className="flex flex-row items-center mb-2">
            <SendHorizontal className=" mr-2.5" />
            <h3 className="mb-0 text-xl lg:text-2xl font-bold  self-center">
              {item.title}
            </h3>
          </div>

          <div>
            <p className="text-gray-500 leading-loose text-justify mb-6">
              {item.desc}
            </p>
          </div>
        </div>
      ))}
    </>
  );
}
