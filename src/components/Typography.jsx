import React from 'react';

const Typography = ({ variant, children, className = "" }) => {
  const typographyStyles = {
    h1: "text-4xl font-extrabold text-gray-800",
    h2: "text-3xl font-semibold text-gray-800",
    h3: "text-2xl font-medium text-gray-800",
    h4: "text-xl font-normal text-gray-800",
    body1: "text-base font-normal text-gray-700",
    body2: "text-sm font-light text-gray-600",
    caption: "text-xs font-light text-gray-500",
    subtitle1: "text-lg font-semibold text-gray-700",
    subtitle2: "text-md font-medium text-gray-600",
  };

  return (
    <div className={`${typographyStyles[variant]} ${className}`}>
      {children}
    </div>
  );
};

export default Typography;
