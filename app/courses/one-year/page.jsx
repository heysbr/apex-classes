import React from "react";
import JeeMainsBullets from "./List";
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
    <section class="py-20">
      <h2 class="mb-2 text-3xl lg:text-4xl text-red-500 font-bold font-heading text-center border-b-3 border-red-500  w-fit mx-auto px-90">
        One Year Target Courses
      </h2>
      <div class="relative max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="max-w-lg mx-auto rounded-lg overflow-hidden lg:max-w-none lg:flex">
          <div class="bg-white dark:bg-gray-800 px-6 py-4 lg:flex-shrink-1">
            <h3 class="text-2xl leading-8 font-extrabold text-gray-900 sm:text-3xl sm:leading-9 dark:text-white">
              IIT-JEE
            </h3>
            <p class="mt-6 text-base leading-6 text-gray-500 dark:text-gray-200">
              The new Joint Entrance Exam, also known as JEE is a two-step
              process.
            </p>
          </div>
        </div>
        <div class="flex flex-wrap overflow-hidden lg:-mx-1 xl:-mx-1">
          <div class="w-full overflow-hidden lg:my-1 lg:px-1 lg:w-1/2 xl:my-1 xl:px-1 xl:w-1/2">
            <div class="bg-white dark:bg-gray-800 px-6 py-8 lg:flex-shrink-1 lg:p-12">
              <div class="mt-8">
                <div class="flex items-center">
                  <h4 class="flex-shrink-0 pr-4 bg-white dark:bg-gray-800 text-sm leading-5 tracking-wider font-semibold uppercase text-indigo-600">
                    JEE Main:
                  </h4>
                  <div class="flex-1 border-t-2 border-gray-200"></div>
                </div>
                <JeeMainsBullets data={JeeMainsData} />
              </div>
            </div>
          </div>
          <div class="w-full overflow-hidden lg:my-1 lg:px-1 lg:w-1/2 xl:my-1 xl:px-1 xl:w-1/2">
            <div class="bg-white dark:bg-gray-800 px-6 py-8 lg:flex-shrink-1 lg:p-12">
              <div class="mt-8">
                <div class="flex items-center">
                  <h4 class="flex-shrink-0 pr-4 bg-white dark:bg-gray-800 text-sm leading-5 tracking-wider font-semibold uppercase text-indigo-600">
                    JEE Advance
                  </h4>
                  <div class="flex-1 border-t-2 border-gray-200"></div>
                </div>
                <JeeMainsBullets data={JeeAdvanceData} />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="relative max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="pricing-box max-w-lg mx-auto rounded-lg overflow-hidden lg:max-w-none lg:flex">
          <div class="bg-white dark:bg-gray-800 px-6 py-8 lg:flex-shrink-1 lg:p-12">
            <h3 class="text-2xl leading-8 font-extrabold text-gray-900 sm:text-3xl sm:leading-9 dark:text-white">
              NEET/AIIMS
            </h3>
            <div class="mt-8">
              <div class="flex items-center">
                <h4 class="flex-shrink-0 pr-4 bg-white dark:bg-gray-800 text-sm leading-5 tracking-wider font-semibold uppercase text-indigo-600">
                  NEET - NATIONAL ELIGIBILITY cum ENTRANCE TEST
                </h4>
                <div class="flex-1 border-t-2 border-gray-200"></div>
              </div>
              <p class="mt-6 text-base leading-6 text-gray-500 dark:text-gray-200">
                The All India Institutes of Medical Sciences (AIIMS) are a group
                of autonomous public medical colleges of higher education. These
                institutes have been declared by an Act of Parliament as
                Institutes of National Importance. AIIMS Delhi, the fore-runner
                parent excellence institution, was established in 1956.
              </p>
              <JeeMainsBullets data={AimsData} />
            </div>
            <div class="mt-8">
              <div class="flex items-center">
                <h4 class="flex-shrink-0 pr-4 bg-white dark:bg-gray-800 text-sm leading-5 tracking-wider font-semibold uppercase text-indigo-600">
                  
                </h4>
                <div class="flex-1 border-t-2 border-gray-200"></div>
              </div>
              <List data={NeetData} >AIIMS - ALL INDIA INSTITUTE OF MEDICAL SCIENCES</List>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
