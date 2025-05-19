import React from 'react'

const logos=
  {
    fb:"./images/Teachers/fb.svg",
    twitter:"./images/Teachers/twitter.svg",
    instagram:"./images/Teachers/instagram.svg"
  }


export default function Member({teamMembers}) {
  return (
    <div className="mb-6 w-full md:w-1/2 lg:w-1/3 px-3 hover:rotate-y-180 duration-1300 ease-in-out">
              <div className="pb-8 bg-white rounded shadow text-center overflow-hidden">
                <img src={teamMembers.imageUrl} alt="" className="mb-8 w-full h-64 object-cover" />
                <h4 className="mb-2 text-2xl font-bold font-heading">
                  {teamMembers.name}
                </h4>
                <p className="text-gray-500">{teamMembers.role}</p>
                <div className="mt-2">
                  <a
                    href="#"
                    className="inline-block w-10 mr-2 p-2 bg-red-500 hover:bg-red-600 rounded"
                  >
                   <img src={logos.fb} className="mx-auto" />
                  </a>
                  <a
                    href="#"
                    className="inline-block w-10 mr-2 p-2 bg-red-500 hover:bg-red-600 rounded"
                  >
                    <img
                      src={logos.instagram}
                      className="mx-auto"
                    />
                  </a>
                  <a
                    href="#"
                    className="inline-block w-10 p-2 bg-red-500 hover:bg-red-600 rounded"
                  >
                    <img src={logos.twitter} className="mx-auto" />
                  </a>
                </div>
              </div>
            </div>
  )
}
