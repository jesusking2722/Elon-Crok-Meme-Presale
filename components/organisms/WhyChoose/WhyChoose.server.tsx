import { NormalCardGroup, NormalCardGroupItemType } from "@/components/atoms";
import { Buy } from "@/components/molecules";
import { FaDollarSign, FaGift, FaHandHoldingHeart } from "react-icons/fa";
import { FaStackExchange } from "react-icons/fa6";

const styles = {
  container:
    "w-full flex flex-col lg:flex-row lg:items-start gap-10 lg:gap-0 lg:justify-between",
};

const initialCards: NormalCardGroupItemType[] = [
  {
    title: "#1 Deepseek Memecoin ICO",
    content:
      "World's Only Deepseek Meme ICO. AI or Meme Coins? This New Cryptocurrency Combines Both.",
    icon: <FaHandHoldingHeart className="w-8 h-8 text-white" />,
    color: "bg-yellow-500",
  },
  {
    title: "Fair Presale Structure",
    content: "Rewarding early supporters with progressively increasing prices.",
    icon: <FaGift className="w-8 h-8 text-white" />,
    color: "bg-blue-500",
  },
  {
    title: "Secure Technology",
    content: "Powered by AI to ensure stability and fairness.",
    icon: <FaStackExchange className="w-8 h-8 text-white" />,
    color: "bg-green-500",
  },
  {
    title: "Massive Potential",
    content: "Launch price set at 10 cent, offering immediate value.",
    icon: <FaDollarSign className="w-8 h-8 text-white" />,
    color: "bg-cyan-500",
  },
];

const WhyChoose = () => {
  return (
    <div className="w-full flex flex-col gap-12">
      <h1 className="text-white text-4xl font-semibold font-fredoka text-center">
        Why Choose GAMEFROG?
      </h1>
      <div className={styles.container}>
        <NormalCardGroup items={initialCards} width="55%" />
        <Buy />
      </div>
    </div>
  );
};

export default WhyChoose;
