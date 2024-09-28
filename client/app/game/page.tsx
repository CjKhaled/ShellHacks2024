'use client'
import React, { useState } from "react";

const page = () => {
  const [userName] = useState("John Doe");
  const [age, setAge] = useState(16);
  const [categories] = useState([
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
  ]);

  return (
    <div className="min-h-screen bg-green-100 flex flex-col">
      <div className="flex-grow flex">
        <main className="flex-grow p-4">
          <h1 className="text-3xl font-bold mb-4">{userName}</h1>
          <div className="w-32 h-32 bg-gray-300 rounded-full mb-4">
            {/* Character placeholder */}
          </div>
          <p className="text-xl">Age: {age}</p>
        </main>
        <aside className="w-64 bg-green-200 p-4">
          <h2 className="text-xl font-semibold mb-4">Financial Skills</h2>
          <ul>
            {categories.map((category, index) => (
              <li key={index} className="mb-2">
                {category.name}: Level {category.level}
              </li>
            ))}
          </ul>
        </aside>
      </div>
      <button
        onClick={() => setAge(age + 1)}
        className="fixed bottom-4 right-4 bg-blue-500 text-white rounded-full w-12 h-12 text-2xl"
      >
        +
      </button>
    </div>
  );
};

export default page;
