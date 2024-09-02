import React, { useState } from "react";
import { FaStar, FaArrowLeft, FaArrowRight } from "react-icons/fa";
import dpImage from "../assets/images/dp.png";

// data
const reviews = [
  {
    id: 1,
    name: "John Doe",
    position: "Student",
    stars: 4,
    description:
      "Great course! Very informative and engagingGreat course! Very informative and engagingGreat course! Very informative and engagingGreat course! Very informative and engagingGreat course! Very informative and engaging .",
    dp: dpImage,
  },
  {
    id: 2,
    name: "Jane Smith",
    position: "Professional",
    stars: 5,
    description:
      "Amazing experience! The content was top-notch.Great course! Very informative and engagingGreat course! Very informative and engagingGreat course! Very informative and engagingGreat course! Very informative and engaging",
    dp: dpImage,
  },
  {
    id: 3,
    name: "Alice Johnson",
    position: "Learner",
    stars: 3,
    description:
      "Good course but could use more examplesGreat course! Very informative and engagingGreat course! Very informative and engagingGreat course! Very informative and engagingGreat course! Very informative and engaging.",
    dp: dpImage,
  },
];

const Students = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % reviews.length);
  };

  const handlePrevious = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + reviews.length) % reviews.length
    );
  };

  const review = reviews[currentIndex];

  return (
    <div className="px-4 sm:px-6 lg:px-8 py-6">
      <h2 className="text-4xl text-red-600 text-center mb-12 font-bold">
        Student Speaks
      </h2>
      <div className="flex flex-col md:flex-row p-6 mb-12 rounded-lg w-full max-w-5xl mx-auto ">
        {/* Left Side */}
        <div className="md:w-1/3 pr-6  md:border-gray-300">
          <ul className="space-y-4">
            {reviews.map((review, index) => (
              <li
                key={review.id}
                className={`flex items-center p-4 rounded-lg cursor-pointer hover:bg-gray-200 transition duration-300 ${
                  index === currentIndex ? "bg-[#ffffff] shadow-2xl" : ""
                }`}
                onClick={() => setCurrentIndex(index)}
              >
                <img
                  src={review.dp}
                  alt={review.name}
                  className="w-12 h-12 rounded-full mr-4 object-cover"
                />
                <div>
                  <h3 className="font-semibold text-lg">{review.name}</h3>
                  <p className="text-gray-600 text-sm">{review.position}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>

        {/* Right Side */}
        <div className="md:w-2/3 pl-6">
          <h2 className="text-2xl font-semibold mb-2">{review.name}</h2>
          <div className="flex items-center mb-4">
            {[...Array(5)].map((_, index) => (
              <FaStar
                key={index}
                className={`w-6 h-6 ${
                  index < review.stars ? "text-yellow-500" : "text-gray-300"
                }`}
              />
            ))}
          </div>
          <p className="text-gray-700 mb-4">{review.description}</p>

          {/* Navigation Buttons */}
          <div className="flex justify-center mt-4">
            <button
              onClick={handlePrevious}
              className="flex items-center  font-semibold mr-4"
            >
              <FaArrowLeft className="w-6 h-6 mr-2" />
            </button>
            <button
              onClick={handleNext}
              className="flex items-center  font-semibold"
            >
              <FaArrowRight className="w-6 h-6 ml-2" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Students;
