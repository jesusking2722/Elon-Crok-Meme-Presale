import {
  GradientContainer,
  Progresser,
  CountTimer,
  Button,
  Alert,
  Input,
} from "@/components/atoms";
import Icon from "@/public/assets/logo.svg";

const styles = {
  container:
    "flex flex-col items-center justify-center gap-4 px-4 py-8 rounded-2xl bg-[#161616] z-20",
  title: "font-fredoka text-white text-2xl",
  subtitle1: "text-white/50 font-semibold",
  subtitle2: "text-white font-semibold text-lg",
  inputContainer: "grid grid-cols-2 gap-8",
};

const Buy = () => {
  const presaleEndDate = "2025-03-15T00:00:00";

  return (
    <GradientContainer width="40%">
      <div className={styles.container}>
        <h1 className={styles.title}>BUY $GMF PRESALE NOW</h1>
        <CountTimer targetDate={presaleEndDate} />
        <p className={styles.subtitle1}>Buy in before price increase</p>
        <Progresser progress={30} />
        <p className={styles.subtitle2}>USDT Raised: $391,701.27</p>
        <Button type="default" label="1 $GMF = $0.0195" width="full" />
        <Alert
          title=""
          message="Token price increases by 0.5 cent every 48 hours and will launch when it reaches 40 cents. Benefit Huge from our Smart AI Staking – the sooner you invest, the better your returns."
        />
        <div className={styles.inputContainer}>
          <Input
            label="You Pay (ETH)"
            placehoder="Enter ETH"
            value=""
            icon={Icon}
            onChange={(e) => {}}
          />
          <Input
            label="You Receive ($GMF)"
            placehoder="Enter GMF"
            value=""
            icon={Icon}
            onChange={(e) => {}}
          />
        </div>
        <Button type="primary" label="Connect Wallet" width="full" />
      </div>
    </GradientContainer>
  );
};

export default Buy;
