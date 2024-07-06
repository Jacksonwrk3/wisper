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
const Button: React.FC<ButtonProps> = (props) => {
  if (props.variant === "primary") {
    return <button className="bg-amber-800 p-3">{props.children}</button>;
  } else if (props.variant === "secondary") {
    return (
      <button className="bg-amber-800 opacity-50 p-3">{props.children}</button>
    );
  }
};

export default Button;
