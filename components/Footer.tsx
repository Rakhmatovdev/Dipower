import { SendOutlined } from "@ant-design/icons"
import qrCode from '/public/qrcode.png'
import { Account, Exclusive, Icons, Links, Support } from "@/data/data"

const Footer = () => {


  return (
    <footer className='bg-black text-white   '>
        <div className=" container mx-auto py-12  justify-items-center       grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 ">

  <ul className="flex flex-col gap-4 ">
    <li className="font-bold mb-2 text-xl">Exclusive</li>
    {Exclusive.map(link=><li className="cursor-pointer " key={link.path}>
    {link.title}
   </li>)}
    <div className="flex items-center border px-2 py-2 rounded-sm w-48">
        <input type="text"  className={"bg-black text-white w-full outline-none  "} placeholder="Enter your email" />
        <SendOutlined />
    </div>
  </ul>
  <ul className="flex  flex-col gap-2 sm:gap-4 w-48 mt-4 sm:mt-0">
    <li className="font-bold mb-2 text-xl">Support</li>
   {Support.map(link=><li className="cursor-pointer " key={link.path}>
    {link.title}
   </li>)}
  </ul>
  
  
  <ul className=" flex flex-col gap-2 sm:gap-4 w-48 mt-4 sm:mt-0">
    <li className="font-bold mb-2 text-xl">Account</li>
    {Account.map(link=><li className="cursor-pointer " key={link.path}>
{link.title}
   </li>)}
  </ul>

  <ul className="flex   flex-col gap-2 sm:gap-4 w-48 mt-4 sm:mt-0">
    <li className="font-bold mb-2 text-xl">Link</li>
    {Links.map(link=><li className="cursor-pointer " key={link.path}>
{link.title}
   </li>)}
  </ul>
  <div className="flex flex-col gap-1 sm:gap-2 mt-4 sm:mt-0 ">
    <div className="font-bold mb-2 text-xl">Download App</div>
    <div className="text-sm text-stone-400 cursor-pointer ">Save $3 with App New User Only</div>
    <div className=""><img src={qrCode.src} alt="price" /></div>
    <ul className="icons flex  mt-6 sm:mt-4 gap-6 ">
    {Icons.map(link=><li className="cursor-pointer " key={link.path}>
<img src={link.title} alt={link.path} />
   </li>)}
    </ul>
  </div></div>
  <div className="flex items-center justify-center py-2 text-stone-800"> &copy; Copyright Rimel {new Date().getFullYear()}. All right reserved</div>
    </footer>
  )
}

export default Footer