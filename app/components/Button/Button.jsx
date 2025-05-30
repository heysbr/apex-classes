import React, { Children } from 'react'

export default function Button({children}) {
  return (
    <button className="hidden md:block bg-red-600  rounded-t-xl rounded-bl-xl px-6 py-1.5 font-bold text-white">
          {children}
        </button>
  )
}
