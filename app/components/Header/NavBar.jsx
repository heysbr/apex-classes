import Image from 'next/image'
import React from 'react'
import MenuBar from './MenuBar'

export default function NavBar() {
  return (
    <div className='flex justify-between items-center h-[70px] bg-white px-[30px]'>

        <div> <img className="h-12 my-auto rounded-xs " src="./images/apexlogo.svg" alt="Logo" /></div>
        <div className=' text-black'><MenuBar/></div>
        <div>
            <button className='hidden md:block bg-red-600  rounded-t-xl rounded-bl-xl px-6 py-1.5 font-bold'>Help Desk</button>
        </div>
       

    </div>
  )
}
