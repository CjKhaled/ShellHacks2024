'use client'
import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'

const Page = () => {
    const router = useRouter();
    const [userName, setUserName] = useState("User")
    const [balance, setBalance] = useState(0)

    useEffect(() => {
      // Retrieve the username from localStorage
      const storedUsername = localStorage.getItem('username')
      if (storedUsername) {
          setUserName(storedUsername)
      } else {
          // If no username is found, redirect to login
          router.push('/login')
      }


        // Generate random balance
        const randomAccountBalance = () => Math.floor(Math.random() * 10000)
        const newBalance = randomAccountBalance()
        setBalance(newBalance)

        // Store the balance in localStorage for the game page
        localStorage.setItem('accountBalance', newBalance.toString())
    }, [router])

    return (
        <div className="min-h-screen bg-green-100">
            <div className="container mx-auto mt-8 p-4">
                <div className="bg-white rounded-lg shadow-md p-6 max-w-md mx-auto">
                    <h2 className="text-2xl font-semibold mb-4">Welcome, {userName}!</h2>
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
                        href="/game"
                        className="mt-6 block bg-green-500 text-white text-center px-4 py-2 rounded hover:bg-green-600"
                    >
                        Start your Financial Future
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default Page