'use client'
import React from "react";
import Image from "next/image";
import { FaStar } from "react-icons/fa";
import { Button } from "./ui/button";
import { CourseCard } from "@/constant/CourseCard";
import Link from "next/link";


function CoursesSection() {
    
  return (
    <>
      <section className="
      w-full  
      py-[48px] xsm:py-[112px] 
      text-center">
        <h1 className="xsm:main_heading mb-[24px] text-[32px] leading-[41.6px] font-semibold ">Courses</h1>
        <p>Your Ultimate Guide to learning</p>

        <div className="w-[428px] xsm:w-full
         flex
          flex-col
          mt-[48px] xsm:mt-[60px] 
           justify-center
            items-center">
          <ul className="flex gap-[16px]">
            <li className="underline"><Link href="#">Popular</Link></li>
            <li><Link href="#">Recommended</Link></li>
            <li><Link href="#"></Link></li>
          </ul>

          <div className="
          w-full
           h-[1690px] xsm:h-auto
          grid  
          grid-cols-1 xsm:grid-cols-3 
          xsm:grid-rows-2 
          gap-x-[32px] 
          gap-y-[32px] xsm:gap-y-[64px] 
          mt-[64px]
          overflow-y-auto
          xsm:overflow-hidden" >
            {/* {card div} */}
            {CourseCard.map((item, index) => {
              return (
                <div className="embla__slide  w-[380px] xsm:w-[416px] m-auto flex flex-col text-start" key={index}>
                  <div>
                    <Image
                      src={item.src}
                      alt={item.title}
                      width={416}
                      height={300}
                     className="w-[416px] h-[300px] rounded-[8px]"/>
                  </div>
                  <div className="flex justify-between mt-[24px]">
                    <h1> {item.description}</h1>
                    <div className="flex justify-center items-center">
                      <FaStar size={24} color="#d9d9d9" />
                      <p className="text-[14px] leading-[21px] font-bold">
                        5.0
                      </p>
                    </div>
                  </div>
                  <h1 className="text-[24px] leading-[33.6px] font-bold mt-[11px]">
                    {item.courseName}
                  </h1>
                  <p className="text-[16px] leading-[24px]">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Suspendisse varius enim in eros.
                  </p>
                  <div className="flex items-center gap-[36px] mt-[32px]">
                    <Button variant={"btn"}>Enroll Now</Button>
                    <p>$400</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        
        <Button variant={'btn'} className="mt-[48px] xsm:mt-[64px]">View All Courses</Button>
      </section>
    </>
  );
}

export default CoursesSection;


