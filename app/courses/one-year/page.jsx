import List from "./List";

const NeetData = [
  {
    description:
      "The admission to thirteen All India Institute of Medical Sciences (AIIMS) is taken through the AIIMS MBBS entrance exam.",
  },
  {
    description:
      "AIIMS, New Delhi is the responsible body for holding the admission process each year.",
  },
  {
    description:
      "The entire form filling procedure has been revised by AIIMS. It will be a two-stage process comprising of Basic Registration and Registration.",
  },
  {
    description:
      "The entrance exam of AIIMS MBBS is held across four different shifts fora duration of 3 hours and 30 minutes.",
  },
  { description: "The mode of conduct of AIIMS MBBS exam is online." },
  {
    description:
      "The candidates qualifying the exam will be called to participate in the AIIMS MBBS counselling process.",
  },
  {
    description:
      "The admission will be taken on the basis of the merit score of the candidates and the preferences submitted by the candidates at the time of counselling.",
  },
  { description: "AIIMS result is announced in the month of June." },
];

const AimsData = [
  { description: "NEET is a single-stage exam." },
  {
    description:
      "Conducted by CBSE for admission to graduate medical courses (MBBS), dental courses (BDS), or postgraduate courses (MD/MS) in government or private colleges in India.",
  },
  {
    description:
      "Institutes which are outside the purview of NEET are AIIMS (New Delhi) and JIPMER, Pondicherry.",
  },
  {
    description:
      "The paper consists of 180 questions: 45 from Physics, 45 from Chemistry, and 90 from Biology (Botany & Zoology).",
  },
  { description: "Duration of the paper is 3 hours." },
  { description: "NEET is held every year in the month of May." },
  { description: "For more details, kindly visit http://cbseneet.nic.in." },
];

const JeeMainsData = [
  {
    description:
      "First challenging exam and only those students who prove their mettle in this examination are allowed to appearforJEE(Advanced)-the next stage",
  },
  {
    description:
      "Gateway for Engineering aspirants to 31 NIT's, 20 GFTI's, IIIT's and other centrally funded technical institutions.",
  },
  {
    description:
      "Single choice objective paper (MCQ) containing 90 questions. with equal weightage given to Physics, Chemistry and Mathematics.",
  },
  { description: "For correct question +4 marks, Incorrect (-1)." },
  {
    description: "Duration of the paper is 3 hours. Test is conducted Online.",
  },
  {
    description:
      "Held every year twice tentatively in the month of January &amp; April. Best of two is selected.",
  },
  { description: "For more details kindly visit http://jeemain.nic.in" },
];

const JeeAdvanceData = [
  {
    description:
      "Second stage of entrance test for admissions to IIT's &amp; MSc.",
  },
  {
    description: "Only top 20% successful candidates of JEE Main are eligible.",
  },
  {
    description:
      "Conducted by the seven zonal Ills -IIT Bombay, IIT Delhi, IIT Guwahati, IIT Kanpur, IIT Kharagpur, IIT Madras and IIT Roorkee.",
  },
  {
    description:
      "Two objective Online papers, each of three hours duration with equal weightage to Physics, Chemistry &amp; Mathematics.",
  },
  {
    description:
      "The candidates must have 75% (aggragate boards percentage) or should be in top 20 percentile of the respective board (whichever is lower).",
  },
  {
    description:
      "The JEE Advanced exam is held every year tentatively inthe 3rd week of May.",
  },
  {
    description: "For more details kindly visit http://www.jeeadv.iitb.ac.in/",
  },
];

export default function page() {
  return (
    <section className="mx-auto container">
      <div className="m-2">
      <h2 className="text-3xl lg:text-4xl text-red-500 font-bold font-heading text-center mx-auto mt-10 mb-5">One Year Course</h2>
      <div className="overflow-hidden rounded-xl shadow-2xl bg-white p-10 border border-gray-200 ">
        <h3 className="text-2xl leading-8 font-extrabold sm:text-3xl sm:leading-9 mb-4">
          IIT-JEE
        </h3>
        <List data={JeeMainsData}>JEE Main</List>
        <List data={JeeAdvanceData}>JEE Advance</List>
      </div>
      <div className="overflow-hidden rounded-xl shadow-2xl bg-white p-10 my-10 border border-gray-200">
        <h3 className="text-2xl leading-8 font-extrabold sm:text-3xl sm:leading-9 mb-4 ">
          NEET/AIIMS
        </h3>
        <List data={AimsData}>NEET</List>
        <List data={NeetData}>AIIMS</List>
      </div>
      </div>   
    </section>
  );
}
 