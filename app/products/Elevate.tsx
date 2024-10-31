import React from "react";
import ElevateCountdown from "./ElevateCountDawn";
import heroboom from '/public/heroboom.png'

const Elevate = () => {
  return (
    <section className="bg-black text-white  wrapper my-24">
      <div className="flex sm:gap-32 sm:px-14 sm:py-16 px-8 py-10 flex-col sm:flex-row ">
        <div className="">
          <div className="text-btn">Categories</div>
          <div className="font-semibold text-4xl sm:text-5xl max-w-96 mt-8 ">
            Elevate Your Energy
          </div>
          <ElevateCountdown />
          <button className="py-4 px-12 bg-btn rounded-2xl mt-10">
            Buy Now!
          </button>
        </div>
        <div className="mt-8 sm:mt-0">
          <img src={heroboom.src} alt="Hero png" />
        </div>
      </div>
    </section>
  );
};

export default Elevate;
