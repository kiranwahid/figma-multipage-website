import { AchievementCard } from "@/constant/AchivementCard";
import React from "react";

function AchivementSection() {
  return (
    <>
      <section className="w-full flex-col py-[48px] xsm:py-[112px] px-[24px]">
        <h1 className="xsm:main_heading mb-[24px] text-center text-[32px] leading-[41.6px] font-bold">Our Achivements </h1>
        <p className="text-[18px] leading-[27px] text-center">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
          varius enim in eros elementum tristique. Duis cursus, mi quis viverra
          ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat.
        </p>
        <div className="
        w-full 
        flex 
        flex-col 
        xsm:flex-row 
        justify-between 
        items-center  
        gap-[16px]
        xsm:gap-[24px]
         mt-[32px] ">
        
            <div className=" w-[380px] xsm:w-[616px] flex justify-center items-center">
            <div className="w-[182px] xsm:w-[296px] flex flex-col flex-wrap justify-center items-center">
                <h2 className="text-[20px] xsm:text-[40px] leading-[28px] xsm:leading-[48px] font-bold">+200</h2>
                <p>Courses</p>
            </div>
            <div className="w-[182px] xsm:w-[296px] flex flex-col flex-wrap justify-center items-center" >
                <h2 className="text-[20px] xsm:text-[40px] leading-[28px] xsm:leading-[48px] font-bold">50K</h2>
                <p>Monitors</p>
            </div>
                </div>
                <div className="w-[380px] xsm:w-[616px]  flex justify-center items-center">
            <div className="w-[182px] xsm:w-[296px] flex flex-col flex-wrap justify-center items-center">
                <h2 className="text-[20px] xsm:text-[40px] leading-[28px] xsm:leading-[48px] font-bold">370K</h2>
                <p>Students</p>
            </div>
            <div className="w-[182px] xsm:w-[296px] flex flex-col flex-wrap justify-center items-center" >
                <h2 className="text-[20px] xsm:text-[40px] leading-[28px] xsm:leading-[48px] font-bold">100+</h2>
                <p>Recognition</p>
            </div>
                </div>
        
            

        </div>
      </section>
    </>
  );
}

export default AchivementSection;
