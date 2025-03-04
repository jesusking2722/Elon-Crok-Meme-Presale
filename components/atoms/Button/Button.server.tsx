import next from "next";

interface ButtonProps {
  type: "default" | "colorful" | "link" | "text" | "icon";
  label?: string;
  href?: string;
  width?: "full";
  onClick?: () => void;
}

const Button: React.FC<ButtonProps> = ({
  type,
  label,
  href,
  width,
  onClick,
}) => {
  const styles = {
    button: "",
  };
  return (
    <button
      className={`${
        width && "w-full"
      } font-semibold text-white py-2 px-5 rounded-lg cursor-pointer ${
        type === "colorful"
          ? "bg-gradient hover:opacity-90 transition-all duration-300 ease-in-out"
          : type === "default"
          ? "bg-[#1F1F21] hover:bg-[#353537]"
          : ""
      }`}
    >
      {label}
    </button>
  );
};

export default Button;
