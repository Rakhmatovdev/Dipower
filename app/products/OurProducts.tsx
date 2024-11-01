'use client';
import React, { useEffect, useState } from 'react';
import { ArrowLeftOutlined, ArrowRightOutlined, HeartFilled, HeartOutlined } from '@ant-design/icons';
import Link from 'next/link';
import Rater from './Rate';
import iconEye from '/public/Fill Eye.svg';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { A11y, Navigation, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Swiper as SwiperClass } from 'swiper/types'; // To'g'ri Swiper turini import qilish
import { useAppDispatch, useAppSelector } from '../../hooks/hook';
import Countdown from '@/components/CountDawn';
import { toggleLike } from '@/features/like/likeSlice';
import SkeletonLoader from './SKLoading';
import { ProductsProps } from '@/types/product.types';

const OurProducts: React.FC<ProductsProps> = ({ products, time, title, name }) => {
  const [swiper, setSwiper] = useState<SwiperClass | null>(null); // Swiper turi aniqlandi
  const dispatch = useAppDispatch();
  const likedProducts = useAppSelector(state => state.like.data);
  const [isHydrated, setIsHydrated] = useState(false);
  const [isLoading, setIsLoading] = useState(true); 
  useEffect(() => {
    setIsHydrated(true);
    setTimeout(() => setIsLoading(false), 2000); 
  }, []);

  const NextB = (e: React.MouseEvent<HTMLButtonElement>) => { // To'g'ri tur belgilandi
    e.preventDefault();
    if (swiper) {
      swiper.slideNext();
    }
  };

  const PrevB = (e: React.MouseEvent<HTMLButtonElement>) => { // To'g'ri tur belgilandi
    e.preventDefault();
    if (swiper) {
      swiper.slidePrev();
    }
  };

  if (isLoading) {
    return <SkeletonLoader />;
  }

  return (
    <section className="wrapper my-[120px]">
      <div>
        <div className="flex items-center gap-[10px]">
          <div className="ustun"></div>
          <p className="text-btn font-semibold">{title}</p>
        </div>
        <div className="flex mt-5 justify-between items-center">
          {time ? (
            <div className="flex items-end gap-4 sm:gap-20">
              <div className="text-lg sm:text-[32px] font-[510]">{name}</div>
              <Countdown />
            </div>
          ) : (
            <div className="text-xl sm:text-[32px] font-[510]">{name}</div>
          )}
          <div className="flex sm:gap-2">
            <button className="bg-secondary px-2 sm:px-[14px] sm:py-[9px] rounded-full" onClick={PrevB}>
              <ArrowLeftOutlined />
            </button>
            <button className="bg-secondary px-2 py-1 sm:px-[14px] sm:py-[9px] rounded-full" onClick={NextB}>
              <ArrowRightOutlined />
            </button>
          </div>
        </div>
      </div>
      <div className="overflow-hidden mt-[60px]">
        <Swiper
          modules={[Navigation, Pagination, A11y]}
          onSwiper={setSwiper}
          spaceBetween={30}
          slidesPerView={1}
          grid={{ rows: 2 }}
          breakpoints={{
            640: { slidesPerView: 2, grid: { rows: 2 } },
            768: { slidesPerView: 3, grid: { rows: 2 } },
            1024: { slidesPerView: 4, grid: { rows: 2 } },
          }}
        >
          {products?.map((product) => (
            <SwiperSlide key={product.id} className="relative w-[270px] h-[350px] snap-center">
              <div className="rounded-[4px] flex justify-center items-center bg-secondary h-[250px]">
                <img src={product.image} alt={product.name} />
                <div className="bg-btn absolute py-1 px-3 rounded top-3 left-3">-{product.sale}%</div>
                <div className="absolute flex flex-col gap-2 top-3 right-2">
                  <div onClick={() => dispatch(toggleLike(product))}>
                    {isHydrated && (
                      likedProducts.some((p) => p.id === product.id) ? (
                        <div className="bg-white flex justify-center items-center py-2 text-lg rounded-full">
                          <HeartFilled className="text-red-500" />
                        </div>
                      ) : (
                        <div className="bg-white flex justify-center items-center py-2 text-lg rounded-full">
                          <HeartOutlined />
                        </div>
                      )
                    )}
                  </div>
                  <Link target="_blank" href={product.image}>
                    <img src={iconEye.src} alt="" />
                  </Link>
                </div>
              </div>
              <Link href={`/products/${product.id}`} className="mt-4 line-clamp-1">
                {product.name}
              </Link>
              <div className="flex gap-3 mt-2">
                <p className="text-btn">
                  ${Math.floor(product.price - (product.price * product.sale) / 100)}
                </p>
                <p className="line-through">${product.price}</p>
              </div>
              <div className="flex gap-2 items-center mt-2">
                <Rater star={product.rating} />
                <div>({product.count})</div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <div className="flex justify-center items-center mt-[60px]">
        <Link href={"/products"} className="px-12 py-4 bg-btn rounded-2xl font-semibold">
          View All Products
        </Link>
      </div>
    </section>
  );
};

export default OurProducts;
