import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { EffectCoverflow, Pagination, Navigation } from "swiper/modules";
import "../styles/carousel.css"

import slide_image_1 from "../assets/images/img1.jpg";
import slide_image_2 from "../assets/images/img2.jpg";
import slide_image_3 from "../assets/images/img3.jpg";
import slide_image_4 from "../assets/images/img4.jpg";
import slide_image_5 from "../assets/images/img5.jpg";

const slideData = [
  {
    image: slide_image_1,
    title: "Hip Hop",
    description:
      "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque.",
  },
  {
    image: slide_image_2,
    title: "Classical Dance",
    description:
      "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque.",
  },
  {
    image: slide_image_3,
    title: "Bhangra",
    description:
      "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque.",
  },
  {
    image: slide_image_4,
    title: "Contemporary Dance",
    description:
      "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque.",
  },
  {
    image: slide_image_5,
    title: "Break Dance",
    description:
      "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque.",
  },
];

function Helo() {
  return (
    <div className="w-full md:w-3/4 m-auto h-screen overflow-hidden mt-20">
      <h1 className="text-4xl text-red-500 font-bold md:text-5xl text-center  mb-20">
        Variety Of Styles
      </h1>
      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        loop={true}
        slidesPerView={"auto"}
        coverflowEffect={{
          rotate: 0,
          stretch: 50,
          depth: 150,
          modifier: 1,
          slideShadows: true,
        }}
        pagination={{ el: ".swiper-pagination", clickable: true }}
        navigation={{
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
          clickable: true,
        }}
        modules={[EffectCoverflow, Pagination, Navigation]}
        className="relative w-5/6 h-2/3 py-8 "
      >
        {slideData.map((slide, index) => (
          <SwiperSlide key={index} className="relative w-48 md:w-64 h-full">
            <div className="lg:flex items-center justify-center w-full h-full bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden">
              <img
                className="w-full h-full object-cover m-auto"
                src={slide.image}
                alt={slide.title}
              />
              <div className="flex flex-col justify-center w-full lg:p-4 md:p-8 text-white  bg-opacity-50">
                <h5 className="mb-2 text-xl md:text-4xl m-auto font-bold">
                  {slide.title}
                </h5>
                <p className="mb-2 p-4 text-sm md:text-xl">
                  {slide.description}
                </p>
                <button className="ml-4 md:p-2 w-1/3 lg:w-1/2 bg-red-500 text-white rounded-lg shadow-md hover:bg-red-600 transition-colors">
                  Learn now
                </button>
              </div>
            </div>
          </SwiperSlide>
        ))}
        <div className="slider-controler flex justify-center items-center absolute bottom-8 w-full *: mb-16 lg:hidden">
          <div className="swiper-button-prev slider-arrow  w-8 h-8 md:w-12 md:h-12 rounded-full  flex justify-center items-center shadow-lg">
            <ion-icon
              name="arrow-back-outline"
              className="text-sm md:text-xl text-gray-900"
            ></ion-icon>
          </div>
          <div className="swiper-button-next slider-arrow  w-8 h-8 md:w-12 md:h-12 rounded-full flex justify-center items-center shadow-lg">
            <ion-icon
              name="arrow-forward-outline"
              className="text-sm md:text-xl text-gray-900"
            ></ion-icon>
          </div>
          <div className="swiper-pagination"></div>
        </div>
      </Swiper>
    </div>
  );
}

export default Helo;
