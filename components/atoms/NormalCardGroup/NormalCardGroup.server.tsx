import { getTailwindWidthClass } from "@/helper";

export type NormalCardGroupItemType = {
  icon: React.ReactNode;
  title: string;
  content: string;
  color: string;
};

interface NormalCardGroupProps {
  items: NormalCardGroupItemType[];
  width?: string;
}

const NormalCardGroup = ({ items, width }: NormalCardGroupProps) => {
  const dynamicWidth = getTailwindWidthClass(width);
  const styles = {
    container: `w-full ${dynamicWidth} flex flex-col gap-4`,
    item: {
      container:
        "w-full rounded-xl flex flex-row items-center gap-4 overflow-hidden bg-[#1F1F21] border border-blue-500 p-4 hover:bg-black/80 transition-all duration-300 ease-in-out",
      icon: "p-4 rounded-full flex flex-col items-center justify-center",
      content: {
        container: "flex flex-col gap-2",
        title: "text-white font-semibold text-xl",
        content: "text-white/70 text-sm",
      },
    },
  };
  return (
    <div className={styles.container}>
      {items.map((item, index) => (
        <div key={index} className={styles.item.container}>
          <div className={`${styles.item.icon} ${item.color}`}>{item.icon}</div>
          <div className={styles.item.content.container}>
            <h2 className={styles.item.content.title}>{item.title}</h2>
            <p className={styles.item.content.content}>{item.content}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default NormalCardGroup;
