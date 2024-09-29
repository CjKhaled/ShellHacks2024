import React, { useState, useEffect } from "react";
import PopItems from "./PopItems";
import PopHeader from "./PopHeader";

const Popup = ({ isOpen, isSecond, choiceOne, choiceTwo, choiceThree, scenario, setEndResult, category, explanation  }) => {
  const [isVisible, setIsVisible] = useState(false);
  

  useEffect(() => {
    setIsVisible(true); // Start the fade-in effect when popup is rendered
  }, []);

  // Handle click on pills with fade-out effect
  const handlePillClick = () => {
    setIsVisible(false);

    setTimeout(() => {
      isOpen(false); // Close the first pop-up
    }, 300);


  };
  return (
    <div className="fixed inset-0 flex items-center justify-center transition-opacity duration-300">
      <div
        className={`bg-white p-10 rounded-lg w-[600px] shadow-lg transition-all duration-300 transform ${
          isVisible ? "opacity-100 scale-100" : "opacity-0 scale-95"
        }`}
      >
        <div className="flex flex-col space-y-8">
          
          {isSecond ? 
          <div className="">
            <h2>{explanation}</h2>
            <button
              onClick={handlePillClick}
              className="px-5 py-4 rounded-full bg-blue-200 text-blue-800 hover:bg-blue-300 transition align-center justify-center"
            >
              Close
            </button>
          </div>
           : <PopHeader category={category} scenario={scenario} />}

          {isSecond ? null : <PopItems setEndResult={setEndResult} choiceOne={choiceOne} choiceTwo={choiceTwo} choiceThree={choiceThree} handlePillClick={handlePillClick} />}
          
        </div>
      </div>
    </div>
  );
};

export default Popup;
