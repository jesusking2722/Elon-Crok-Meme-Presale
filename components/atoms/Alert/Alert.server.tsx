import next from "next";
import { FaInfoCircle } from "react-icons/fa";

const styles = {
  container:
    "w-full rounded-xl flex flex-row items-center gap-3 overflow-hidden bg-[#3D3D3F] p-4",
  icon: "text-blue-500 w-5 h-5",
  subContainer: "flex-1",
  title: "text-white font-semibold text-sm",
  message: "mt-2 text-white/80 text-sm",
};

const Alert = ({ title, message }: { title: string; message: string }) => {
  return (
    <div className={styles.container}>
      <FaInfoCircle className={styles.icon} />
      <div className={styles.subContainer}>
        {title && <h4 className={styles.title}>{title}</h4>}
        {message && <p className={styles.message}>{message}</p>}
      </div>
    </div>
  );
};

export default Alert;
