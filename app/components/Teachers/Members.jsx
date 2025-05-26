import React from "react";

const logos = [
  {
    id: 1,
    platform: "facebook",
    link: "https://www.facebook.com",
    icon: "./images/Teachers/fb.svg",
  },
  {
    id: 2,
    platform: "twitter",
    link: "https://www.twitter.com",
    icon: "./images/Teachers/twitter.svg",
  },
  {
    id: 3,
    platform: "instagram",
    link: "https://www.instagram.com",
    icon: "./images/Teachers/instagram.svg",
  },
];

function Member({ teamMembers }) {
  return (
    <div className="mb-6 w-full md:w-1/2 lg:w-1/3 px-3 transition-discret  hover:scale-105 duration-300 ">
      <div className="pb-8 bg-[ededed] rounded-2xl shadow-2xl text-center">
        <img
          src={teamMembers.imageUrl}
          alt=""
          className="mb-8 w-full h-64 object-cover rounded-t-2xl"
        />
        <h4 className="mb-2 text-2xl font-bold font-heading">
          {teamMembers.name}
        </h4>
        <p className="text-gray-500">{teamMembers.role}</p>
        <div className="mt-2">
          {logos.map((item, i) => (
            <a
              key={i}
              href="#"
              className="inline-block w-10 mr-2 p-2 bg-red-500 hover:bg-red-600 rounded"
            >
              <img src={item.icon} className="mx-auto" />
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}

export default function Members({ teamMembers }) {
  return (
    <div className="flex flex-wrap">
      {teamMembers.map((item, i) => (
        <Member teamMembers={item} key={i} />
      ))}
    </div>
  );
}
