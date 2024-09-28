import React from "react";
import Link from "next/link";

const Navbar = ({ userInitials = "DD", skillLevel = 0 }) => {
  return (
    <nav className="bg-green-600 text-white p-4 flex justify-between items-center">
      <div className="flex items-center">
        <span className="mr-2 text-xl">💰</span>
        <Link href={'/home'} className="text-xl font-bold">
          Future Finance
        </Link>
      </div>
      <div className="flex items-center">
        <span className="mr-4">Skill Level: {skillLevel}</span>
        <div className="bg-white text-green-600 rounded-full w-8 h-8 flex items-center justify-center">
          {userInitials}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
