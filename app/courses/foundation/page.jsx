import { title } from "process";
import React from "react";
import FoundationPara from "./FoundationPara";
import FoundationCards from "./FoundationCards";

const ParaData = [
  {
    title: "Pre-Foundation",
    desc: "Apex Classes strongly believes in developing the inquisitiveness and curiosity of children into logical thinking. Foundation Builder is the first step towards nurturing the young minds of the country. The proficiency in Science and Math lies on the clarity of thoughts. Hence, we attempt to inculcate these concepts with absolute clarity and lucidity. Students get an opportunity to learn these subjects from expert and experienced faculties, who make these subjects more interesting and very easy to understand. Moreover, learning becomes a delightful experience here due to modern teaching methodology. We help our students to think out-of-the-box; a skill that is indispensable to succeed at competitive examinations in future.",
  },
  {
    title: "Importance of the Foundation Course",
    desc: "Preparing with Foundation Course helps identify scholastic talent in students. Trying to identify their skill level earlier is does not mean putting pressure on a student to suddenly turn into a prodigy. Aptitude needs learning and practice to reach its full potential. Preparing for competitive exams is about helping your child to achieve the best he can.",
  },
  {
    title: "INTERNATIONAL OLYMPIADS",
    desc: "Olympiads are internationally recognized competitions in various fields of Science. They are the highest level thinking examinations and are hosted by different countries every year. Participation in any of the Olympiads is worldwide recognized and is considered as a great achievement. International Olympiads are held every year in Mathematics, Physics, Chemistry, Biology, Astronomy and Junior Science. Apex has attained an exalted prestige producing the best results at Olympiads (Physics, Chemistry, Mathematics, Astronomy & Biology) Year-after-year. The fact that these Olympiads are held internationally and, our students are successful in them consistently, is a testimony to our high standard of teaching & impeccable quality of teachers.",
  },
  {
    title: "ABOUT INTERNATIONAL OLYMPIADS",
    desc: "The International Olympiad(10)programme follows a five stage process All the subsequent stages are conducted by Homi Bhabha Centre for Science Education(HBCSE), Mumbai (www.hbcse.tif.res.in)",
  },
];

const CardsData = [
  {
    title: "National Standard Examinations (NSEs)",
    desc: "Physics, Chemistry, Biology, Astronomy organized by IAPT.",
  },
  {
    title: "Indian National Olympiad (INO) examination",
    desc: "The eligible students from stage one can participate In INO in respective subjects.",
  },
  {
    title: "Orientation-Cum-Selection Camps (OCSC)",
    desc: "For these camps, about 35 students in each subject will be selected from INO on performance basis.",
  },
  {
    title: "Pre Departure Training (PDT)",
    desc: "These students will have a Pre- Departure Training (PDT) for two weeks.",
  },
  {
    title: "International Olympiad (IO)",
    desc: "Participation in International Olympiad (I0) of the selected students",
  },
];

export default function page() {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <FoundationPara data={ParaData}>
          Pre-Foundation Course (For Students of Class VIII, IX &amp; X)
        </FoundationPara>
        <FoundationCards data={CardsData}/>
      </div>
    </section>
  );
}
