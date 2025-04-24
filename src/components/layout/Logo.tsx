
import React from 'react';

const Logo = () => {
  return (
    <div className="flex items-center">
      <svg 
        width="50" 
        height="50" 
        viewBox="0 0 100 100" 
        className="mr-2"
      >
        <rect 
          x="10" 
          y="10" 
          width="80" 
          height="80" 
          rx="15" 
          fill="#9b87f5" 
        />
        <text 
          x="50%" 
          y="50%" 
          dominantBaseline="middle" 
          textAnchor="middle" 
          fontWeight="bold" 
          fontSize="40" 
          fill="white"
          className="font-serif"
        >
          SN
        </text>
      </svg>
      <div className="flex flex-col">
        <span className="text-xl font-serif font-bold text-sn-dark tracking-wide">S N</span>
        <span className="text-sm text-sn-neutralgray font-medium">Urban Development</span>
      </div>
    </div>
  );
};

export default Logo;
