import Link from 'next/link'
import React, { Children } from 'react'

export default function Button({children, link}) {
  return (
    <button className="block bg-red-600 h-fit m-3 my-auto rounded-t-xl rounded-bl-xl px-6 py-1.5 font-bold text-white" >
      {/* <Link href={link}>{children}</Link> */}
      <Link href={link}>{children}</Link>
          
        </button>
  )
}
