import React from 'react'
import Link from 'next/link'

const page = () => {
    const userName = "John doe"
    const balance = 1000
  return (
    <div className="min-h-screen bg-green-100">
      <div className="container mx-auto mt-8 p-4">
        <div className="bg-white rounded-lg shadow-md p-6 max-w-md mx-auto">
          <h2 className="text-2xl font-semibold mb-4">{userName}</h2>
          <div className="flex justify-between items-center">
            <div className="w-24 h-24 bg-gray-300 rounded-full">
              {/* Character placeholder */}
            </div>
            <div className="text-right">
              <p className="text-2xl font-bold">${balance}</p>
              <p className="text-gray-600">Balance</p>
            </div>
          </div>
          <Link
            href={'/game'}
            className="mt-6 block bg-green-500 text-white text-center px-4 py-2 rounded hover:bg-green-600"
          >
            Open Game
          </Link>
        </div>
      </div>
    </div>
  );
}

export default page