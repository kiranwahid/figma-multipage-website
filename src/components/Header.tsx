import React from 'react'
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import Image from 'next/image';
import Link from 'next/link';
import { Button } from './ui/button';
import { Sheet, SheetContent, SheetTrigger } from './ui/sheet';
import { Menu } from 'lucide-react';


function Header() {
  return (
<>
<header className='w-full flex flex-col gap-4 items-center  bg-slate-50'>

{/* top header div */}
<div className='w-full bg-headerColor h-[54px] px-[62px] xsm:flex justify-between items-center border-b-[1px] border-black hidden'>
<div className='h-[30px] flex justify-center items-center gap-4 text-[14px] leading-[21px] '>
<p className='hover:text-slate-800'>Phone Number: 956 742 455 678</p>
<div className='h-[30px] w-[1px] bg-[#676767] '></div>
<p className='hover:text-slate-800'>Email:info@ddsgnr.com</p>
</div>
{/* icon div */}
<div className='flex justify-center items-center gap-[12px]'>
<FaFacebookF size={24} className='cursor-pointer hover:text-slate-800'/>
<FaInstagram size={24} className='cursor-pointer hover:text-slate-800'/>
<FaTwitter size={24} className='cursor-pointer hover:text-slate-800'/>
<FaLinkedin size={24} className='cursor-pointer hover:text-slate-800'/>
</div>

</div>




{/* bottom header div */}

<div className='w-full h-[72px] xsm:px-[64px] py-[16px] flex justify-between items-center bg-headerColor px-[24px]  border-b-[1px] border-black'>
  <Image src={"/Logo.png"} alt="logo" width={130.6} height={41}  />

  <div className='xsm:flex justify-bwtween items-center gap-[32px] hidden'>
    {/* menu div */}
    <ul className='flex gap-[52px] justify-center items-center text-[16px] '>
<li><Link href={"/"} className='hover:text-slate-500'>Home</Link></li>
<li><Link href={"/courses"} className='hover:text-slate-500'>Courses</Link></li>
<li><Link href={"/services"} className='hover:text-slate-500'>Services</Link></li>
<li><Link href={"/achivement"} className='hover:text-slate-500'>Achievement</Link></li>
<li><Link href={"/team"} className='hover:text-slate-500'>About Us</Link></li>
<li><Link href={"/testamonial"} className='hover:text-slate-500'>Testimonial</Link></li>
    </ul>

    

    {/* button div */}
    <div className='flex justify-center items-center gap-[16px]'>
      <Button variant={"btn"}>Login</Button>  
      <Button> Sign Up</Button>
    </div>
  </div>
  <Sheet>
      <SheetTrigger className='xsm:hidden'>
        <Menu size={24}/>
      </SheetTrigger>
      {/* menu items */}
      <SheetContent>
      <div className='xsm:flex flex-col xsm:flex-row justify-bwtween items-center gap-[32px] absolute top-20 left-0 right-0'>
    {/* menu div */}
    <ul className='flex flex-col xsm:flex-row  gap-4 xsm:gap-[52px] justify-center items-center text-[16px] text-center '>
<li><Link href={"/"} className='text-slate-900 hover:font-bold'>Home</Link></li>
<li><Link href={"/courses"} className='text-slate-900 hover:font-bold'>Courses</Link></li>
<li><Link href={"/services"} className='text-slate-900 hover:font-bold'>Services</Link></li>
<li><Link href={"/achivement"} className='text-slate-900 hover:font-bold'>Achievement</Link></li>
<li><Link href={"/team"} className='text-slate-900 hover:font-bold'>About Us</Link></li>
<li><Link href={"/testamonial"} className='text-slate-900 hover:font-bold'>Testimonial</Link></li>
    </ul>

  </div>
    </SheetContent>
  </Sheet>
</div>
</header>

</>
  )
}

export default Header