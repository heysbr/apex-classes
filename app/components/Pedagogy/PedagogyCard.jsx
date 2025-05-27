import React from 'react'

export default function PedagogyCard({PedagogyData}) {
  return (
    <div className="flex flex-wrap -mx-4 -mb-8">
          {PedagogyData.map((item) => (
            <div key={item.title} className="w-full lg:w-1/2 px-4 mb-8">
              <div className="h-full p-8 bg-white rounded-2xl shadow-lg transform transition duration-500 hover:scale-105">
                <div className="mb-6 flex items-start">
                  <span className="mr-4 inline-block p-3 rounded-full bg-red-600">
                    <img src="./images/Pedagogy/svg1.svg" className="h-6 w-6" />
                  </span>
                  <h3 className="text-xl font-bold">{item.title}</h3>
                </div>
                <p className="text-gray-400 leading-loose">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
  )
}
