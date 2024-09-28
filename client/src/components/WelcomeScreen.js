import React from 'react';
import { Link } from 'react-router-dom';

function WelcomeScreen() {
  return (
    <div className="min-h-screen bg-gray-100 p-4">
      <div className="max-w-4xl mx-auto">
        <header className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold">Financial Literacy Game</h1>
          {/* UserProfile component will go here */}
        </header>
        <main className="bg-black shadow-md rounded-lg p-6">
          <h2 className="text-2xl font-semibold mb-4">Welcome to the Game!</h2>
          <p className="mb-4">Learn about financial literacy in a fun and interactive way.</p>
          <Link to="/game" className="inline-block bg-blue-500 text-black px-4 py-2 rounded hover:bg-blue-600">
            Start Game
          </Link>
        </main>
      </div>
    </div>
  );
}

export default WelcomeScreen;