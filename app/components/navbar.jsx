import Image from 'next/image'
import React from 'react'

export default function NavBar() {
  return (
    <div className='flex justify-between items-center h-[70px] bg-white px-[30px]'>

        <div> <img className="h-12 my-auto rounded-xl " src="/images/apexlogo.svg" alt="Logo" /></div>
        <div className=' text-black'>Menu bar</div>
        <div>
            <button className='bg-red-600 rounded-xl px-6 py-1.5 font-bold'>Help Desk</button>
        </div>
       

    </div>
  )
}
