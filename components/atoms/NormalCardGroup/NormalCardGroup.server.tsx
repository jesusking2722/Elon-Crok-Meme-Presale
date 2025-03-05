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
  };
  return (
    <div className={styles.container}>
      {items.map((item, index) => (
        <div
          key={index}
          className="w-full rounded-xl flex flex-row items-center gap-4 overflow-hidden bg-[#1F1F21] border border-blue-500 p-4 hover:bg-black/80 transition-all duration-300 ease-in-out"
        >
          <div
            className={`p-4 rounded-full ${item.color} flex flex-col items-center justify-center`}
          >
            {item.icon}
          </div>
          <div className="flex flex-col gap-2">
            <h2 className="text-white font-semibold text-xl">{item.title}</h2>
            <p className="text-white/70 text-sm">{item.content}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default NormalCardGroup;
