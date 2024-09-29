'use client'
import React, { useState, useEffect } from "react";
import { useRouter } from 'next/navigation'

const Page = () => {
  const router = useRouter()
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
      }))
    } else {
      // If no username or balance is found, redirect to login
      router.push('/login')
    }
  }, [router])

  const handleAgeIncrement = () => {
    setGameState(prevState => ({
      ...prevState,
      age: prevState.age + 1,
      // Here you can add logic to update the balance based on the user's actions
      // For example:
      // balance: prevState.balance + 100
    }))
    // Don't forget to update localStorage with the new balance
    // localStorage.setItem('accountBalance', newBalance.toString())
  }

  return (
    <div className="min-h-screen bg-green-100 flex flex-col">
      <div className="flex-grow flex">
        <main className="flex-grow p-4">
          <h1 className="text-3xl font-bold mb-4">{gameState.userName}</h1>
          <div className="w-32 h-32 bg-gray-300 rounded-full mb-4">
            {/* Character placeholder */}
          </div>
          <p className="text-xl">Age: {gameState.age}</p>
          <p className="text-xl">Balance: ${gameState.balance}</p>
        </main>
        <aside className="w-64 bg-green-200 p-4">
          <h2 className="text-xl font-semibold mb-4">Financial Skills</h2>
          <ul>
            {gameState.categories.map((category, index) => (
              <li key={index} className="mb-2">
                {category.name}: Level {category.level}
              </li>
            ))}
          </ul>
        </aside>
      </div>
      <button
        onClick={handleAgeIncrement}
        className="fixed bottom-4 right-4 bg-blue-500 text-white rounded-full w-12 h-12 text-2xl"
      >
        +
      </button>
    </div>
  );
};

export default Page;