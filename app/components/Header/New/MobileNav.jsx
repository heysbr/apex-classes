import { ChevronDown, ChevronUp } from 'lucide-react';
import Link from 'next/link';
import React, { useState } from 'react'
import MobMenu from './MobMenu';
import { Menus } from "./utils";

// const MenuData = {
//   Home: [],
//   About: [
//     { label: "About Us", link: "/about/about-us" },
//     { label: "Director's Message", link: "/about/directors-message" },
//     { label: "Mission & Vision", link: "/about/mission-vision" },
//     { label: "Teaching Methodology", link: "/about/teaching-methodology" },
//     { label: "Achievement", link: "/about/achievement" },
//   ],
//   Courses: [
//     { label: "One Year Courses", link: "/courses/one-year" },
//     { label: "Two Year Courses", link: "/courses/two-year" },
//     { label: "Pre-Medical", link: "/courses/pre-medical" },
//     { label: "Foundation", link: "/courses/foundation" },
//     { label: "Online Course/LIVE", link: "/courses/online-live" },
//     { label: "Distance Learning Program (DLP)", link: "/courses/dlp" },
//   ],
//   Admission: [
//     { label: "Apply Online", link: "/admission/apply-online" },
//     { label: "Admission Procedure", link: "/admission/procedure" },
//     { label: "Term & Condition Policy", link: "/admission/terms-conditions" },
//     { label: "Time Table", link: "/admission/time-table" },
//   ],
//   Student: [
//     { label: "Students Gallery", link: "/student/gallery" },
//     { label: "Fee Details", link: "/student/fee-details" },
//     { label: "Privacy Policy", link: "/student/privacy-policy" },
//     { label: "FAQs", link: "/student/faqs" },
//     { label: "Time Table", link: "/student/time-table" },
//   ],
// };



export default function MobileNav({active}) {
if(active)  return   
else <></>
}





function Nav(){

    const [toggleMenu, setToggleMenu] = useState(false)
    const [subMenu, setSubMenu] = useState(0)

    return( <>
      <div className="flex flex-col flex-nowrap gap-4 text-xl m-2 bg-white ">
        {Object.keys(MenuData).map((key) => (
          <div key={key} className="justify-items-end">
            {/* Menu Button */}
            <Link
              className="flex flex-row text-shadow-black py-2 mx-2 px-4 rounded-xl hover:bg-red-400 hover:text-white gap-5"
              href={key === "Home" ? "/" : ""}
            >
              {key} 
              {toggleMenu? <ChevronDown className='bg-red-400 hover:bg-slate-800 rounded-md p-1' onClick={()=>setToggleMenu(!toggleMenu)}/>:<ChevronUp className='bg-red-400 hover:bg-slate-800 p-1 rounded-md' onClick={()=>setToggleMenu(!toggleMenu)} />}
            </Link>

            {/* Dropdown Menu */}
            {MenuData[key].length > 0 && (
              <div className=" mt-1 w-60  group-hover:block bg-white border border-gray-200 rounded-md shadow-lg">
                <ul>
                  {MenuData[key].map((option, index) => (
                    <li key={index}>
                      <Link
                        href={option.link}
                        className="block px-4 py-2 text-gray-800 hover:bg-red-600 hover:text-white"
                      >
                        {option.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        ))}
      </div>    
    </>
    )
}