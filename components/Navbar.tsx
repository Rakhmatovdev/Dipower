
 'use client'
 import Link from "next/link";
import { useState } from "react";
import { useDetectClickOutside } from 'react-detect-click-outside';
import logo from "/public/logo.svg";
import iconSearch from "/public/search.svg";
import iconLike from "/public/like.svg";
import iconTrush from "/public/trush.svg";
import iconMenu from "/public/bx-menu.svg";
import { usePathname } from "next/navigation";

const Navbar = () => {
    const  [toggle, setToggle] = useState(false);

    const ref = useDetectClickOutside({ onTriggered:() => setToggle(false)  });

    const pathname = usePathname()
    
  const NavLinks = [
    { title: "Home", path: "/" },
    { title: "Products", path: "/products" },
    { title: "About Us", path: "/about_us" },
    { title: "Contact", path: "/contact" },
  ];
  return (<div>
    <div className="flex justify-between items-center  container px-2 sm:px-0 sm:mx-auto mt-4 ">
      <Link href={"/"} className="">
        <img src={logo.src} alt="logo" />
      </Link>
      <ul className="py-6 hidden md:flex gap-[46px] ">
        {NavLinks.map((link) => {
          return (
            <li key={link.path}>
              <Link href={link.path} passHref className="text-lg ">
                <div className={pathname==link.path ? "text-green-400  " : ""}>
                  {link.title}
                </div>
              </Link>
            </li>
          );
        })}
      </ul>
      <div className="items-center gap-4 flex  ">
        <Link href={"/#"} className=" border bg-[#f5f5f5]  px-2 lg:flex hidden py-2 gap-2 justify-between rounded-md   ">
          <input
            type="text"
            className="bg-stone-100 cursor-pointer  text-black outline-none w-48 "
            placeholder="What are you loking for?"
          />
          <img src={iconSearch.src} alt="search" />
        </Link>
       <Link href={"/#"} className="flex lg:hidden cursor-pointer"> <img src={iconSearch.src} alt="search" /></Link>
        <Link href={"/likes"} className="cursor-pointer ">
          <img src={iconLike.src} alt="like" />
        </Link>
        <Link href={"/trash"} className="cursor-pointer ">
          <img src={iconTrush.src} alt="trash" />
          
        </Link>
        <button onClick={()=>setToggle(prev=>!prev)} className="flex md:hidden"ref={ref}>
        <img src={iconMenu.src} alt=" menu bar" />
      </button>
      </div>
     
     

      
      

    </div>
    
    {toggle && 
        <ul className="py-6  absolute bg-white text-sm transition-all    w-full z-50  flex flex-col items-end px-2 ">
        {NavLinks.map((link) => {
          return (
            <li key={link.path}>
              <Link href={link.path} passHref className="text-lg ">
                <div className={link.path ? "hover:text-green-400  " : ""}>
                  {link.title}
                </div>
              </Link>
            </li>
          );
        })}
      </ul> 
   }
 </div> );
};

export default Navbar;
