import { useState, useEffect } from "react";

// Type for the time left (days, hours, minutes, seconds)
type TimeLeft = {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
};

interface CountdownTimerProps {
  targetDate: string; // Expecting a string date input (ISO format)
}

const styles = {
  container:
    "flex justify-center items-center space-x-6 font-cartoon text-2xl text-white",
  button:
    "text-center border border-[#3D3D3F] bg-[#131314] w-24 h-24 flex flex-col items-center justify-center rounded-lg gap-4",
  label: "block text-sm",
};

const CountdownTimer: React.FC<CountdownTimerProps> = ({ targetDate }) => {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>(getTimeLeft(targetDate));

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(getTimeLeft(targetDate));
    }, 1000);

    return () => clearInterval(timer); // Cleanup on unmount
  }, [targetDate]);

  function getTimeLeft(targetDate: string): TimeLeft {
    const now = new Date();
    const endDate = new Date(targetDate);
    const timeDifference = endDate.getTime() - now.getTime();

    if (timeDifference <= 0) {
      return { days: 0, hours: 0, minutes: 0, seconds: 0 };
    }

    const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
    const hours = Math.floor(
      (timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    const minutes = Math.floor(
      (timeDifference % (1000 * 60 * 60)) / (1000 * 60)
    );
    const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);

    return { days, hours, minutes, seconds };
  }

  return (
    <div className={styles.container}>
      <div className={styles.button}>
        <span>{timeLeft.days}</span>
        <span className={styles.label}>DAYS</span>
      </div>
      <div className={styles.button}>
        <span>{timeLeft.hours}</span>
        <span className={styles.label}>HOURS</span>
      </div>
      <div className={styles.button}>
        <span>{timeLeft.minutes}</span>
        <span className={styles.label}>MINUTES</span>
      </div>
      <div className={styles.button}>
        <span>{timeLeft.seconds}</span>
        <span className={styles.label}>SECONDS</span>
      </div>
    </div>
  );
};

export default CountdownTimer;
