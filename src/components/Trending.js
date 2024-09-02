import React, { useRef, useState } from "react";
import { FaPlay, FaPause } from "react-icons/fa";
import dance1 from "../assets/videos/dance1.mp4";
import dance2 from "../assets/videos/dance2.mp4";
import dance3 from "../assets/videos/dance3.mp4";

const Trending = () => {
  const scrollRef = useRef(null);

  // Scroll function to move left or right
  const scroll = (scrollOffset) => {
    scrollRef.current.scrollBy({ left: scrollOffset, behavior: "smooth" });
  };

  // List of videos
  const videos = [
    {
      id: 1,
      label: "Most viewed",
      title: "Trending Videos",
      description: "Sed ut perspiciatis unde",
      level: "Expert",
      src: dance1,
    },
    {
      id: 2,
      label: "Most viewed",
      title: "Trending Videos",
      description: "Sed ut perspiciatis unde",
      level: "Intermediate",
      src: dance2,
    },
    {
      id: 3,
      title: "Trending Videos",
      description: "Sed ut perspiciatis unde",
      level: "Beginner",
      src: dance3,
    },
    {
      id: 4,
      title: "Trending Videos",
      description: "Sed ut perspiciatis unde",
      level: "Expert",
      src: dance1,
    },
    {
      id: 5,
      title: "Trending Videos",
      description: "Sed ut perspiciatis unde",
      level: "Expert",
      src: dance1,
    },
    {
      id: 6,
      title: "Trending Videos",
      description: "Sed ut perspiciatis unde",
      level: "Expert",
      src: dance1,
    },
    {
      id: 7,
      title: "Trending Videos",
      description: "Sed ut perspiciatis unde",
      level: "Expert",
      src: dance1,
    },
  ];

  return (
    <div
      className="py-8 px-4 bg-white"
      style={{
        background: "linear-gradient(to bottom, white 60%, #d3414c 40%)",
      }}
    >
      <h2 className="text-4xl font-bold text-center mb-12 text-red-600">
        Trending
      </h2>
      <div className="relative">
        <div ref={scrollRef} className="flex overflow-hidden w-full relative">
          {videos.map((video) => (
            <div
              key={video.id}
              className="w-1/4 min-w-[320px] box-border mr-4 bg-slate-100 shadow-lg rounded-[2rem] overflow-hidden flex-shrink-0 p-3 relative"
            >
              <VideoCard video={video} />
            </div>
          ))}
        </div>
        {/* Navigation Buttons */}
        <div className="flex justify-center mt-4">
          <button
            onClick={() => scroll(-300)}
            className="p-4 mx-4 text-3xl rounded-full hover:border-gray-300 focus:outline-none"
          >
            &larr;
          </button>
          <button
            onClick={() => scroll(300)}
            className="p-4 mx-4 text-3xl rounded-full hover:border-gray-300 focus:outline-none"
          >
            &rarr;
          </button>
        </div>
      </div>
    </div>
  );
};

const VideoCard = ({ video }) => {
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const handlePlayPause = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <>
      <video
        ref={videoRef}
        src={video.src}
        className="w-full h-auto rounded-[2rem]"
        controls={false}
      />
      {video.label && (
        <span className="absolute top-6 left-8 bg-purple-600 text-white text-xs font-semibold px-2 py-1 rounded">
          {video.label}
        </span>
      )}
      <div className="flex justify-between mb-12">
        <div className="p-4">
          <h3 className="text-lg font-semibold">{video.title}</h3>
          <p className="text-sm text-gray-500">{video.description}</p>
        </div>
        <div className="flex items-center mt-2">
          <span className="text-green-500 text-sm font-semibold">
            {video.level}
          </span>
        </div>
      </div>
      <div className="absolute inset-0 flex justify-center items-center opacity-0 hover:opacity-100 transition-opacity">
        <button
          onClick={handlePlayPause}
          className="bg-white rounded-full p-3 mb-28 shadow-lg"
        >
          {isPlaying ? (
            <FaPause className="w-8 h-8 text-red-500" />
          ) : (
            <FaPlay className="w-8 h-8 text-red-500" />
          )}
        </button>
      </div>
    </>
  );
};

export default Trending;
