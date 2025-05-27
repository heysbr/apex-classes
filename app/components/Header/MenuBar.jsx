import Link from "next/link";

const MenuData = {
  Home: [],
  About: [
    { label: "About Us", link: "/about/about-us" },
    { label: "Director's Message", link: "/about/directors-message" },
    { label: "Mission & Vision", link: "/about/mission-vision" },
    { label: "Teaching Methodology", link: "/about/teaching-methodology" },
    { label: "Achievement", link: "/about/achievement" },
  ],
  Courses: [
    { label: "One Year Courses", link: "/courses/one-year" },
    { label: "Two Year Courses", link: "/courses/two-year" },
    { label: "Pre-Medical", link: "/courses/pre-medical" },
    { label: "Foundation", link: "/courses/foundation" },
    { label: "Online Course/LIVE", link: "/courses/online-live" },
    { label: "Distance Learning Program (DLP)", link: "/courses/dlp" },
  ],
  Admission: [
    { label: "Apply Online", link: "/admission/apply-online" },
    { label: "Admission Procedure", link: "/admission/procedure" },
    { label: "Term & Condition Policy", link: "/admission/terms-conditions" },
    { label: "Time Table", link: "/admission/time-table" },
  ],
  Student: [
    { label: "Students Gallery", link: "/student/gallery" },
    { label: "Fee Details", link: "/student/fee-details" },
    { label: "Privacy Policy", link: "/student/privacy-policy" },
    { label: "FAQs", link: "/student/faqs" },
    { label: "Time Table", link: "/student/time-table" },
  ],
};

const str = "hello world"

export default function MenuBar() {
  return (
    <div className="hidden md:flex gap-4">
      {Object.keys(MenuData).map((key) => (
        <div key={key} className="relative group inline-block z-50">
          {/* Menu Button */}
          <Link className="text-shadow-black py-2 mx-2 px-4 rounded-2xl hover:bg-red-400 hover:text-white" href={key==="Home"?"/":""}>
            {key}
          </Link>

          {/* Dropdown Menu */}
          {MenuData[key].length > 0 && (
            <div className="absolute mt-1 w-60 hidden group-hover:block bg-white border border-gray-200 rounded-md shadow-lg">
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
  );
}
