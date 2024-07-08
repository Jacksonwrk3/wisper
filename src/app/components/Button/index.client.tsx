import React from "react";

/**
 * Props for the Button component
 * @typedef {Object} ButtonProps
 * @property {React.ReactNode} children - The children of the Button component
 */
type ButtonProps = {
  children: React.ReactNode;
  variant: "primary" | "secondary";
};

/**
 * @description A button that displays its children inside a button component
 * @param {ButtonProps} props - The props for the Button component
 * @returns {JSX.Element} The Button component
 */
const Button: React.FC<ButtonProps> = ({ children, variant }) => {
  if (variant === "primary") {
    return <button className="bg-amber-800 p-3">{children}</button>;
  } else if (variant === "secondary") {
    return <button className="bg-amber-800 opacity-50 p-3">{children}</button>;
  } else {
    return null; // Handle unexpected variants
  }
};

export default Button;
