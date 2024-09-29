'use client'
import React, { useState, useEffect } from "react";
import Popup from "../components/Popup"
import { useRouter } from 'next/navigation'
import { User } from "lucide-react";
import DaScroll from "../components/ScrollDiv"

const Page = () => {
  const router = useRouter()
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [gameState, setGameState] = useState({
    userName: "User",
    balance: 0,
    age: 16,
    categories: [
      {name: "Budgeting", level: 1},
      {name: "Retirement Planning", level: 1},
      {name: "Insurance", level: 1},
      {name: "Credit Score", level: 1},
      {name: "Financial Scams", level: 1},
      {name: "Tax Planning", level: 1},
      {name: "Investing", level: 1}, 
      {name:"Debt Management", level: 1},
      {name: "Emergency Fund", level: 1},
      {name: "Inflation", level: 1},
    ]
  });

  useEffect(() => {
    // Retrieve the username and balance from localStorage
    const storedUsername = localStorage.getItem('username')
    const storedBalance = localStorage.getItem('accountBalance')
    
    if (storedUsername && storedBalance) {
      setGameState(prevState => ({
        ...prevState,
        userName: storedUsername,
        balance: parseInt(storedBalance, 10)
      }));
    } else {
      // If no username or balance is found, redirect to login
      router.push('/login')
    }
  }, [router]);

  const handleAgeIncrement = () => {
    setGameState(prevState => ({
      ...prevState,
      age: prevState.age + 1,
      // Here you can add logic to update the balance based on the user's actions
      // For example:
      // balance: prevState.balance + 100
    }));
    // Don't forget to update localStorage with the new balance
    // localStorage.setItem('accountBalance', newBalance.toString())
  };

  return (
    <div className="min-h-screen bg-green-100 flex">
      {/* Left column - User Profile */}
      <div className="w-1/4 p-4 flex flex-col items-center justify-start">
        <h1 className="text-2xl font-bold mb-6">{gameState.userName}</h1>
        <div className="w-32 h-32 bg-gray-200 rounded-full mb-4 flex items-center justify-center">
          <User size={80} className="text-gray-400" />
        </div>
        <div className="text-center">
          <p className="text-xl mb-2">Age: {gameState.age}</p>
          <p className="text-xl font-semibold">Balance: ${gameState.balance.toLocaleString()}</p>
        </div>
      </div>

      {/* Middle column - Main game area */}
      <div className="flex-grow flex flex-col justify-center items-center p-4">
        
      </div>
      <div className="w-1/2 p-4 bg-white">
      <DaScroll/>
        {isPopupOpen && <Popup isOpen={setIsPopupOpen} />}
        {/* Add your main game content here */}
        <h2 className="text-2xl font-bold mb-4 text-center">Game Area</h2>
        <p></p>
      </div>

      {/* Right column - Financial Skills */}
      <div className="w-1/4 bg-green-100 p-4">
        <h2 className="text-2xl font-bold mb-4 text-center">Financial Skills</h2>
        <ul>
          {gameState.categories.map((category, index) => (
            <li key={index} className="mb-2">
              {category.name}: Level {category.level}
            </li>
          ))}
        </ul>
      </div>

      <button
        onClick={() => {
          handleAgeIncrement 
          setIsPopupOpen(true)
        }}
        className="fixed bottom-4 right-4 bg-blue-500 text-white rounded-full w-12 h-12 text-2xl"
      >
        +
      </button>
    </div>
  );
};

export default Page;