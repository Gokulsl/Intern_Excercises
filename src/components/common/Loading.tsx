import React from "react";

type loadingProps = {
  message?: string;
  size?: string;
  color?: string;
  className?: string;
};

const Loading = ({ message = "", size = "w-5 h-5", color = "border-blue-500", className = "" }: loadingProps) => {
  return (
    <div className="flex justify-center items-center space-x-2">
      <div className={`border-t-4 border-solid ${color} rounded-full animate-spin ${size} ${className}`} />
      {message && <span className="text-slate-200">{message}</span>}
    </div>
  );
};

export default Loading;
