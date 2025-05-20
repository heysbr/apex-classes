const MenuData1 = {
  Home: {}, // Transformed to an empty object
  About: {
    "About Us": { name: "About Us", slug: "about-us" },
    "Director's Message": { name: "Director's Message", slug: "directors-message" },
    "Mission & Vision": { name: "Mission & Vision", slug: "mission-vision" },
    "Teaching Methodology": { name: "Teaching Methodology", slug: "teaching-methodology" },
    "Achievement": { name: "Achievement", slug: "achievement" },
  },
  Courses: {
    "One Year Courses": { name: "One Year Courses", slug: "one-year-courses" },
    "Two Year Courses": { name: "Two Year Courses", slug: "two-year-courses" },
    "Pre-Medical": { name: "Pre-Medical", slug: "pre-medical" },
    "Foundation": { name: "Foundation", slug: "foundation" },
    "Online Course/LIVE": { name: "Online Course/LIVE", slug: "online-course-live" },
    "Distance Learning Program (DLP)": { name: "Distance Learning Program (DLP)", slug: "distance-learning-program-dlp" },
  },
  Admission: {
    "Apply Online": { name: "Apply Online", slug: "apply-online" },
    "Admission Procedure": { name: "Admission Procedure", slug: "admission-procedure" },
    "Term & Condition policy": { name: "Term & Condition policy", slug: "term-condition-policy" },
    "Time Table": { name: "Time Table", slug: "time-table" },
  },
  Student: {
    "Students Gallery": { name: "Students Gallery", slug: "students-gallery" },
    "Fee Details": { name: "Fee Details", slug: "fee-details" },
    "Privacy Policy": { name: "Privacy Policy", slug: "privacy-policy" },
    "FAQs": { name: "FAQs", slug: "faqs" },
    "Time Table": { name: "Time Table", slug: "time-table" },
  },
}



const MenuData = {
  Home: [],
  About: [
    "About Us",
    "Director's Message",
    "Mission & Vision",
    "Teaching Methodology",
    "Achievement",
  ],
  Courses: [
    "One Year Courses",
    "Two Year Courses",
    "Pre-Medical",
    "Foundation",
    "Online Course/LIVE",
    "Distance Learning Program (DLP)",
  ],
  Admission: [
    "Apply Online",
    "Admission Procedure",
    "Term & Condition policy",
    "Time Table",
  ],
  Student: [
    "Students Gallery",
    "Fee Details",
    "Privacy Policy",
    "FAQs",
    "Time Table",
  ],
};


export default function MenuBar() {
  return (
    <div className="hidden md:flex gap-4 ">
      {Object.keys(MenuData).map((key) => (
        <div key={key} className="relative group inline-block z-50">
          {/* Menu Button */}
          <button className="text-shadow-black py-2  mx-2 px-4 rounded-2xl hover:bg-red-400 hover:text-white">
            {key}
          </button>

          {/* Dropdown Menu */}
          {MenuData[key].length > 0 && (
            <div className="absolute w-60 hidden group-hover:block bg-white border border-gray-200 rounded-md  shadow-lg ">
              <ul>
                {MenuData[key].map((option, index) => (
                  <li key={index}>
                    <a
                      href="#"
                      className="block px-4 py-2 text-gray-800 hover:bg-red-600  hover:text-white"
                    >
                      {option}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
