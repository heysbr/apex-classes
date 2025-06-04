import React from "react";

export default function page() {
  return (
    <section className="container py-10 lg:py-20 mx-auto">
      <Demo/>
    </section>
  );
}


function Demo(){
  return(
    <>
    <span className=" px-3 m-4 h-80 float-right">
            <img
              src="https://images.unsplash.com/photo-1473773508845-188df298d2d1?ixlib=rb-1.2.1&amp;ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&amp;auto=format&amp;fit=crop&amp;w=967&amp;q=80"
              alt=""
              className="h-full mx-auto object-cover rounded-lg transform transition duration-500 hover:scale-100 scale-95"
            />
          </span>
          <div className="mx-4">

          <h2 className="mb-6 text-4xl font-bold">
            Director's <span className="text-red-600">Message</span>
          </h2>
          <p className="text-gray-800 font-bold italic text-xl">
            "A dreams doesn't become reality through magic;
            <br />
            &nbsp;it takes sweat, determination and hard work"
          </p>
          <p className="text-gray-500 leading-loose text-justify pt-2">
            Success is the sum of small efforts, repeated day in and day out.
            There exist limitless opportunities and possibilities which life
            presents to us at each coming moment. You don't have to be great to
            start, but you have to start to be great. Probably a year from now
            you would be wishing that you would have started today. So, let's
            start today.
          <br/>
            Firstly, I would like to communicate my gratitude for the belief you
            have shown in Apex classNamees. I appreciate you all for talking up
            the challenge to get into India's best institutions. At Apex, we
            strieve to maintain the highest standards of education, to make the
            dreams of our students come true. We encourage the vibrant and
            energetic students to develop their confidence and love for learning
            for a bright future in the competitive era.
          <br/>
            Apex stays in front of the success curve by knowing what factors
            drive success in the competitive exams. Our results are testimony of
            our commitment to teaching. We strongly believe that challenges are
            what make life interesting &amp; overcoming them is what makes life
            meaningful. Every challenge always seems impossible until it's done.
          <br/>
            Today, Apex and aspiring students are walking together to redefine
            success with confidence. I assure you a good learning experience
            here.
          </p>
          <p className="text-gray-700  text-xl font-bold italic pt-2 mt-1">
            "An unexamined life is not worth living Dream big, Dream often
            Pursue the intangible &amp; achieve the incredible"
          </p>
          <br />
          <h4 className="mt-2 text-xl font-bold pr-4">Sandeep Mishra</h4>
          <h4 className=" text-lg ">B.tech, IIT-BHU</h4>
          </div>
          </>
  )
}