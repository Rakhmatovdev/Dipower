'use client';
import React, { useEffect } from 'react';
import iconHeart from '/public/Fill Heart.svg';
import iconEye from '/public/Fill Eye.svg';
import Link from 'next/link';
import Rater from '../products/Rate';
import { IProduct } from '@/types/product.interface'; 
import { useAppDispatch, useAppSelector } from '@/hooks/hook';
import { DeleteOutlined, FormOutlined } from '@ant-design/icons';
import { deleteBasket, selectBasket } from '@/features/basket/basketSlice';

const Basket: React.FC = () => {
  const dispatch = useAppDispatch();
  const basketData = useAppSelector(selectBasket);
  
  return (
    <div className="wrapper grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4">
      {basketData.length > 0 ? (
        basketData.map((product: IProduct, id: number) => (
          <div
            key={product.id || id}
            className="relative w-full h-[400px] snap-center"
          >
            <div 
              className="rounded-md flex justify-center items-center bg-secondary h-[250px] transition-transform transform hover:scale-105"
            >
              <img src={product.image} alt={product.name} className="object-cover h-full w-full" />
              <div className="bg-btn absolute py-1 px-3 rounded top-3 left-3">
                -{product.sale}%
              </div>
              <div className="absolute flex flex-col gap-2 top-3 right-2">
                <div>
                  <img src={iconHeart.src} alt="Add to favorites" />
                </div>
                <div>
                  <img src={iconEye.src} alt="View details" />
                </div>
              </div>
            </div>
            <Link
              href={`/products/${product.id}`}
              className="mt-4 line-clamp-1 text-center block"
            >
              {product.name}
            </Link>
            <div className="flex gap-3 mt-2 justify-center">
              <p className="text-btn font-bold">
                ${Math.floor(product.price - (product.price * product.sale) / 100)}
              </p>
              <p className="line-through text-gray-500">${product.price}</p>
            </div>
            <div className="flex gap-2 items-center mt-2 justify-center">
              <Rater star={product.rating} />
              <div className="">({product.count})</div>
            </div>
            <div className='flex gap-4 items-center justify-end '>
              <div onClick={() => dispatch(deleteBasket(product))} className="border px-2 py-1 my-2 text-2xl cursor-pointer rounded hover:text-[#fff] hover:bg-red-500">
                <DeleteOutlined />
              </div>
              <div className="border px-2 py-1 my-2 text-2xl cursor-pointer rounded hover:text-[#fff] hover:bg-green-500">
                <FormOutlined />
              </div>
            </div>
          </div>
        ))
      ) : (
        <p className="text-center text-gray-500">No products found.</p>
      )}
    </div>
  );
};

export default Basket;
