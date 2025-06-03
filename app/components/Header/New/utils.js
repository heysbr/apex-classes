import { Bolt } from "lucide-react";
import { ShoppingBag } from "lucide-react";
import { BellDot } from "lucide-react";
import { BookOpenText } from "lucide-react";
import { BriefcaseBusiness } from "lucide-react";
import { CircleHelp } from "lucide-react";
import { TriangleAlert } from "lucide-react";
import { Users } from "lucide-react";
import { Lock } from "lucide-react";
import { Dessert } from "lucide-react";
import { ShieldPlus } from "lucide-react";
import { MessageCircle } from "lucide-react";
import { Images } from "lucide-react";
import { Figma } from "lucide-react";
import { Play } from "lucide-react";
import { MapPin } from "lucide-react";
import { Database } from "lucide-react";
import { PanelsTopLeft } from "lucide-react";
import { PanelTop } from "lucide-react";

// export const Menus = [
//   {
//     name: "Features",
//     subMenuHeading: ["Design", "Scale"],
//     subMenu: [
//       {
//         name: "Design",
//         desc: "Responsive design",
//         icon: PanelsTopLeft,
//       },
//       {
//         name: "Management",
//         desc: "Site control",
//         icon: Bolt,
//       },
//       {
//         name: "Navigation",
//         desc: "desc pages",
//         icon: PanelTop,
//       },
//       {
//         name: "CMS",
//         desc: "Management content",
//         icon: Database,
//       },
//     ],
//     gridCols: 2,
//   },
//   {
//     name: "Resources",
//     subMenuHeading: ["Get started", "Programs", "Recent"],
//     subMenu: [
//       {
//         name: "Markplace",
//         desc: "Browse templates",
//         icon: ShoppingBag,
//       },
//       {
//         name: "Meetups",
//         desc: "Upcoming events",
//         icon: MapPin,
//       },
//       {
//         name: "Updates",
//         desc: "Changelog",
//         icon: BellDot,
//       },
//       {
//         name: "Academy",
//         desc: "Watch lessions",
//         icon: Play,
//       },
//       {
//         name: "Blog",
//         desc: "Posts",
//         icon: BookOpenText,
//       },
//       {
//         name: "Figma",
//         desc: "Plugin",
//         icon: Figma,
//       },
//       {
//         name: "Experts",
//         desc: "Jobs",
//         icon: BriefcaseBusiness,
//       },
//       {
//         name: "Gallery",
//         desc: "Images",
//         icon: Images,
//       },
//     ],
//     gridCols: 3,
//   },
//   {
//     name: "Support",
//     subMenu: [
//       {
//         name: "Help",
//         desc: "Center",
//         icon: CircleHelp,
//       },
//       {
//         name: "Community",
//         desc: "Project help",
//         icon: MessageCircle,
//       },
//       {
//         name: "Emergency",
//         desc: "Urgent issues",
//         icon: TriangleAlert,
//       },
//     ],
//     gridCols: 1,
//   },
//   {
//     name: "Enterprise",
//     subMenuHeading: ["Overview", "Features"],
//     subMenu: [
//       {
//         name: "Enterprise",
//         desc: "Overview",
//         icon: ShieldPlus,
//       },
//       {
//         name: "Collaboration",
//         desc: "Design together",
//         icon: Users,
//       },
//       {
//         name: "Customers",
//         desc: "Stories",
//         icon: Dessert,
//       },
//       {
//         name: "Security",
//         desc: "Your site secured",
//         icon: Lock,
//       },
//     ],
//     gridCols: 2,
//   },
//   {
//     name: "Pricing",
//   },
//   {
//     name: "Contact",
//   },
// ];



export const Menus = [
  {
    name: "Home",
  },
  {
    name: "About",
    subMenu: [
      {
     
        name: "About-Us",
        desc: "/about/about-us",
        icon: PanelsTopLeft,
      },
      {

        name: "Director's-Message",
        desc: "/about/directors-message",
        icon: Bolt,
      },
      {
 
        name: "Mission-&-Vision",
        desc: "/about/mission-vision",
        icon: PanelTop,
      },
      {
    
        name: "Teaching-Methodology",
        desc: "/about/teaching-methodology",
        icon: Database,
      },
      {

        name: "Achievement",
        desc: "/about/achievement",
        icon: Database,
      },
    ],
  },
  {
    name: "Courses",
    subMenu: [
      {

        name: "One-Year-Courses",
        desc: "/courses/one-year",
        icon: ShoppingBag,
      },
      {

        name: "Two-Year-Courses",
        desc: "/courses/two-year",
        icon: MapPin,
      },
      {

        name: "Pre-Medical",
        desc: "/courses/pre-medical",
        icon: BellDot,
      },
      {
 
        name: "Foundation",
        desc: "/courses/foundation",
        icon: Play,
      },
      {

        name: "Distance-Learning-Program(DLP)",
        desc: "/courses/dlp",
        icon: BookOpenText,
      },
    ],
  },
  {
    name: "Admission",
    subMenu: [
      {

        name: "Apply-Online",
        desc: "/admission/apply-online",
        icon: CircleHelp,
      },
      {

        name: "Admission-Procedure",
        desc: "/admission/procedure",
        icon: MessageCircle,
      },
      {

        name: "Term-&-Condition-Policy",
        desc: "/admission/terms-conditions",
        icon: TriangleAlert,
      },
      {

        name: "Time-Table",
        desc: "/admission/time-table",
        icon: TriangleAlert,
      }
    ],
  },
  {
    name: "Student",
    subMenu: [
      {
        name: "Students-Gallery",
        desc: "/student/gallery",
        icon: ShieldPlus,
      },
      {
        name: "Fee-Details",
        desc: "/student/fee-details",
        icon: Users,
      },
      {
        name: "Privacy-Policy",
        desc: "/student/privacy-policy",
        icon: Dessert,
      },
      {
        name: "FAQs",
        desc: "/student/faqs",
        icon: Dessert,
      },
      {
        name: "Time Table",
        desc: "/student/time-table",
        icon: Dessert,
      },
    ],
  },
];
