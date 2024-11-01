import { Services } from "@/data/data";
import Link from "next/link";
import React from "react";
import arrival1 from '../public/arrival1.png'
import arrival2 from '../public/arrival2.png'
import arrival3 from '../public/arrival3.png'
import arrival4 from '../public/arrival4.png'

const NewArrival = () => {

  return (
    <div className="wrapper my-[120px]">
      <section >
        <div className="flex gap-4 items-center ">
          <div className="ustun"></div>
          <div className="text-btn font-semibold">Featured</div>
        </div>
        <div className="text-xl sm:text-[32px] font-[510] mt-5">
          New Arrival
        </div>
        <div className="mt-[60px] flex-wrap flex justify-between justify-items-stretch  ">
          <div className="lg:w-[600px] lg:h-[631px] rounded bg-black relative">
            <img className="pt-11 pl-[102px]" src={arrival1.src} alt="" />
            <div className="absolute bg-black text-white bottom-0 p-[10px] flex flex-col gap-y-4 sm:w-[284px]">
              <p className="font-semibold text-2xl">Energy Boost X</p>
              <p className="max-w-[240px] text-sm">
                Experience the power of the new Black and White edition of the
                PS5 now available for purchase!
              </p>
              <Link href="#" className="underline mb-2 font-semibold">
                Shop Now
              </Link>
            </div>
          </div>
          <div className="flex flex-col justify-between mt-4 lg:mt-0">
            <div className="relative lg:w-[570px] h-[284px] rounded bg-black">
              <img className="sm:pl-32" src={arrival2.src} alt="" />
              <div className="absolute bg-black text-white bottom-0 p-[10px] flex flex-col gap-y-2 sm:w-[255px]">
                <p className="font-semibold text-2xl">Energy Chic</p>
                <p className="max-w-[240px] text-sm">
                  Discover our curated collection of women&apos;s fashion pieces that
                  will elevate your style.!
                </p>
                <Link href="#" className="underline mb-1 font-semibold">
                  Shop Now
                </Link>
              </div>
            </div>
            <div className="flex justify-between mt-4 lg:mt-0 flex-col sm:flex-row">
              <div className="relative lg:w-[270px] h-[284px] rounded bg-black">
                <img className="py-8 pl-[70px]" src={arrival3.src} alt="" />
                <div className="absolute bg-black text-white bottom-0 pb-[10px] pl-[10px] flex flex-col gap-y-1 sm:w-[191px]">
                  <p className="font-semibold text-2xl">Energy Sound</p>
                  <p className="max-w-[175px] text-sm">
                    Explore the latest Amazon wireless speakers for an immersive 
                    sound.
                  </p>
                  <Link href="#" className="underline  font-semibold">
                    Shop Now
                  </Link>
                </div>
              </div>
              <div className="relative lg:w-[270px] h-[284px] rounded bg-black mt-4 sm:mt-0">
                <img className="py-8 pl-[70px]" src={arrival4.src} alt="" />
                <div className="absolute bg-black text-white bottom-0 pb-[10px] pl-[10px] flex flex-col gap-y-1 sm:w-[200px]">
                  <p className="font-semibold text-2xl">Energy Essence</p>
                  <p className="max-w-[180px] text-sm">
                    Indulge in the captivating scent of GUCCI INTENSE OUD EDP.
                  </p>
                  <Link href="#" className="underline  font-semibold">
                    Shop Now
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="mt-[100px] sm:mt-[170px] mx-auto grid grid-cols-1 lg:gap-y-0 sm:grid-cols-2 md:grid-cols-3 justify-center  gap-y-4 md:gap-y-0  gap-x-14  w-full ">
          {Services.map((view) => (
            <div
              key={view.icon}
              className="rounded-sm flex flex-col items-center py-4   hover:shadow-xl hover:border-hidden transition-all duration-200 hover:shadow-btn hover:bg-btn hover:text-white fill-black"
            >
              <div className="p-2 rounded-full bg-[#d2ffd4]  ">
                <div className="bg-black rounded-full p-2 flex justify-center items-center   ">
                  <img  src={view.icon} alt={view.name} />
                </div>
              </div>
              <div className="text-[20px] font-semibold mt-6 ">{view.name}</div>
              <p className="text-sm">{view.service}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default NewArrival;
