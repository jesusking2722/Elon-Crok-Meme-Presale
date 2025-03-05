import { getTailwindWidthClass } from "@/helper";
import Image, { StaticImageData } from "next/image";

export type HowToBuyCardGroupItemType = {
  title: string;
  imgSource: StaticImageData;
};

interface HowToBuyCardGroupProps {
  items: HowToBuyCardGroupItemType[];
  width?: string;
}

const HowToBuyCardGroup = ({ items, width }: HowToBuyCardGroupProps) => {
  const dynamicWidth = getTailwindWidthClass(width);

  const styles = {
    container: `w-full ${dynamicWidth} grid grid-cols-2 gap-8`,
    item: {
      container:
        "w-full rounded-xl flex flex-col gap-4 bg-[#1F1F21] border border-blue-500 p-4 hover:bg-black/80 transition-all duration-300 ease-in-out",
      title: "text-white font-semibold text-lg",
      img: "w-full h-auto",
    },
  };

  return (
    <div className={styles.container}>
      {items.map((item, index) => (
        <div key={index} className={styles.item.container}>
          <h2 className={styles.item.title}>
            {`${index + 1}. `}
            {item.title}
          </h2>
          <Image
            src={item.imgSource}
            alt={item.title}
            className={styles.item.img}
          />
        </div>
      ))}
    </div>
  );
};

export default HowToBuyCardGroup;
