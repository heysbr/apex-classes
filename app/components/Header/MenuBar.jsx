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
    <div className="hidden md:flex gap-4">
      {Object.keys(MenuData).map((key) => (
        <div key={key} className="relative group inline-block z-50">
          {/* Menu Button */}
          <button className="text-shadow-black py-2 px-4 ">
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
