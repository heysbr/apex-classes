import React from "react";
import Heading from "../../../app/components/Heading/Heading";
import Bullets from "../Paragraphs/Bullets";
import Features from "../Paragraphs/Features";
import FeaturesPara from "../Paragraphs/FeaturesPara";

const BulletData =[
    {id:1,
        para:"Teaching by excelled academicians for better results"
    },
    {id:2,
        para:"Regular Motivation Sessions for students"
    },
    {id:3,
        para:"Daily Doubt Clearing Sessions"
    },

]

export default function WelcomeSection() {
  return (
    <section>
      <div className="bg-red-50">
        <div className="container mx-auto py-10">
          <div className="container max-h-max w-full text-black flex flex-wrap mx-auto">
            <div className="w-full lg:w-1/2 mb-10  mt-10 md:my-auto">
              <div className="max-w-md mx-6">
                <Heading>
                  Welcome to <span className="text-red-600">APEX</span>
                </Heading>
                <FeaturesPara/>
                <Bullets BulletData={BulletData}/>
              </div>
            </div>
            <Features/>
          </div>
        </div>
      </div>
    </section>
  );
}
