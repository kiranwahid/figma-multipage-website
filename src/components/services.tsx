import React from "react";
import Image from "next/image";
import { ServicesCard } from "@/constant/ServicesCard";
import { Button } from "./ui/button";

function ServicesSection() {
  return (
    <>
      <section className="
      w-full
      px-[24px] xsm:p-0
       py-[48px] xsm:py-[112px]
       text-center
       ">
        <h1 className=" xsm:main_heading mb-[24px] text-[32px] leading-[41.6px] font-bold">Explore Courses By Category</h1>
        <p className="text-[18px] leading-[27px]">
          Discover a wide range of courses covering a variety of subjects,
          taught by expert instructors.
        </p>

        {/* course card div */}

        <div className="w-full 
        flex 
        h-[556px] xsm:h-auto
        flex-wrap 
        gap-[24px]
        xsm:gap-x-[16px]  
        xsm:gap-y-[64px] 
        mt-[48px] xsm:mt-[80px] 
        text-start
        overflow-y-auto
        ">
        {ServicesCard.map((item, index) =>{return(

              <div className="w-[410px] flex gap-[32px] bg-headerColor justify-center items-center px-[16px] py-[37px]" key={index}>
                <Image
                  src={item.src}
                  alt=""
                  width={100}
                  height={100}
  
                />
  
                <div>
                  <h1 className="text-[20px] leading-[30px] font-semibold">{item.courseName}</h1>
                  <p className="text-[18px] leading-[27px]">{item.courseDescription}</p>
                </div>
              </div>
           
        )})}
        </div>
        <Button variant={'btn'} className="mt-[48px] xsm:mt-[64px]">View All Courses</Button>
      </section>
    </>
  );
}

export default ServicesSection;
