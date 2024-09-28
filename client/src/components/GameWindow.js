import React from 'react';
import { Link } from 'react-router-dom';

function GameWindow() {
  return (
    <div className="min-h-screen bg-gray-800 flex flex-col">
      <header className="bg-gray-900 text-white p-4">
        <Link to="/" className="text-blue-400 hover:text-blue-300">Back to Menu</Link>
      </header>
      <main className="flex-grow flex items-center justify-center">
        <div className="text-white text-2xl">
          Game content will go here
        </div>
      </main>
    </div>
  );
}

export default GameWindow;