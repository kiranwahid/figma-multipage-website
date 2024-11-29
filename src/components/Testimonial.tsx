import React from "react";
import { FaStar } from "react-icons/fa";
import Image from "next/image";
import { TestamonialCard } from "@/constant/TestamonialCard";
function TestimonialSection() {
  return (
    <>
      <section className="w-full px-[24px] xsm:px-[64px] py-[112px] ">
        <h1 className="main_heading mb-[24px] text-center  xsm:text-start">Customer testimonials</h1>
        <p className="text-center  xsm:text-start">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        {/* card div */}

        <div className="w-full inline-flex flex-row mt-[80px] gap-[32px] overflow-x-auto">

          {/* card */}


             {TestamonialCard.map((item, index) =>{
                return(
                    <div className="shrink-0 grow-0 w-[362px] p-[32px] border-[1px] border-[#000000] gap-[32px]" key={index}>
                    {/* star div */}
                    <div className="flex gap-[4px] mb-[24px]">
                      {[...Array(5)].map((_, index) => (
                        <FaStar key={index} size={20} />
                      ))}
                    </div>
                    <p className="mb-[24px]">
                   {item.para}
                    </p>
                    <div className="flex gap-[20px]">
                        <div className="w-[56px] h-[56px] rounded-full overflow-hidden">
                            <Image src={item.src} alt=" team3" width={56} height={56} />
                        </div>
                        
                   {/* info div */}
                   <div className="h-full flex flex-col ">
                    <h1 className="text-[16px] font-semibold leading-[24px]">{item.name}</h1>
                    <p className="text-[16px] leadind-[24px]">{item.designation}</p>
                   </div>
        
                    </div>
                  </div>
                )
             })}



        </div>
      </section>
    </>
  );
}
export default TestimonialSection;
