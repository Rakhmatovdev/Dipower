'use client'
import { product, Products1, Products2 } from "@/data/data"

import { useState } from "react"
import Rater from '@/app/products/Rate';
import OurProducts from "../OurProducts";
import MyBredCrumb from './BredCrumb';
import IconLike from "@/public/like.svg"
import IconDelivery from "@/public/icon-delivery.svg"
import IconReturn from "@/public/icon-return.svg"
import { MinusOutlined, PlusOutlined } from "@ant-design/icons";
import { useProduct } from "@/hooks/useProducts";


const Details = (params:{params:{productId:string}}) => {
    const [counter,setCounter]= useState(2)
 const {data}=useProduct(params.params.productId)

    const Increment=()=>{
       setCounter(prev=>prev+=1)
    }
   
    const Decrement=()=>{
       setCounter(prev=>prev-=1)
    }
const title="Our Products"
const name="Explore Our Products"

  return (<div>
    <section className="wrapper mt-16">
    <MyBredCrumb/>
    <div className="hero flex mt-[50px] items-center justify-between flex-col sm:flex-row">
      <div className="grid grid-cols-2 sm:grid-cols-1  gap-4 ">
        {Products2.map((product) => (
          <div key={product.id} className="w-[170px] h-[138px] bg-secondary  overflow-hidden flex justify-center items-center ">
            <img src={product.image} alt="Product image" />
          </div>
        ))}
      </div>
      <div className="rounded">
        <img className="sm:w-[500px] sm:h-[600px] bg-cover bg-center"  src={data?`http://localhost:3000/${data?.image}`:"http://localhost:3000/_next/static/media/product1.9e75c283.png"} alt="Product detail" />
      </div>
      <div className="sm:w-[400px] sm:h-[600px]  flex justify-between flex-col">
        <div className="flex flex-col gap-y-4">
          <div className="font-semibold text-2xl ">{data?.name}</div>
          <div className="flex items-center">
            <Rater star={product.rating} />{" "}
            <div className="flex gap-4">
              <p className="text-stone-400 ml-4">
              ({product.reviews} Reviews)</p> <p> |</p> <p className="text-[#00FF66]">In Stack</p>
            </div>
          </div>
          <div className="text-xl font-semibold "> ${data?.price}.00</div>
          <div className="mt-2">{product.description}</div>
        </div>
        <div className="">
          <hr className="mt-6 bg-black h-px border-0 "/>
        </div>
        <div className="mt-[60px]">
         
          
        </div>
        <div className="flex gap-x-[18px] mt-8 flex-wrap">
          <div className="border flex  items-center rounded h-11 border-black">
            <button className={`border border-transparent hover:border-transparent    border-r-black h-full p-2 hover:bg-btn ${counter==0?"cursor-no-drop hover:bg-secondary":""}`} disabled={counter==0}  onClick={Decrement}><MinusOutlined /></button>
            <div className="w-20 justify-center text-center "><input className="my-4  ml-8 w-5 outline-none flex justify-end  center" type="text" value={counter} onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
  setCounter(Number(e.target.value));
}}/></div>
            <button className="border border-transparent hover:border-transparent    border-l-black h-full p-2 hover:bg-btn" onClick={Increment}><PlusOutlined /></button>
          </div>
          <div className="">
            <button className="py-[10px] px-11 bg-btn font-medium text-white rounded">Buy Now</button>
          </div>
          <div className="border flex justify-center items-center w-10 h-10 rounded border-black  mt-2 sm:mt-0 ">
            <img src={IconLike.src} alt="Likes" />
          </div>
        </div>
        <div className="border rounded border-stone-400 mt-8">
            
        <div className=" flex px-4 pt-6 pb-4 gap-4">

                <div className=""><img src={IconDelivery.src} alt="Delivery" /></div>
                <div className="">
                    <p className="font-semibold">Free Delivery</p>
                    <p className="text-sm underline">Enter your postal code for Delivery Availability</p>
                </div>
            </div>
            <hr className="border-none h-px bg-stone-400"/>
            <div className=" flex px-4 pt-6 pb-4 gap-4">
                <div className=""><img src={IconReturn.src} alt="Return" /></div>
                <div className="">
                    <p className="font-semibold">Return Delivery</p>
                    <p className="text-sm ">Free 30 Days Delivery Returns. <a className="underline" href="#">Details</a></p>
                </div>
            </div>
        </div>

      </div>
    
    </div>
  </section><OurProducts products={Products1} time={false} title={title} name={name}/></div>
  )
}

export default Details