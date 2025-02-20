import React from "react";

const Loading = ({ message = "", size = "", color = "" ,className=""}) => {
  return (
    <div className="flex justify-center items-center space-x-2">
      <div className={`border-t-4 border-solid ${color} rounded-full animate-spin ${size} ${className}` } />
      <span className="text-slate-200">{message}</span>
    </div>
  );
};

export default Loading;
