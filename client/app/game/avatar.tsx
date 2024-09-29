'use client';

import React from 'react';

interface AvatarProps {
  balance: number;
}

const Avatar: React.FC<AvatarProps> = ({ balance }) => {
  const getAvatarStyle = (): string => {
    if (balance <= 3333) {
      return 'sad';
    } else if (balance <= 7500) {
      return 'neutral';
    } else {
      return 'happy';
    }
  };

  const avatarStyle = getAvatarStyle();

  return (
    <>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" className="w-40 h-40"> {/* Increased size here */}
        <circle cx={50} cy={50} r={45} fill="#FFD700" />
        <circle cx={35} cy={40} r={5} fill="#000" />
        <circle cx={65} cy={40} r={5} fill="#000" />
        
        {avatarStyle === 'sad' && (
          <path d="M 30 70 Q 50 60 70 70" fill="none" stroke="#000" strokeWidth={3} />
        )}
        {avatarStyle === 'neutral' && (
          <line x1={30} y1={70} x2={70} y2={70} stroke="#000" strokeWidth={3} />
        )}
        {avatarStyle === 'happy' && (
          <path d="M 30 65 Q 50 80 70 65" fill="none" stroke="#000" strokeWidth={3} />
        )}
      </svg>
    </>
  );
};

export default Avatar;