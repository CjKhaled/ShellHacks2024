'use client';

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { UserCircle, ChevronDown } from "lucide-react";
import { useRouter, usePathname } from 'next/navigation';

const Navbar = ({ userInitials = "", skillLevel = 0 }) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const router = useRouter();
  const pathname = usePathname();
  const dropdownRef = useRef<HTMLDivElement>(null);

  const checkAuthStatus = () => {
    const username = localStorage.getItem('username');
    setIsAuthenticated(!!username);
  };

  useEffect(() => {
    checkAuthStatus();

    window.addEventListener('authStatusChanged', checkAuthStatus);

    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsDropdownOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      window.removeEventListener('authStatusChanged', checkAuthStatus);
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const handleLogout = () => {
    router.push('/login');
  };

  const isAuthPage = pathname === '/login' || pathname === '/signup';

  return (
    <nav className="bg-green-600 text-white p-4 flex justify-between items-center">
      <div className="flex items-center">
        <span className="mr-2 text-xl">💰</span>
        <Link href={'/home'} className="text-xl font-bold">
          FinSavvy
        </Link>
      </div>
      <div className="flex items-center">
        <span className="mr-44">Skill Level: {skillLevel}</span>
        <div className="relative" ref={dropdownRef}>
          <button 
            onClick={() => setIsDropdownOpen(!isDropdownOpen)}
            className="flex items-center focus:outline-none"
          >
            <div className="bg-white text-green-600 rounded-full w-8 h-8 flex items-center justify-center mr-2">
              {userInitials ? userInitials : <UserCircle size={24} />}
            </div>
            <ChevronDown size={20} />
          </button>
          {isDropdownOpen && (
            <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-10">
              {isAuthenticated && !isAuthPage ? (
                <button
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 w-full text-left"
                >
                  <Link onClick={handleLogout} href={'/logout'}>Logout</Link>

                </button>
              ) : (
                <>
                  <Link href="/login" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                    Login
                  </Link>
                  <Link href="/signup" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                    Sign Up
                  </Link>
                </>
              )}
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;