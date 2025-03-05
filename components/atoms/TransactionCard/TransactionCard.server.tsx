import { FaCopy, FaLink, FaPaperclip } from "react-icons/fa";
import { Button } from "../Button";

const styles = {
  container:
    "w-full rounded-xl flex flex-row items-center justify-between overflow-hidden bg-[#1F1F21] border border-blue-500 p-4 hover:bg-black/80 transition-all duration-300 ease-in-out",
  labelContainer: "flex flex-row items-center justify-center gap-4",
  titleIcon: "text-white w-6 h-6",
  icon: "text-blue-500 w-5 h-5",
  subContainer: "flex flex-col items-center justify-center gap-2",
  itemContainer: "w-full flex flex-row items-center gap-4",
  itemLabel: "text-white/70 font-semibold text-sm",
};

export type TransactionCardItemType = {
  label: string;
  path: string;
};

interface TransactionCardProps {
  title: string;
  items: string[];
}

const TransactionCard = ({ title, items }: TransactionCardProps) => {
  return (
    <div className={styles.container}>
      <div className={styles.labelContainer}>
        <FaCopy className={styles.titleIcon} />
        <span className="text-white font-semibold text-lg">{title}</span>
      </div>
      <div>
        {items.map((item, index) => (
          <div className={styles.itemContainer} key={index}>
            <span className={styles.itemLabel}>{item}</span>
            <Button type="icon" icon={<FaLink className={styles.icon} />} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default TransactionCard;
