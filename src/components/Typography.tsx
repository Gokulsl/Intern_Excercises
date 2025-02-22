import React from 'react';

type TypographyVariant = "h1" | "h2" | "h3" | "h4" | "body1" | "body2" | "caption" | "subtitle1" | "subtitle2";

type TypographyProps = {
  variant?: TypographyVariant;
  children?: React.ReactNode;
  className?: string;
};

const Typography = ({ variant = "body1", children, className = "" }: TypographyProps) => {
  const typographyStyles: Record<TypographyVariant, string> = {
    h1: "text-4xl font-extrabold",
    h2: "text-3xl font-semibold",
    h3: "text-2xl font-medium",
    h4: "text-xl font-normal",
    body1: "text-base font-normal",
    body2: "text-sm font-light",
    caption: "text-xs font-light",
    subtitle1: "text-lg font-semibold",
    subtitle2: "text-md font-medium",
  };

  const Component = variant.startsWith("h") ? variant : "p"; 

  return React.createElement(
    Component,
    { className: `${typographyStyles[variant]} ${className}` },
    children
  );
};

export default Typography;
