// components/CustomButton.js
import React from 'react';

const CustomButton = ({ onClick, children }) => {
  return (
    <button
      onClick={onClick}
      className="px-6 py-2 text-white bg-blue-500 rounded-md hover:bg-blue-600 transition-colors duration-300"
    >
      {children}
    </button>
  );
};

export default CustomButton;
