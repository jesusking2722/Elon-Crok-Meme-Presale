import { getTailwindWidthClass } from "@/helper";
import { FaAngleDown } from "react-icons/fa";

export type AccordianGroupItemType = {
  title: string;
  content: string;
  active: boolean;
};

interface AccordianGroupProps {
  items: AccordianGroupItemType[];
  width?: string;
  onSelect: (value: number) => void;
}

const AccordianGroup = ({ items, width, onSelect }: AccordianGroupProps) => {
  const dynamicWidth = getTailwindWidthClass(width);

  const styles = {
    container: `w-full ${dynamicWidth} flex flex-col gap-4`,
    item: {
      container:
        "w-full border border-blue-500 rounded-2xl transition-all duration-300 ease-in-out p-2 cursor-pointer",
      titleContainer: "w-full flex flex-row items-center justify-between p-2",
      title: "text-white font-semibold text-lg",
      icon: "text-white w-6 h-6 transition-all duration-300 ease-in-out",
      contentContainer: "p-2",
      content: "text-white/70 text-base",
    },
  };

  return (
    <div className={styles.container}>
      {items.map((item, index) => (
        <div
          key={index}
          className={`${styles.item.container} ${
            item.active ? "bg-black/80" : "bg-[#1F1F21]"
          }`}
          onClick={() => onSelect(index)}
        >
          <div className={styles.item.titleContainer}>
            <h2 className={styles.item.title}>{item.title}</h2>
            <FaAngleDown
              className={`${styles.item.icon} ${
                item.active ? "rotate-180" : "rotate-0"
              }`}
            />
          </div>
          {item.active && (
            <div className={styles.item.contentContainer}>
              <p className={styles.item.content}>{item.content}</p>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default AccordianGroup;
