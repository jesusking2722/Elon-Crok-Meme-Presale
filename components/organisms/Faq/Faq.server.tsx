import { AccordianGroup, AccordianGroupItemType } from "@/components/atoms";
import { useState } from "react";

const styles = {
  container:
    "w-full flex flex-col lg:flex-row lg:items-start gap-10 lg:gap-0 lg:justify-between",
  card: {
    container: "w-[55%] flex flex-col gap-8",
    title: "text-white text-4xl font-semibold font-fredoka",
  },
};

const initialFaqs: AccordianGroupItemType[] = [
  {
    title: "What is $GMF?",
    content:
      "$GMF is the native token of GAMEFROG, designed to empower individuals by providing access to a decentralized financial ecosystem.",
    active: false,
  },
  {
    title: "What makes GAMEFROG so unique?",
    content:
      "Integrated Ecosystem: GAMEFROG uniquely blends presale advantages, AI-powered market-making, and daily staking rewards into one dynamic platform.",
    active: false,
  },
  {
    title: "How do I buy in the presale?",
    content:
      "Create a crypto wallet (e.g. MetaMask) & Fund your wallet with ETH & Connect your wallet & Purchase $GMF tokens.",
    active: false,
  },
  {
    title: "On which blockchain is $GMF available?",
    content:
      "$GMF is available on the Ethereum blockchain, ensuring security, scalability, and compatibility with major crypto ecosystems.",
    active: false,
  },
  {
    title: "When can I claim my $GMF tokens?",
    content:
      "You can claim your $GMF tokens once the presale ends. Further instructions will be provided on the GAMEFROG platform.",
    active: false,
  },
  {
    title: "Is there a minimum or maximum purchase limit?",
    content:
      "No, there’s no limit! You can invest as little as $1 or any amount you choose.",
    active: false,
  },
];

const Faq = () => {
  const [faqs, setFaqs] = useState<AccordianGroupItemType[]>(initialFaqs);

  const handleFaqSelect = (idx: number) => {
    setFaqs(
      faqs.map((faq, index) =>
        index === idx ? { ...faq, active: !faq.active } : faq
      )
    );
  };

  return (
    <div className={styles.container}>
      <div className={styles.card.container}>
        <h1 className={styles.card.title}>FAQ</h1>
        <AccordianGroup items={faqs} onSelect={handleFaqSelect} />
      </div>
    </div>
  );
};

export default Faq;
