import React, { useState } from "react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import dance from "../assets/videos/dance1.mp4";
import img1 from "../assets/images/img1.jpg";
import img2 from "../assets/images/img2.jpg";
import img3 from "../assets/images/img3.jpg";
import img4 from "../assets/images/img4.jpg";
import img5 from "../assets/images/img5.jpg";

const VideoCard = () => {
  const [isPlaying, setIsPlaying] = useState(false);

  const handlePlayPause = () => {
    const video = document.getElementById("video");
    if (isPlaying) {
      video.pause();
    } else {
      video.play();
    }
    setIsPlaying(!isPlaying);
  };

  return (
    <div
      className="pb-20"
      style={{
        background: "linear-gradient(to bottom, white 60%, #414143 40%)",
      }}
    >
      <div className="flex flex-col md:flex-row gap-8 mt-24 w-full max-w-6xl mx-auto mb-8 px-4">
        {/* Left Side */}
        <div className="bg-white p-6 rounded-lg shadow-md flex-1 md:w-1/3">
          <div className="relative">
            <video
              id="video"
              className="w-full h-64 rounded-lg"
              onClick={handlePlayPause}
              controls
              src={dance}
            />
          </div>
          <h2 className="mt-4 text-xl font-bold">Learn at your own pace</h2>
          <p className="text-gray-600 mt-2">
            Learn exciting dance moves with this video tutorial.
          </p>
        </div>

        {/* Right Side */}
        <div className="flex flex-col gap-8 flex-1 md:w-2/3">
          <div className="bg-white p-6 lg:ml-20 rounded-lg">
            <h3 className="text-3xl md:text-5xl font-bold mb-2 text-red-600">
              Features
            </h3>
            <p className="text-gray-600">
              Discover the features of our dance tutorial, including
              step-by-step instructions.
            </p>
            <button className="mt-4 bg-red-700 text-white px-4 py-2 rounded">
              Know More
            </button>
          </div>

          {/* Carousel */}
          <div className="pt-4 rounded-lg ">
            <Swiper
              modules={[Pagination, Autoplay]}
              loop={true}
              autoplay={{ delay: 2000, disableOnInteraction: false }}
              slidesPerView={1}
              spaceBetween={10}
              breakpoints={{
                640: {
                  slidesPerView: 2,
                  spaceBetween: 15,
                },
                768: {
                  slidesPerView: 3,
                  spaceBetween: 20,
                },
              }}
              className="lg:h-48 lg:w-5/6 "
            >
              <SwiperSlide>
                <img
                  src={img1}
                  alt="Slide 1"
                  className="rounded-lg lg:h-full lg:w-full object-cover "
                />
              </SwiperSlide>
              <SwiperSlide>
                <img
                  src={img2}
                  alt="Slide 2"
                  className="rounded-lg h-full w-full object-cover"
                />
              </SwiperSlide>
              <SwiperSlide>
                <img
                  src={img3}
                  alt="Slide 3"
                  className="rounded-lg h-full w-full object-cover"
                />
              </SwiperSlide>
              <SwiperSlide>
                <img
                  src={img4}
                  alt="Slide 4"
                  className="rounded-lg h-full w-full object-cover"
                />
              </SwiperSlide>
              <SwiperSlide>
                <img
                  src={img5}
                  alt="Slide 5"
                  className="rounded-lg h-full w-full object-cover"
                />
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoCard;
