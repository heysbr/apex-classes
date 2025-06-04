import React from "react";
import Image from "next/image";

import fb from "../../components/Assests/images/social/facebook.svg";
import twitter from "../../components/Assests/images/social/twitter.svg";

import linkedin from "../../components/Assests/images/social/linkedin.svg";

import apex from "../../components/Assests/images/apexlogo.svg";
import Link from "next/link";

export default function Footer() {
   const socialLinks = [
    {
      link : "https://www.facebook.com/heysbr", imgLink: fb
    }
    ,{
      link : "https://www.instagram.com/code.prynsh/", imgLink: twitter
    },
    {
      link : "https://www.linkedin.com/in/priyanshu-sabaar/", imgLink: linkedin
    }
  ]

  return (
    <section>
      <div className="py-10 bg-gray-900 ">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap">
            <div className="w-full lg:w-1/3 mb-16 lg:mb-0">
              <Link href="/">
                <Image
                  className=" my-auto rounded-md block "
                  src={apex}
                  alt="Logo"
                  width={250}
                  // height={500}
                />
              </Link>

              <p className="mb-4 max-w-sm mt-8 text-gray-400 leading-loose">
                Apex Education is an educational Institute founded with a sole
                motto of propagating quality education for the students those
                who are seeking career in engineering /medical entrance
                examination.
              </p>

              <div>
                {socialLinks.map((item, i) => (
                  <div
                    className="inline-block w-10 mr-2 p-2 bg-gray-800 hover:bg-gray-700 rounded" key={i}
                  >
                    <Link href={item.link} >
                      <Image
                        src={item.imgLink}
                        className="mx-auto"
                        width={40}
                        alt="social links"
                      />
                    </Link>
                  </div>
                ))}
              </div>
            </div>
            <div className="w-full lg:w-2/3 lg:pl-16 flex flex-wrap justify-between">
              <div className="w-full md:w-1/3 lg:w-auto mb-16 md:mb-0">
                <h3 className="mb-6 text-2xl font-bold text-white">
                  Other Links
                </h3>
                <ul>
                  <li className="mb-4">
                    <a
                      href="/oneyear"
                      className="text-gray-400 hover:text-gray-300"
                    >
                      One Year Courses
                    </a>
                  </li>
                  <li className="mb-4">
                    <a
                      href="/twoyear"
                      className="text-gray-400 hover:text-gray-300"
                    >
                      Two Year Courses
                    </a>
                  </li>
                  <li className="mb-4">
                    <a
                      href="/foundation"
                      className="text-gray-400 hover:text-gray-300"
                    >
                      Foundation
                    </a>
                  </li>
                  <li className="mb-4">
                    <a
                      href="/onlinecourse"
                      className="text-gray-400 hover:text-gray-300"
                    >
                      Online Course
                    </a>
                  </li>
                  <li>
                    <a
                      href="/oneyeartarget"
                      className="text-gray-400 hover:text-gray-300"
                    >
                      Target Course
                    </a>
                  </li>
                </ul>
              </div>
              <div className="w-full md:w-1/3 lg:w-auto mb-16 md:mb-0">
                <h3 className="mb-6 text-2xl font-bold text-white">
                  Important Links
                </h3>
                <ul>
                  <li className="mb-4">
                    <a
                      href="/privacypolicy"
                      className="text-gray-400 hover:text-gray-300"
                    >
                      Privacy policy
                    </a>
                  </li>
                  <li className="mb-4">
                    <a
                      href="/studentzone"
                      className="text-gray-400 hover:text-gray-300"
                    >
                      Student Zone
                    </a>
                  </li>
                  <li className="mb-4">
                    <a
                      href="/admissionform"
                      className="text-gray-400 hover:text-gray-300"
                    >
                      Apply Online
                    </a>
                  </li>
                  <li className="mb-4">
                    <a
                      href="/"
                      aria-current="page"
                      className="text-gray-400 hover:text-gray-300"
                    >
                      Terms &amp; Conditions
                    </a>
                  </li>
                  <li>
                    <a
                      href="/faq"
                      className="text-gray-400 hover:text-gray-300"
                    >
                      FAQs
                    </a>
                  </li>
                </ul>
              </div>
              <div className="w-full md:w-1/3 lg:w-auto">
                <h3 className="mb-6 text-2xl font-bold text-left text-white ">
                  Contact Details
                </h3>
                <p className="text-gray-400 hover:text-gray-300 w-auto mt-2 mb-4">
                  <span className="font-bold">Address :-</span> CMO Office Lane,
                  <br /> Kabir Nagar,Durgakund, Varanasi
                </p>
                <p className="text-gray-400 hover:text-gray-300 w-auto text-sm mt-2 mb-2">
                  <span className="font-bold">Email ID :-</span> hallo@gamil.com
                </p>
                <p className="text-gray-400 hover:text-gray-300 w-auto text-sm mt-2">
                  <span className="font-bold">Mobile No. :-</span> 8960972920,
                  7007519673
                </p>
              </div>
            </div>
          </div>
          <p className="text-center text-sm text-gray-400  border-t mt-3 pt-3 border-gray-800 ">
            © 2021. All rights reserved by
            <a className="cursor-pointer">Osizone Services Pvt. Ltd</a>.
          </p>
        </div>
      </div>
    </section>
  );
}
