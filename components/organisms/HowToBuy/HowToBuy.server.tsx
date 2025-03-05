import {
  Buy,
  HowToBuyCardGroup,
  HowToBuyCardGroupItemType,
} from "@/components/molecules";
import Logo from "@/public/assets/logo.svg";

const styles = {
  container:
    "w-full flex flex-col lg:flex-row lg:items-start gap-10 lg:gap-0 lg:justify-between",
  card: {
    container: "w-[55%]",
    title: "text-white font-semibold text-4xl font-fredoka",
    subtitle: "text-white/50 font-semibold text-4xl font-fredoka mt-2 mb-8",
  },
};

const initialCards: HowToBuyCardGroupItemType[] = [
  { title: "Get an Ethereum Wallet", imgSource: Logo },
  { title: "Fund your wallet with ETH", imgSource: Logo },
  { title: "Connect your Wallet", imgSource: Logo },
  { title: "Buy & Stake GAMEFROG", imgSource: Logo },
];

const HowToBuy = () => {
  return (
    <div className={styles.container}>
      <div className={styles.card.container}>
        <h2 className={styles.card.title}>HOW TO PARTICIPATE</h2>
        <h2 className={styles.card.subtitle}>IN THE PRESALE</h2>
        <HowToBuyCardGroup items={initialCards} />
      </div>
      <Buy />
    </div>
  );
};

export default HowToBuy;
