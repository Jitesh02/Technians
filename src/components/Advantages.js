import React, { useState } from "react";
import { FaChevronLeft, FaChevronRight, FaFilm } from "react-icons/fa";

const advantages = [
  {
    description:
      "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam.",
  },
  {
    description:
      "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur.",
  },
  {
    description:
      "Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit.",
  },
  {
    description:
      "Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit.",
  },
  {
    description:
      "Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit.",
  },
  {
    description:
      "Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit.",
  },
];

const Advantages = () => {
  const slidesToShow = 3;
  const totalSlides = advantages.length;
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === totalSlides - slidesToShow ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? totalSlides - slidesToShow : prevIndex - 1
    );
  };

  return (
    <div className="flex flex-col lg:flex-row rounded-lg overflow-hidden w-5/6 h-full mb-20 mt-20  px-4">
      {/* Slider Section */}
      <div className="lg:w-2/3 overflow-hidden mt-12 relative">
        <div
          className="relative flex transition-transform duration-500"
          style={{
            transform: `translateX(-${currentIndex * (100 / slidesToShow)}%)`,
          }}
        >
          {advantages.map((advantage, index) => (
            <div
              key={index}
              className="flex-shrink-0 w-full sm:w-1/2 lg:w-1/3 p-4 bg-slate-300 mr-4 lg:mr-8 rounded-lg"
              style={{ minWidth: `${100 / slidesToShow}%` }}
            >
              <FaFilm
                className={`w-6 h-6 mb-2 ${
                  index % 3 === 0
                    ? "text-pink-500"
                    : index % 3 === 1
                    ? "text-blue-400"
                    : "text-orange-400"
                }`}
              />
              <h4 className="font-bold mb-2">Advantages</h4>
              <p className="text-sm text-gray-600">{advantage.description}</p>
            </div>
          ))}
        </div>
      </div>
      {/* Advantage Section */}
      <div className="lg:w-1/2 lg:h-4/5 bg-[#414143] text-white p-8 lg:p-20 rounded-tr-[8rem] rounded-bl-[8rem] flex flex-col justify-between mt-12 lg:mt-0">
        <div className="text-center lg:text-left">
          <h2 className="text-4xl font-bold mb-2 text-red-500">Advantages</h2>
          <div className="bg-red-500 h-1 w-1/4 mx-auto lg:mx-0 mb-4"></div>
          <h3 className="text-2xl lg:text-4xl font-bold mb-4">
            We create & build beautiful products
          </h3>
          <p>
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem
            accusantium doloremque laudantium totam rem aperiam.
          </p>
        </div>
        <div className="flex justify-center space-x-2 mt-4">
          <button
            onClick={prevSlide}
            className="p-2 rounded-full hover:bg-gray-600 transition-colors"
          >
            <FaChevronLeft size={24} />
          </button>
          <button
            onClick={nextSlide}
            className="p-2 rounded-full hover:bg-gray-600 transition-colors"
          >
            <FaChevronRight size={24} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Advantages;
