import Button from "../../components/Button/Button";
import Link from "next/link";
import React from "react";

const studentGalleryImages = [
  {
    src: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1050&q=80",
    alt: "Image 1",
  },
  {
    src: "https://images.unsplash.com/photo-1454496522488-7a8e488e8606?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1055&q=80",
    alt: "Image 2",
  },
  {
    src: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1050&q=80",
    alt: "Image 3",
  },
  {
    src: "https://images.unsplash.com/photo-1518098268026-4e89f1a2cd8e?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=968&q=80",
    alt: "Image 4",
  },
  {
    src: "https://images.unsplash.com/photo-1472214103451-9374bd1c798e?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80",
    alt: "Image 5",
  },
  {
    src: "https://images.unsplash.com/photo-1459213599465-03ab6a4d5931?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1055&q=80",
    alt: "Image 6",
  },
  {
    src: "https://images.unsplash.com/photo-1476610182048-b716b8518aae?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1127&q=80",
    alt: "Image 7",
  },
  {
    src: "https://images.unsplash.com/photo-1413752362258-7af2a667b590?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1055&q=80",
    alt: "Image 8",
  },
];


export default function page() {
  return (
    <section>
      <div className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="mb-8 md:mb-16 max-w-lg mx-auto text-center">
            <h2 className="mb-6 text-4xl text-red-500 lg:text-5xl font-bold font-heading border-b-2 border-gray-100">
              Student Gallery
            </h2>
          </div>{" "}
          <div className="flex flex-wrap mb-8 -mx-4">
            {studentGalleryImages.map((item, i)=> <StudentGalleryCard data={item} key={i}/>)}
            </div>
          <div className="justify-items-center">
            <Button link={"/student/gallery"}>View More Images</Button>
          </div>
        </div>
      </div>
    </section>
  );
}


function StudentGalleryCard({data}){
  return (
    <div className="w-full md:w-1/2 lg:w-1/4 mb-8 px-4">
      <a href="#">
        <img
          src={data.src}
          alt={data.alt}
          className="mx-auto h-64 w-full rounded object-cover"
        />
      </a>
    </div>
  )
}
