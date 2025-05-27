"use client";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import "./style.css";

// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import Slides from "./Slides";

export default function Carousel() {
  const slidesCount = 7;
  
  return (
    <>
      <Swiper
        spaceBetween={0}
        centeredSlides={true}
        autoplay={{
          delay: 1800,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper mx-auto"
      >
       {Array.from({ length: slidesCount }, (_, index) => (
        <SwiperSlide key={index}>
          <Slides />
        </SwiperSlide>
      ))}
      </Swiper>
    </>
  );
}
