import next from "next";

interface ButtonProps {
  type: "default" | "colorful" | "link" | "text" | "icon";
  label?: string;
  href?: string;
  onClick?: () => void;
}

const Button: React.FC<ButtonProps> = ({ type, label, href, onClick }) => {
  const styles = {
    button: "",
  };
  return (
    <button
      className={`font-semibold text-white py-2 px-5 rounded-lg cursor-pointer ${
        type === "colorful"
          ? "bg-gradient hover:opacity-90 transition-all duration-300 ease-in-out"
          : ""
      }`}
    >
      {label}
    </button>
  );
};

export default Button;
