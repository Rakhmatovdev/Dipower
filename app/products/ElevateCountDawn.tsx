"use client";
import { Time } from "@/types/product.types";
import React, { useEffect, useState } from "react";

const ElevateCountdown: React.FC = () => {
  const initialTime: Time = {
    days: 1,
    hours: 0,
    minutes: 0,
    seconds:2,
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
    <div className="mt-8 flex gap-x-6">
      <div className="bg-white text-black rounded-full w-[62px] h-[62px] leading-4 flex flex-col items-center justify-center">
        <div className="font-semibold">{formatTime(time.days)}</div>
        <div className="text-[11px]">Days</div>
      </div>
      <div className="bg-white text-black rounded-full w-[62px] h-[62px] leading-4 flex flex-col items-center justify-center">
        <div className="font-semibold">{formatTime(time.hours)}</div>
        <div className="text-[11px]">Hours</div>
      </div>
      <div className="bg-white text-black rounded-full w-[62px] h-[62px] leading-4 flex flex-col items-center justify-center">
        <div className="font-semibold">{formatTime(time.minutes)}</div>
        <div className="text-[11px]">Minutes</div>
      </div>
      <div className="bg-white text-black rounded-full w-[62px] h-[62px] leading-4 flex flex-col items-center justify-center">
        <div className="font-semibold">{formatTime(time.seconds)}</div>
        <div className="text-[11px]">Seconds</div>
      </div>
    </div>
  );
};

export default ElevateCountdown;
