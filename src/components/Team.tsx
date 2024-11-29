import React from 'react'
import Image from 'next/image'
import { FaLinkedin } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa";
import { CiGlobe } from "react-icons/ci";
import { Button } from './ui/button';
import { TeamCard } from '@/constant/TeamCard';


function TeamSection() {
  return (
    <>
    
    <section className='w-full py-[48px] xsm:py-[112px] text-center bg-headerColor'>
      <h1 className='main_heading mb-[24px]'>Our Team</h1>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. </p>

{/* card div */}
      <div className='
      w-full 
      h-[723px] xsm:h-auto
      grid 
      grid-cols-1  xsm:grid-cols-3
      xsm:grid-rows-2
      gap-x-[48px] 
      gap-[48px] xsm:gap-y-[64px] 
      mt-[48px] xsm:mt-[80px]
      overflow-y-auto
        
        '>

{TeamCard.map((item, index) =>{
  return(
<div className='flex flex-col items-center justify-center' key={index}>
  {/* image div */}
  <div className='mb-[24px]'><Image src={item.src} alt="team" width={80} height={80}/></div>

<h1 className='text-20px] leading-[30px] font-semibold'>{item.name}</h1>
<p className='text-18px] leading-[27px] mb-[24px]'>{item.designation}</p>

{/* icon div */}
<div className='flex justify-center items-center gap-[14px]'>
  <FaLinkedin size={18} />
  <FaTwitter size={18} />
  <CiGlobe size={18} />

</div>
</div>

  )
})}


</div>
<Button variant={"btn"} className='mt-[48px] xsm:hidden'>View All</Button>
    </section>
    </>
  )
}

export default TeamSection