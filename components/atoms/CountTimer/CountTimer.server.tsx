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
    <div className="flex justify-center items-center space-x-6 font-cartoon text-2xl text-white bg-gradient-to-r from-purple-600 via-pink-500 to-red-500 rounded-lg p-6 shadow-lg">
      <div className="text-center">
        <span className="block text-lg">Days</span>
        <span>{timeLeft.days}</span>
      </div>
      <div className="text-center">
        <span className="block text-lg">Hours</span>
        <span>{timeLeft.hours}</span>
      </div>
      <div className="text-center">
        <span className="block text-lg">Minutes</span>
        <span>{timeLeft.minutes}</span>
      </div>
      <div className="text-center">
        <span className="block text-lg">Seconds</span>
        <span>{timeLeft.seconds}</span>
      </div>
    </div>
  );
};

export default CountdownTimer;
