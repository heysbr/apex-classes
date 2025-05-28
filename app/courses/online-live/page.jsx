import VisionCard from "../../about/mission-vision/VisionCard";
import React from "react";
const data = [
  {
    id: "1",
    title: "Learning Technology",
    desc: "The digitally enabled ‘Lecture Hall’ allows instructors to use animation, video, audio and other presentation tools to enhance the learning process. This virtual platform blends the strengths and advantages of traditional methods of education with cutting-edge technology. Using a powerful interface, it enables a student to engage in participatory sessions with peers and instructors across the country. We are using the best of technology to reach to the students. The methodology is simple and provides the same live classroom environment to the students. Each course is offered through VSAT broadcast lectures supported by study materials, DPP assignments-class/home, Review Tests, Quizzes and Handouts. The broadcast is through satellite transmission to a large number of registered Satellite Learning Program Centre (SLPC). Each SLPC projects the lectures on a projector screen, in a classroom for up to fifty participants, guided by a local supervisor. Participants have the opportunity to ask questions during the lecture, which can be answered by the distant instructor, as in a real classroom.",
  },
  {
    id: "2",
    title: "The key features of VSAT based learning are",
    desc: "The class will be taken by the faculties in studio at Apex Education Classes. Students can listen and see the faculty simultaneously the faculty can see and interact with the student. The study material provided to the students will be comprehensive to cover all important aspects of Engg. / Medical entrance tests. Missed classes can be covered by video recorded lectures on demand.",
  },
];
export default function page() {
  return (
    <>
      <section class="py-20 text-black">
        <div class="container mx-auto px-4">
          <div class="max-w-4xl mx-auto">
            <h2 class="mb-16 text-3xl lg:text-4xl font-bold font-heading text-center text-red-500 border-b-4  ">
              Online Courses available for IIT-JEE (Main and Advance )
            </h2>
            <VisionCard data={data} />
          </div>
        </div>
      </section>
    </>
  );
}
