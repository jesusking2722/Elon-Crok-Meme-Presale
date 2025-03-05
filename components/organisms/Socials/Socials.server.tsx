import { Button, GradientContainer } from "@/components/atoms";
import { FaFacebook, FaInstagram, FaTelegram, FaTwitter } from "react-icons/fa";

const styles = {
  container:
    "w-full flex flex-col items-center justify-center gap-4 py-8 rounded-xl",
  titles: {
    container: "flex flex-col gap-2",
    title1: "text-white text-4xl font-semibold font-fredoka text-center",
    title2: "text-green-500 text-4xl font-semibold font-fredoka text-center",
    title3: "text-white/70 text-4xl font-semibold font-fredoka text-center",
  },
  label: "text-white/50 font-semibold text-lg",
  socials: {
    container: "grid grid-cols-2 gap-4",
  },
};

const Socials = () => {
  return (
    <GradientContainer>
      <div className={styles.container}>
        <div className={styles.titles.container}>
          <h1 className={styles.titles.title1}>JOIN THE</h1>
          <h1 className={styles.titles.title2}>GAMEFROG</h1>
          <h1 className={styles.titles.title3}>COMMUNITY</h1>
        </div>
        <p className={styles.label}>Stay connected with our global movement</p>
        <div className={styles.socials.container}>
          <Button
            type="default"
            label="Twitter"
            icon={<FaTwitter className="w-5 h-5 text-white" />}
          />
          <Button
            type="primary"
            label="Telegram"
            icon={<FaTelegram className="w-5 h-5 text-white" />}
          />
          <Button
            type="green"
            label="Facebook"
            icon={<FaFacebook className="w-5 h-5 text-white" />}
          />
          <Button
            type="colorful"
            label="Instagram"
            icon={<FaInstagram className="w-5 h-5 text-white" />}
          />
        </div>
      </div>
    </GradientContainer>
  );
};

export default Socials;
