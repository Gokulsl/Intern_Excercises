import React from 'react';

const ComponentCard = ({ title, children, className }) => (
  <div className={`bg-gray-800 p-6 md:p-8 rounded-2xl shadow-lg flex flex-col items-center w-full max-w-sm h-[300px] justify-between ${className}`}>
    <h3 className="text-xl font-semibold text-white">{title}</h3>
    <div className="flex flex-wrap items-center justify-center text-white flex-1 w-full">
      {children}
    </div>
  </div>
);

export default ComponentCard;
