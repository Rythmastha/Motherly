import React, { useState } from "react";
import { motion } from "framer-motion";

function MindfulMeditation() {
  const [currentVideo, setCurrentVideo] = useState("https://www.youtube.com/embed/9SQwSqAQ9UQ"); // Default video
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0); // Track current video index

  const videos = [
    {
      title: "Mindful Meditation 1",
      url: "https://www.youtube.com/embed/9SQwSqAQ9UQ",
    },
    {
      title: "Mindful Meditation 2",
      url: "https://www.youtube.com/embed/LU2qdo74_dI",
    },
    {
      title: "Mindful Meditation 3",
      url: "https://www.youtube.com/embed/hj9kN7MtPlc",
    },
    {
      title: "Mindful Meditation 4",
      url: "https://www.youtube.com/embed/3bS73KZpFVE",
    },
    {
      title: "Mindful Meditation 5",
      url: "https://www.youtube.com/embed/eSAQs28xfaw",
    },
    {
      title: "Mindful Meditation 6",
      url: "https://www.youtube.com/embed/d7TC9w2xr_g",
    },
  ];

  const handleVideoClick = (url, index) => {
    setCurrentVideo(url);
    setCurrentVideoIndex(index); // Update the current video index
  };

  return (
    <motion.div
      className="flex flex-col md:flex-row items-start p-10 mt-10 bg-white"
      initial={{ opacity: 0, y: 20 }} // Initial state for the whole component
      animate={{ opacity: 1, y: 0 }} // Animation state
      exit={{ opacity: 0, y: -20 }} // Exit animation
      transition={{ duration: 0.5 }} // Duration for the animations
    >
      <div className="flex-1">
        {/* Video Player */}
        <iframe
          src={currentVideo}
          width="100%"
          height="400" // Set fixed height for the video
          title="Video Player"
          className="border-none"
        />
      </div>

      {/* Button Container */}
      <div className="bg-[#FFF4F4] p-6 rounded-lg shadow-md ml-4 w-80 h-[400px]">
        
        {/* Currently Playing Button */}
        <motion.button
          className="bg-[#FFF4F4] w-full py-2 rounded-none my-1 font-bold text-[#F38FB1] border border-[#F38FB1] text-center"
          whileHover={{ scale: 1.05 }} // Scale effect on hover
          whileTap={{ scale: 0.95 }} // Scale effect when tapped
        >
          Currently Playing: {currentVideoIndex + 1} / {videos.length} {/* Display current video index */}
        </motion.button>

        {/* Video Selection Buttons */}
        {videos.map((video, index) => (
          <motion.button
            key={index}
            onClick={() => handleVideoClick(video.url, index)}
            className="bg-[#FFF4F4] w-full py-2 rounded-none my-1 font-bold text-[#F38FB1] border border-[#F38FB1] text-center"
            whileHover={{ scale: 1.05 }} // Scale effect on hover
            whileTap={{ scale: 0.95 }} // Scale effect when tapped
            style={{ marginBottom: "0.5rem" }} // Add spacing between buttons
          >
            {video.title}
          </motion.button>
        ))}
      </div>
    </motion.div>
  );
}

export default MindfulMeditation;
