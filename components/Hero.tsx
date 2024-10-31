"use client";

import { Flex } from "antd";
import Link from "next/link";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { A11y, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import Swipper from "./Swiper";
import { Categories, swippers } from "@/data/data";

const Hero = () => {
 
  return (
    <div>
      <section className="flex flex-col  md:flex-row justify-center  md:justify-between wrapper mt-[100px]">
        <Flex className="flex items-center w-full flex-col sm:flex-row overflow-hidden justify-between" gap={100}>
          <ul className="flex flex-col gap-y-4 ">
            {Categories.map((category) => (
              <Link
                key={category.title}
                className="flex gap-12 justify-between"
                href={category.path}
              >
                <p className="">{category.title}</p>{" "}
                <div className="">&gt;</div>
              </Link>
            ))}
          </ul>

          <div className=" overflow-hidden ">
            <Swiper className="w-[360px] sm:w-[892px] h-[344px]  "
              modules={[Navigation, Pagination, A11y]}
              spaceBetween={50}
              slidesPerView={1} 
              navigation
              pagination={{ clickable: true }}
              onSwiper={(swiper) => console.log(swiper)}
              onSlideChange={() => console.log("slide change")}
            >
                {swippers.map((swiper)=><SwiperSlide key={swiper.id}>
             <Swipper/>
              </SwiperSlide>)}
              
             
            </Swiper>
          </div>
        </Flex>
      </section>
    </div>
  );
};

export default Hero;
