import { CountTimer } from "@/components/atoms/CountTimer";

const styles = {
  container: "relative",
  title: "font-fredoka text-white text-2xl",
};

const Buy = () => {
  const presaleEndDate = "2025-03-15T00:00:00";

  return (
    <div className="relative">
      <div className="absolute -inset-2 rounded-lg bg-gradient-to-r from-yellow-600 via-orange-600 to-red-600 opacity-75 blur"></div>
      <div className="relative flex items-center justify-center rounded-lg bg-slate-900 text-slate-300">
        Gradient shadow
      </div>
    </div>
    // <div className={styles.container}>
    //   <div className="absolute -inset-2 rounded-lg bg-gradient-to-r from-yellow-600 via-orange-600 to-red-600 opacity-75 blur">
    //     <div className="bg-black w-full lg:w-[40%] rounded-2xl p-4 ">
    //       <h1 className={styles.title}>BUY $GMF PRESALE NOW</h1>
    //       <CountTimer targetDate={presaleEndDate} />
    //     </div>
    //   </div>
    // </div>
  );
};

export default Buy;
