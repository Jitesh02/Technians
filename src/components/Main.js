import React, { useState, useRef } from "react";
import dance1 from "../assets/videos/dance1.mp4";
import dance2 from "../assets/videos/dance2.mp4";
import dance3 from "../assets/videos/dance3.mp4";
import logo2 from "../assets/images/logo2.jpg";

const Main = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };
  // State to track which video is playing
  const [playingIndex, setPlayingIndex] = useState(null);

  const videoRefs = useRef([]);

  // Function to handle play/pause
  const handlePlayPauseClick = (index) => {
    const video = videoRefs.current[index];
    if (video) {
      if (playingIndex === index) {
        if (video.paused) {
          video.play();
        } else {
          video.pause();
        }
      } else {
        if (playingIndex !== null && videoRefs.current[playingIndex]) {
          videoRefs.current[playingIndex].pause();
        }

        video.play();
        setPlayingIndex(index);
      }
    }
  };

  return (
    <div
      className="relative bg-cover bg-center"
      style={{
        backgroundImage:
          "url('https://img.freepik.com/free-photo/ai-generated-sunflowers_23-2150681778.jpg?t=st=1725023932~exp=1725027532~hmac=54976ee6c5158235921b1c21a96a298f4fce1827ab82d726b63e9571792cddef&w=1380')",
        backgroundSize: "cover",
      }}
    >
      {/* Navbar */}
      <nav className="max-w-screen w-4/5 mx-auto px-4 flex flex-wrap items-center justify-between py-3">
        <a
          className="text-3xl md:text-5xl mt-4 font-semibold focus:outline-none"
          href=""
        >
          <img
            src={logo2}
            alt="Logo"
            className="h-12 lg:w-20 bg-[#F3F4F8] mix-blend-multiply	 md:h-16"
          />
        </a>

        <div className="flex items-center gap-x-2">
          <div className="relative inline-block text-left">
            <div>
              <button
                type="button"
                className="inline-flex justify-center w-full rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none"
                onClick={toggleDropdown}
              >
                Course
                <svg
                  className="-mr-1 ml-2 h-5 w-5"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 011.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>
            </div>

            {isOpen && (
              <div
                className="origin-top-right absolute right-0 mt-2 lg:w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none z-20"
                role="menu"
                aria-orientation="vertical"
              >
                <div className="py-1" role="none">
                  <a
                    href="#"
                    className="text-gray-700 block px-4 py-2 text-sm hover:bg-gray-100"
                    role="menuitem"
                  >
                    Hip Hop
                  </a>
                  <a
                    href="#"
                    className="text-gray-700 block px-4 py-2 text-sm hover:bg-gray-100"
                    role="menuitem"
                  >
                    Western
                  </a>
                  <a
                    href="#"
                    className="text-gray-700 block px-4 py-2 text-sm hover:bg-gray-100"
                    role="menuitem"
                  >
                    Break Dance
                  </a>
                </div>
              </div>
            )}
          </div>

          <button
            type="button"
            className="py-2 px-4 md:py-2 md:px-6 inline-flex items-center gap-x-2 text-xs md:text-sm font-medium rounded-lg border border-black bg-white text-gray-800 shadow-sm hover:bg-gray-50 focus:outline-none"
          >
            Login
          </button>
          <button
            type="button"
            className="py-2 px-4 md:py-2 md:px-6 inline-flex items-center gap-x-2 text-xs md:text-sm font-medium rounded-lg border border-gray-200 bg-red-700 text-white shadow-sm hover:bg-red-800 focus:outline-none"
          >
            Register
          </button>
        </div>
      </nav>

      {/* Content Container */}
      <div className="relative z-10 flex flex-col justify-center items-center px-4">
        {/* Image */}
        <div className="mb-4 mt-8 flex justify-center w-3/4 max-w-sm md:max-w-md lg:max-w-sm">
          <img
            src="https://img.freepik.com/free-vector/indian-people-dancing-bollywood_23-2148468334.jpg?w=1060&t=st=1725014016~exp=1725014616~hmac=69a314335721d318be52a33153d3336b692d18722ea72ae8f23c3932723c4b15"
            alt="Dance"
            className="w-full h-auto object-cover rounded-lg border-8 border-black"
          />
        </div>

        {/* Heading & Button */}
        <div className="mb-8 w-2/3 flex flex-col items-start justify-start ">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-black mb-4">
            <span className="block">Learn Dance</span>
            <span className="block mt-2 md:mt-4">Online & Offline</span>
          </h2>

          <div>
            <button className="bg-red-600 text-white py-2 px-4 rounded-lg hover:bg-red-700">
              <span className="text-sm md:text-base">
                Start your free trial
              </span>
            </button>
          </div>
        </div>

        {/* Dance Videos */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mt-8 lg:w-2/6   mx-auto mb-8">
          {[dance1, dance2, dance3].map((videoSrc, index) => (
            <div key={index} className="relative rounded-lg overflow-hidden">
              <video
                ref={(el) => (videoRefs.current[index] = el)}
                src={videoSrc}
                title={`Dance Video ${index + 1}`}
                className="w-full h-48 md:h-56 object-cover"
                style={{ objectFit: "cover" }}
              />
              <button
                onClick={() => handlePlayPauseClick(index)}
                className={`absolute inset-0 flex items-center justify-center bg-opacity-50 transition-opacity duration-300 ${
                  playingIndex === index && !videoRefs.current[index].paused
                    ? "opacity-0"
                    : "opacity-100"
                }`}
              >
                {playingIndex === index &&
                videoRefs.current[index] &&
                !videoRefs.current[index].paused ? (
                  <svg
                    className="w-12 h-12 text-white"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path d="M8 5v14l11-7z" />
                  </svg>
                ) : (
                  <svg
                    className="w-12 h-12 text-white"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path d="M6 19L19 12 6 5v14z" />
                  </svg>
                )}
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Main;
