import { title } from "process";
import React from "react";
const data = [
  "about-us",
  "directors-message",
  "mission-vision",
  "teaching-methodology",
  "achievement",
];

export default function TempNav() {
  return (
    <>
      <div className="flex">
        {data.map((title) => (
          <div>{title}</div>
        ))}
      </div>
    </>
  );
}
