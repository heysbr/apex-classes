"use client";

const images = [
  "./images/carousel/carousel.jpg",
  "./images/carousel/carousel.jpg",
  "./images/carousel/carousel.jpg",
];

import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import Slide from "./carousel.jpg";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import "./style.css";

// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import Slides from "./Slides";

export default function Carousel() {
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
        <SwiperSlide>
          <Slides/>
        </SwiperSlide>
       <SwiperSlide>
          <Slides/>
        </SwiperSlide><SwiperSlide>
          <Slides/>
        </SwiperSlide><SwiperSlide>
          <Slides/>
        </SwiperSlide><SwiperSlide>
          <Slides/>
        </SwiperSlide><SwiperSlide>
          <Slides/>
        </SwiperSlide><SwiperSlide>
          <Slides/>
        </SwiperSlide>
      </Swiper>
    </>
  );
}
