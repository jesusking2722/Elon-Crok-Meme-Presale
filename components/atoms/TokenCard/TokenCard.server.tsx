import { Button } from "../Button";

interface TokenCardProps {
  type: "default" | "colorful";
  title: string;
  label: string;
}

const styles = {
  container:
    "w-full flex flex-row items-center justify-between p-4 bg-black hover:bg-[#3D3D3F] rounded-lg transition-all duration-300 ease-in-out",
  title: "text-white font-semibold text-lg",
};

const TokenCard = ({ type, title, label }: TokenCardProps) => {
  return (
    <div className={styles.container}>
      <span className={styles.title}>{title}</span>
      <Button type={type} label={label} />
    </div>
  );
};

export default TokenCard;
