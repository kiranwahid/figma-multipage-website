import React from 'react'
import { Input } from './ui/input'
import { Button } from './ui/button'
import Image from 'next/image'
import Link from 'next/link'
import { FooterLinks } from '@/constant/FooterLinks'
import { FaFacebookF, FaInstagram, FaLinkedin, FaTwitter } from 'react-icons/fa'

function FooterSection() {
  return (
    <>
    <footer className='
    w-full 
    px-[24px] py-[48px] xsm:p-[80px]
    flex 
    flex-col
     gap-[80px]
     text-center xsm:text-start
     '>

{/* top footer div */}
<div className='
 w-full 
flex 
items-center 
justify-between 
flex-col xsm:flex-row  

'>
    <div className='w-[287px] xsm:w-auto gap-4 flex flex-col xsm:gap-0'>
    <h1 className='text-[18px] leading-[27px] font-semibold'>Subscribe to our newsletter</h1>
    <p className='text-[16px] leading-[24px]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    </div>

    {/* input div */}
    <div className=' w-[380px] xsm:w-auto flex flex-col gap-4 mt-[24px] xsm:mt-0'>
   <div className='flex gap-4  flex-col xsm:flex-row '>
   <Input placeholder='Enter your email ' className=' w-full xsm:w-[254px] h-[48px] text-[16px] leading-[24px] border-black '/>
    <Button variant={'btn'} className='w-full xsm:w-auto'>Subscribe</Button>
    </div>
    <p className='text-[12px] leading-[18px]'>By subscribing you agree to with our Privacy Policy</p>
   </div>

</div>

{/* center footer div */}
<div className='w-full
 flex 
  gap-10 
  text-center
  flex-col xsm:flex-row
  '>
    {/* {logo div} */}
    <div className='xsm:w-[250px] h-[40px] inline-block xsm:block m-auto xsm:m-0'>
        <Image src = '/Logo.png' alt = 'logo'  width={130.6} height={40}/>
    </div>
    
    {/* {courses div} */}
    
{FooterLinks.map((item , index) =>{return(
    <div className='w-[250px] flex flex-col gap-4 m-auto xsm:text-start' key={index}>
    <h1 className='text-[16px] leading-[24px] font-semibold '>{item.heading}</h1>
    <ul className='flex flex-col gap-[8px]'>
    <li><Link href={'#'}>{item.l1}</Link></li>
        <li><Link href={'#'}>{item.l2}</Link></li>
        <li><Link href={'#'}>{item.l3}</Link></li>
        <li><Link href={'#'}>{item.l4}</Link></li>
        <li><Link href={'#'}>{item.l5}</Link></li>
    </ul>

        

</div>
)})}

</div>


{/* bottom footer div */}
<div className='
w-full 
h-auto xsm:h-[57px] 
flex 
items-end 
justify-between 
flex-col xsm:flex-row 
border-t-[1px] 
border-black
pt-[32px] xsm:pt-0
xsm:text-center
'>
    <div className='flex gap-[24px] flex-col xsm:flex-row'>
        <p>2023 Ddsgnr. All right reserved.</p>

<div className=' flex gap-[24px]'>
<Link href={'#'} className='text-[14px] leading-[21px] underline'>Privacy Policy</Link>
<Link href={'#'} className='text-[14px] leading-[21px] underline'>Terms of Service</Link>
<Link href={'#'} className='text-[14px] leading-[21px] underline'>Cookies Settings</Link>
</div>
    </div>
    {/* icon div */}
<div className='flex justify-center items-center gap-[12px] m-auto xsm:m-0 mt-[24px] xsm:mt-0'>
<FaFacebookF size={24}/>
<FaInstagram size={24}/>
<FaTwitter size={24}/>
<FaLinkedin size={24}/>
</div>

</div>
    </footer>
    </>
  )
}

export default FooterSection