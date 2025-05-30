"use client";
import Link from "next/link";
import React from "react";
import { useState } from "react";

const About=[
    { label: "About Us", link: "/about/about-us" },
    { label: "Director's Message", link: "/about/directors-message" },
    { label: "Mission & Vision", link: "/about/mission-vision" },
    { label: "Teaching Methodology", link: "/about/teaching-methodology" },
    { label: "Achievement", link: "/about/achievement" },
  ];

  const Student= [
    { label: "Students Gallery", link: "/student/gallery" },
    { label: "Fee Details", link: "/student/fee-details" },
    { label: "Privacy Policy", link: "/student/privacy-policy" },
    { label: "FAQs", link: "/student/faqs" },
    { label: "Time Table", link: "/student/time-table" },
  ]
  
  const  Admission =  [
    { label: "Apply Online", link: "/admission/apply-online" },
    { label: "Admission Procedure", link: "/admission/procedure" },
    { label: "Term & Condition Policy", link: "/admission/terms-conditions" },
    { label: "Time Table", link: "/admission/time-table" },
  ]

  const Courses= [
    { label: "One Year Courses", link: "/courses/one-year" },
    { label: "Two Year Courses", link: "/courses/two-year" },
    { label: "Pre-Medical", link: "/courses/pre-medical" },
    { label: "Foundation", link: "/courses/foundation" },
    { label: "Online Course/LIVE", link: "/courses/online-live" },
    { label: "Distance Learning Program (DLP)", link: "/courses/dlp" },
  ]

export default function NavBarV2() {
    
const [active1, setActive1] = useState(false);
const [active2, setActive2] = useState(false);
const [active3, setActive3] = useState(false);
const [active4, setActive4] = useState(false);
const [active5, setActive5] = useState(false);

  return (
    <div> <div onClick={()=>setActive1(!active1)}>show</div> 

    {active1 && (
      <div>
      <div>Home</div>
      
      <div onClick={()=>setActive2(!active2)}>About</div>
      {active2 && (<ul className="bg-red-500 p-3 w-fit"> {About.map((item, i)=> <li key={i}>{item.label}</li> )} </ul>)}

      <div onClick={()=>setActive3(!active3)}>Courses</div>
      {active3 && (<ul className="bg-red-500 p-3 w-fit"> {Courses.map((item, i)=> <li key={i}>{item.label}</li> )} </ul>)}

      <div onClick={()=>setActive4(!active4)}>Admission</div> 
      {active4 && (<ul className="bg-red-500 p-3 w-fit"> {Admission.map((item, i)=> <li key={i}>{item.label}</li> )} </ul>)}

      <div onClick={()=>setActive5(!active5)}>Student</div>
      {active5 && (<ul className="bg-red-500 p-3 w-fit"> {Student.map((item, i)=> <li key={i}>{item.label}</li> )} </ul>)}

    </div>
    )
  }
  </div>
  )
}

//   return (
//     <>
//       <div className="flex flex-col gap-4">
//         {Object.keys(MenuData).map((key) => (
//           <div key={key} className="inline-block">
//             {/* Menu Button */}
//             <Link
//               className="text-shadow-black py-2 mx-2 px-4 rounded-2xl hover:bg-red-400 hover:text-white"
//               href={key === "Home" ? "/" : ""} 
//             >
//               {key}
//             </Link>

//             {/* Dropdown Menu */}
//             {Active&&(
//             MenuData[key].length > 0 && (
//               <div className="  mt-1 w-60 bg-white border border-gray-200 rounded-md shadow-lg">
//                 <ul>
//                   {MenuData[key].map((option, index) => (
//                     <li key={index}>
//                       <Link
//                         href={option.link}
//                         className="block px-4 py-2 text-gray-800 hover:bg-red-600 hover:text-white"
//                       >
//                         {option.label}
//                       </Link>
//                     </li>
//                   ))}
//                 </ul>
//               </div>
//             )
//             )}
//           </div>
//         ))}
//       </div>
//     </>
//   );
// }
