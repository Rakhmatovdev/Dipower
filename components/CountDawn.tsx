"use client";
import { Time } from "@/types/product.types";
import { useEffect, useState } from "react";
import iconTwoDot from "../public/twoD.svg";

const Countdown: React.FC = () => {
  const initialTime: Time = {
    days: 3,
    hours: 23,
    minutes: 59,
    seconds: 59,
  };
  const [time, setTime] = useState<Time>(initialTime);
  useEffect(() => {
    const updateCountdown = () => {
      const { days, hours, minutes, seconds } = time;
      let totalSeconds =
        days * 24 * 60 * 60 + hours * 60 * 60 + minutes * 60 + seconds;
      if (totalSeconds <= 0) {
        setTime({ days: 0, hours: 0, minutes: 0, seconds: 0 });
        return;
      }
      totalSeconds--;
      const newDays = Math.floor(totalSeconds / (24 * 60 * 60));
      const newHours = Math.floor((totalSeconds % (24 * 60 * 60)) / (60 * 60));
      const newMinutes = Math.floor((totalSeconds % (60 * 60)) / 60);
      const newSeconds = totalSeconds % 60;
      
      setTime({
        days: newDays,
        hours: newHours,
        minutes: newMinutes,
        seconds: newSeconds,
      });
    };
    const interval = setInterval(updateCountdown, 1000);

    return () => clearInterval(interval);
  }, [time]);

  const formatTime = (num: number) => {
    return String(num).padStart(2, "0");
  };

  return (
    <div className="flex gap-x-2 sm:gap-x-4">
      <div className="flex gap-x-2 sm:gap-x-4">
        <div className="flex flex-col leading-6">
          <div className="text-[12px]">Days</div>
          <div className="text-[24px] sm:text-[30px] tracking-wide mt-0 font-semibold">
            {formatTime(time.days)}
          </div>
        </div>
        <img className="mt-4" src={iconTwoDot.src} alt="Days icon" />
      </div>
      <div className="flex gap-x-2 sm:gap-x-4">
        <div className="flex flex-col leading-6">
          <div className="text-[12px]">Hours</div>
          <div className="text-[24px] sm:text-[30px] tracking-wide mt-0 font-semibold">
            {formatTime(time.hours)}
          </div>
        </div>
        <img className="mt-4" src={iconTwoDot.src} alt="Hours icon" />
      </div>
      <div className="flex gap-x-2 sm:gap-x-4">
        <div className="flex flex-col leading-6">
          <div className="text-[12px]">Minutes</div>
          <div className="text-[24px] sm:text-[30px] tracking-wide mt-0 font-semibold">
            {formatTime(time.minutes)}
          </div>
        </div>
        <img className="mt-4" src={iconTwoDot.src} alt="Minutes icon" />
      </div>
      <div className="flex gap-x-2 sm:gap-x-4">
        <div className="flex flex-col leading-6">
          <div className="text-[12px]">Seconds</div>
          <div className="text-[24px] sm:text-[30px] tracking-wide mt-0 font-semibold">
            {formatTime(time.seconds)}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Countdown;
