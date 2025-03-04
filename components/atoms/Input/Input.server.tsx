import Image, { StaticImageData } from "next/image";
import { getTailwindWidthClass } from "@/helper";
import { useState } from "react";

interface InputProps {
  label?: string;
  placehoder?: string;
  value?: string;
  width?: string;
  icon: StaticImageData;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const Input = ({
  label,
  placehoder,
  value,
  width,
  icon,
  onChange,
}: InputProps) => {
  const [isFocused, setIsFocused] = useState<boolean>(false);
  const dynamicWidth = getTailwindWidthClass(width);

  const styles = {
    container: `${dynamicWidth}`,
    label: "text-white/70 font-semibold block text-sm",
    input: "w-[90%] px-2 border-none outline-none bg-transparent text-white",
    icon: "w-8 h-8",
  };

  return (
    <div className={styles.container}>
      <label className={styles.label}>{label}</label>
      <div
        className={`w-full flex flex-row items-center justify-between overflow-hidden p-2 border mt-2 rounded-lg transition-all duration-300 ease-in-out ${
          isFocused ? "bg-black/80 border-blue-500" : "bg-[#1F1F21]"
        }`}
      >
        <input
          className={styles.input}
          type="text"
          placeholder={placehoder}
          value={value ? value : ""}
          onChange={onChange}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
        />
        <Image
          src={icon}
          alt={label ? label : "icon"}
          className={styles.icon}
        />
      </div>
    </div>
  );
};

export default Input;
