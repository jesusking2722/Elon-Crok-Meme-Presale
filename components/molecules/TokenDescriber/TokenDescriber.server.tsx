import { FaTwitter, FaTelegram, FaFacebook, FaInstagram } from "react-icons/fa";
import { Button, TokenCard } from "@/components/atoms";

const TokenDescriber = () => {
  return (
    <div className="w-full lg:w-[55%] rounded-2xl px-4 py-8 bg-[#0f0f0f] flex flex-col items-center justify-center gap-4">
      <h1 className="font-fredoka text-white text-2xl font-semibold">
        #1 DEEPSEEK MEME COIN
      </h1>
      <p className="font-fredoka text-white/70 text-lg font-semibold">
        Crypto Presale
      </p>
      <div className="flex flex-row items-center justify-center gap-4">
        <Button
          type="icon"
          icon={<FaTwitter className="w-6 h-6 text-white" />}
        />
        <Button
          type="icon"
          icon={<FaTelegram className="w-6 h-6 text-white" />}
        />
        <Button
          type="icon"
          icon={<FaFacebook className="w-6 h-6 text-white" />}
        />
        <Button
          type="icon"
          icon={<FaInstagram className="w-6 h-6 text-white" />}
        />
      </div>
      <div className="relative h-[160px] w-full rounded-2xl bg-[#3D3D3F] border-r-4 border-black border-l-4">
        <div className="absolute inset-3 bg-white/50 rounded-2xl"></div>
      </div>
      <div className="w-full flex flex-col gap-4">
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
      <div className="h-[100px] w-full rounded-2xl bg-[#3D3D3F]"></div>
    </div>
  );
};

export default TokenDescriber;
