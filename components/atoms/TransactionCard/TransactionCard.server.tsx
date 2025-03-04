import { FaPaperclip } from "react-icons/fa";

const styles = {
  container:
    "w-full rounded-xl flex flex-row items-center gap-3 overflow-hidden bg-[#3D3D3F] p-4",
  labelContainer: "flex flex-row items-center justify-center gap-4",
  icon: "text-blue-500 w-5 h-5",
  subContainer: "flex-1 flex-col items-center justify-center gap-2",
  title: "text-white font-semibold text-sm",
  message: "mt-2 text-white/80 text-sm",
};

const TransactionCard = () => {
  return (
    <div className={styles.container}>
      <div className={styles.labelContainer}>
        <FaPaperclip className="text-white w-6 h-6" />
        <span></span>
      </div>
      <div className={styles.subContainer}></div>
    </div>
  );
};

export default TransactionCard;
