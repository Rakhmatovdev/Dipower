import Link from 'next/link'
import React from 'react'
import { ArrowRightOutlined } from '@ant-design/icons';

const Swipper = () => {
  return (
    <div 
      className=' bg-cover bg-center swipper' 
    
    >
        
      <div className=" text-white py-14 px-16">
        <div>Energy HUB</div>
        <div className="font-semibold text-3xl sm:text-5xl max-w-[294px] mt-12 sm:mt-[45px] tracking-wider leading-tight        ">Up to 10% off Voucher</div>
        <Link href={'#'} className="flex gap-2 mt-[22px]">
          <div className="w-[85px]" >
            <p className='font-semibold '>Shop Now!</p>
            <hr />
          </div>
          <ArrowRightOutlined/>
        </Link>
      </div>
    </div>
  );
}

export default Swipper;
