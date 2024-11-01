"use client"
import { Call, Write } from "@/data/data";
import { ContactMassage } from "@/types/product.types";
import Link from "next/link";
import { SubmitHandler, useForm } from "react-hook-form";
import toast from "react-hot-toast";
import BredContact from "./BredCrumb";
import iconsMail from '/public/icons-mail.svg';
import iconsPhone from '/public/icons-phone.svg';
import { useMutation} from "@tanstack/react-query";
import productService from "@/service/product.service";
import { ICreateContact } from "@/types/product.interface";



const ContactSend = () => {

  const {mutate}=useMutation({mutationKey:['contact'],mutationFn:(contactValues:ICreateContact)=>productService.postContact(contactValues)} )


  const {
    register,
    handleSubmit,
    reset
  } = useForm<ContactMassage>()


  const onSubmit: SubmitHandler<ContactMassage> = (data) =>{

    if(data.name && data.email  && data.phone ){
      reset()
      console.log(data)
      mutate(data)
    return  toast.success("Send successfuly")
    }
    toast.error(`This field ${data.name?"":"name, "} ${data.email?"":"email, "} ${data.phone?"":"phone "}  is required`)
  }

  return (
    <div>
      <div className="mt-[100px] px-2.5 sm:px-0 container mx-auto ">
      <BredContact/>
      </div>
      <div className="container mx-auto mb-[120px]">
        <div className="flex mt-12 gap-12 flex-col sm:flex-row ">
          <div className="py-10 w-[340px] h-[457px] px-9 shadow-lg mx-auto ">
            <div className="">
              <div className="flex items-center gap-4 ">
                <img src={iconsPhone.src} alt="phone icon" />{" "}
                <div className="font-semibold tracking-wide     ">
                  Call To Us
                </div>
              </div>
              <ul className="mt-6 gap-4 flex flex-col text-sm">
                {Call.map((item) => (
                  <Link href={item.path} key={item.path}>{item.title}</Link>
                ))}
              </ul>
            </div>

            <hr className="my-8" />

            <div className="">
              <div className="flex items-center gap-4 ">
                <img src={iconsMail.src} alt="mail icon" />
                <div className="font-semibold tracking-wide">Write To Us</div>
              </div>
              <ul className="mt-6 gap-4 flex flex-col text-sm">
                {Write.map((item) => (
                  <Link href={item.path} key={item.path}>{item.title}</Link>
                ))}
              </ul>
            </div>
          </div>

          <form onSubmit={handleSubmit(onSubmit)} className="  shadow-lg  w-[340px] sm:w-full  flex-1 mx-auto py-10 px-9  sm:py-10 sm:px-16">
            <div className="grid grid-cols-1 relative justify-items-center sm:justify-items-stretch   sm:grid-col-2 xl:grid-cols-3 gap-4">
              <input
                type="text"
                className="px-4 w-full py-3 rounded-sm outline-none  bg-secondary"
                placeholder="Your Name"
                {...register("name")}
              />
          
              <input
                type="text"
                className="px-4 w-full py-3 rounded-sm outline-none  bg-secondary"
                placeholder="Your Email"
                {...register("email")}
                />
                
              <input
                type="text"
                className="px-4 w-full py-3 rounded-sm outline-none  bg-secondary"
                placeholder="Your Phone"
                {...register("phone")}
              />
            </div>

            <div className="mt-6">
              <textarea
                id=""
                rows={7}
                className="px-4  py-3 rounded-sm outline-none bg-secondary w-full "
                placeholder="Your Massage"
                {...register("massage")}
              ></textarea>
            </div>
            <div className="flex justify-end items-center mt-8 ">
              <button type="submit" className="py-4 px-12 bg-btn text-white rounded-sm">
                Send Massage
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactSend;
