import React, { useState } from "react";
import { motion } from "framer-motion"; // Import framer-motion

function JournalPage() {
  const [selectedDate, setSelectedDate] = useState(null); // State to hold the selected date
  const [journalEntries, setJournalEntries] = useState({}); // To store journal entries

  // Example dates for the journal entries
  const dates = [
    "23rd Jan, 2024",
    "22nd Jan, 2024",
    "21st Jan, 2024",
    "20th Jan, 2024",
    "19th Jan, 2024",
    "18th Jan, 2024",
    "17th Jan, 2024",
    "16th Jan, 2024",
    "15th Jan, 2024",
    "14th Jan, 2024",
    "13th Jan, 2024",
    "12th Jan, 2024",
  ];

  // Function to handle saving the journal entry for the selected date
  const handleSave = () => {
    const entry = document.getElementById("journalEntry").value;
    setJournalEntries({ ...journalEntries, [selectedDate]: entry });
    setSelectedDate(null); // Go back to the date selection view after saving
  };

  // Animation variants for fade-in effect
  const containerVariants = {
    hidden: { opacity: 0, y: 20 }, // Start hidden and slightly lower
    visible: { opacity: 1, y: 0 }, // Fade in and move to original position
  };

  return (
    <motion.div
      className="flex flex-col px-8 py-4"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
      transition={{ duration: 0.5 }} // Adjust duration for the fade-in effect
    >
      {/* Back Button */}
      <a
        href="../user" // Change this to the actual href for the Prof page
        className="bg-[#F38FB1] text-white font-bold py-2 px-4 mb-6 w-24 rounded-full shadow-md transform transition duration-300 ease-in-out hover:scale-105 hover:-translate-y-2"
      >
        Back
      </a>

      {/* Show Journal Entry or Date Selection */}
      {selectedDate ? (
        <div className="flex flex-col">
          <div className="font-bold text-2xl mb-4">{`Journal Entry for ${selectedDate}`}</div>
          <textarea
            id="journalEntry"
            rows="10"
            className="p-4 mb-4 bg-[#FFF4F4] text-black rounded-md w-full"
            defaultValue={journalEntries[selectedDate] || ""}
          />
          <button
            onClick={handleSave}
            className="bg-[#F38FB1] text-white font-bold py-3 px-6 rounded-full shadow-md transform transition duration-300 ease-in-out hover:scale-105 hover:-translate-y-2"
          >
            Save Entry
          </button>
        </div>
      ) : (
        <div>
          <div className="font-bold text-3xl mb-6 mt-20">Journal Entries</div>
          <div className="grid grid-cols-3 gap-4">
            {dates.map((date, index) => (
              <button
                key={index}
                className="bg-[#FFF4F4] text-black font-bold py-3 px-6 rounded-full shadow-md transform transition duration-300 ease-in-out hover:scale-105 hover:-translate-y-2 hover:bg-[#F38FB1]" // Hover: zoom in and move up
                onClick={() => setSelectedDate(date)}
              >
                {date}
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Load More Button */}
      {!selectedDate && (
        <button className="mt-6 bg-[#F38FB1] text-white font-bold py-3 px-6 rounded-full shadow-md transform transition duration-300 ease-in-out hover:scale-105 hover:-translate-y-2 hover:bg-[#FFB0C7]">
          Load More
        </button>
      )}
    </motion.div>
  );
}

export default JournalPage;
