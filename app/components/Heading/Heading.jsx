import React from "react";

export default function Heading({children}) {
  return (
    <h2 className="my-2 text-4xl lg:text-5xl font-bold font-heading">
      
      {children}
    </h2>
  );
}
