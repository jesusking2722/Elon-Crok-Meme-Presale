import React from "react";

interface ButtonProps {
  type: "default" | "colorful" | "link" | "text" | "icon" | "primary";
  label?: string;
  href?: string;
  icon?: React.ReactNode;
  width?: "full";
  onClick?: () => void;
}

const Button: React.FC<ButtonProps> = ({
  type,
  label,
  href,
  width,
  icon,
  onClick,
}) => {
  const styles = {
    button: "",
  };

  return (
    <button
      onClick={onClick}
      className={`${width && "w-full"} font-semibold text-white ${
        type === "icon" ? "p-2" : "py-2 px-5"
      } rounded-lg cursor-pointer flex items-center justify-center ${
        type === "colorful"
          ? "bg-gradient hover:opacity-90 transition-all duration-300 ease-in-out"
          : type === "default"
          ? "bg-[#1F1F21] hover:bg-[#353537]"
          : type === "primary"
          ? "bg-[#3069FF] hover:bg-[#4076FF]"
          : type === "icon"
          ? "bg-[#1F1F21] hover:bg-[#353537]"
          : ""
      }`}
    >
      {icon && <span>{icon}</span>}
      {label}
    </button>
  );
};

export default Button;
