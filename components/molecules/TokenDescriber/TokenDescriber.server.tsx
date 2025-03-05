import { FaTwitter, FaTelegram, FaFacebook, FaInstagram } from "react-icons/fa";
import { Button, TokenCard, TransactionCard } from "@/components/atoms";

const styles = {
  container:
    "w-full lg:w-[55%] rounded-2xl px-4 py-8 bg-[#0f0f0f] flex flex-col items-center justify-center gap-4",
  title: "font-fredoka text-white text-2xl font-semibold",
  subtitle: "font-fredoka text-white/70 text-lg font-semibold",
  socialContainer: "flex flex-row items-center justify-center gap-4",
  socialIcon: "w-6 h-6 text-white",
  introContainer:
    "relative h-[160px] w-full rounded-2xl bg-[#3D3D3F] border-r-4 border-black border-l-4",
  introSubcontainer: "absolute inset-3 bg-white/50 rounded-2xl",
  tokenCardContainer: "w-full flex flex-col gap-4",
  infiniteContainer: "h-[100px] w-full rounded-2xl bg-[#3D3D3F]",
  auditContainer: "w-full flex flex-col items-center justify-center mt-2",
  auditTitle: "text-white font-semibold text-lg",
  auditSubtitle: "text-white font-semibold text-xl",
};

const TokenDescriber = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>#1 DEEPSEEK MEME COIN</h1>
      <p className={styles.subtitle}>Crypto Presale</p>
      <div className={styles.socialContainer}>
        <Button
          type="icon"
          icon={<FaTwitter className={styles.socialIcon} />}
        />
        <Button
          type="icon"
          icon={<FaTelegram className={styles.socialIcon} />}
        />
        <Button
          type="icon"
          icon={<FaFacebook className={styles.socialIcon} />}
        />
        <Button
          type="icon"
          icon={<FaInstagram className={styles.socialIcon} />}
        />
      </div>
      <div className={styles.introContainer}>
        <div className={styles.introSubcontainer}></div>
      </div>
      <div className={styles.tokenCardContainer}>
        <TokenCard
          type="default"
          title="Your Tokens (+rewards)"
          label="0 GMF"
        />
        <TokenCard
          type="colorful"
          title="🧠💎 Staking rewards (APY)"
          label="3,348.24%"
        />
        <TokenCard type="default" title="💎🤲 Holders" label="1629" />
      </div>
      <div className={styles.infiniteContainer}></div>
      <TransactionCard title="Presale Contract" items={["0x843...5e1"]} />
      <TransactionCard
        title="Recent Transactions"
        items={[
          "1,498 $GMF - $28.46 - 45 min ago",
          "7,829 $GMF - $148.74",
          "559 $GMF - $10.62",
          "2,368 $GMF - $44.99",
          "152 $GMF - $2.88",
          "218 $GMF - $4.15",
          "1,090 $GMF - $20.71",
          "2,648 $GMF - $50.32",
          "110 $GMF - $2.09",
          "253 $GMF - $4.81",
        ]}
      />
      <TransactionCard
        title="TOP 5"
        items={[
          "1,498 $GMF - $28.46 - 45 min ago",
          "7,829 $GMF - $148.74",
          "559 $GMF - $10.62",
        ]}
      />
      <div className={styles.auditContainer}>
        <h2 className={styles.auditTitle}>OFFICIALLY AUDITED BY:</h2>
        <p className={styles.auditSubtitle}>Coinsult</p>
      </div>
    </div>
  );
};

export default TokenDescriber;
