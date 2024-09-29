import React, { useState, useEffect } from "react";

const Popup = ({ isOpen }) => {
  const [isVisible, setIsVisible] = useState(false);

  async function getScenario(iage, ibackground, ibalance) {
    const response = fetch("https://shellhacks2024-production.up.railway.app", {
      method: 'POST', headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        age: iage,
        background: ibackground,
        balance: ibalance
      })
    })

    //const payload = response.json()
  }
  

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
          
          <h2 className="text-3xl font-bold mb-6">Question</h2>

          
          <div className="flex flex-col mb-6">
            <h3 className="text-lg font-semibold">Category</h3>
            <p className="text-gray-700">This is the category description.</p>
          </div>

          
          <div className="flex flex-col space-y-6">
            
            <button
              onClick={handlePillClick}
              className="px-5 py-4 rounded-full bg-blue-200 text-blue-800 hover:bg-blue-300 transition"
            >
              Pill 1
            </button>
            <button
              onClick={handlePillClick}
              className="px-5 py-4 rounded-full bg-green-200 text-green-800 hover:bg-green-300 transition"
            >
              Pill 2
            </button>
            <button
              onClick={handlePillClick}
              className="px-5 py-4 rounded-full bg-red-200 text-red-800 hover:bg-red-300 transition"
            >
              Pill 3
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Popup;
