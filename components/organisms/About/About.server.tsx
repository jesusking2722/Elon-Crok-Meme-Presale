import { AccordianGroup, AccordianGroupItemType } from "@/components/atoms";
import { useState } from "react";

const styles = {
  container:
    "w-full flex flex-col lg:flex-row lg:items-start gap-10 lg:gap-0 lg:justify-between",
};

const initialAccordianItems: AccordianGroupItemType[] = [
  {
    title: "How It Works?",
    content:
      "Presale participants lock in incredibly low entry prices. Once we go live at $0.50, our AI-driven champion—Gamefrog Pepe—jumps into action. He symbolizes the strength of our approach and the proactive use of presale funds. As new buyers join at $0.50 and beyond, those early supporters already hold a powerful advantage, positioning themselves for exponential returns.",
    active: false,
  },
  {
    title: "Smart AI Staking Rewards",
    content:
      "Presale participants lock in incredibly low entry prices. Once we go live at $0.50, our AI-driven champion—Gamefrog Pepe—jumps into action. He symbolizes the strength of our approach and the proactive use of presale funds. As new buyers join at $0.50 and beyond, those early supporters already hold a powerful advantage, positioning themselves for exponential returns.",
    active: false,
  },
  {
    title: "GameFrog AI Agent — powered by Deepseek",
    content:
      "Presale participants lock in incredibly low entry prices. Once we go live at $0.50, our AI-driven champion—Gamefrog Pepe—jumps into action. He symbolizes the strength of our approach and the proactive use of presale funds. As new buyers join at $0.50 and beyond, those early supporters already hold a powerful advantage, positioning themselves for exponential returns.",
    active: false,
  },
  {
    title: "Why Buy Now?",
    content:
      "Presale participants lock in incredibly low entry prices. Once we go live at $0.50, our AI-driven champion—Gamefrog Pepe—jumps into action. He symbolizes the strength of our approach and the proactive use of presale funds. As new buyers join at $0.50 and beyond, those early supporters already hold a powerful advantage, positioning themselves for exponential returns.",
    active: false,
  },
];

const About = () => {
  const [accordians, setAccordians] = useState<AccordianGroupItemType[]>(
    initialAccordianItems
  );
  const handleAccordianSelect = (idx: number) => {
    const updated = accordians.map((accordian, index) => {
      if (index === idx) {
        const active = accordian.active;
        accordian.active = !active;
      }
      return accordian;
    });
    setAccordians(updated);
  };
  return (
    <div className={styles.container}>
      <AccordianGroup
        items={accordians}
        width="55%"
        onSelect={handleAccordianSelect}
      />
    </div>
  );
};

export default About;
