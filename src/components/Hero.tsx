import React from 'react'
import { Button } from './ui/button'
import Image from 'next/image'

function HeroSection() {
  return (
    <>
    
    <section className=''>
 {/* top div */}
 <div className='
 flex 
 flex-col xsm:flex-row
 
 '>
{/* left div */}
<div className='
w-[100%] xsm:w-[50%]
 py-[64px]  xsm:py-[250px] 
 px-[24px] xsm:px-[0px]
flex 
justify-center 
items-center
 '>
    
    
    <div className='
    w-full
     px-0 xsm:px-[80px]
     '>
        <h1 className='
        leading-[48px] xsm:leading-[67.2px] 
        font-bold 
        text-[40px] xsm:text-[56px] 
        mb-[24px]
        '> Learn new skills online with ease </h1>
        <p className='text-[18px] leading-[27px] mb-[40px]'>Discover a wide range of courses covering a variety of subjects, taught by expert instructors.</p>
   
<Button className='mr-[16px]'>Start learning now</Button>
<Button variant={'btn'}>Explore Courses</Button>



   
    </div>

</div>


 {/* right div */}
 <div className='
   w-full xsm:w-[50%]
   h-[390px] xsm:h-[800px] 
  flex
   justify-center
    overflow-hidden
  '>
    <Image src='/girl.png' alt = 'girl' width={640} height={900}  className='
       w-[428px] xsm:w-[640px] 
       h-[600px] xsm:h-[900px]'/>
 </div>
 </div>


 {/* bottom div */}
 <div className='
 w-full 
 flex 
 flex-col xsm:flex-row
 justify-between 
 items-center 
 px-[24px] xsm:px-[8px] 
 py-[48px] xsm:py-[80px]
 gap-[24px] xsm:gap-0
  bg-headerColor
  '>
    <div className='w-[320px]'>
        <p className='text-[24px] font-bold leading-[33.6px]'>Trusted by 2000+ companies worldwide.</p>
    </div>


<div className='
flex
 gap-[16px] xsm:gap-[19px]
 overflow-x-auto
 '>
<Image src = '/image1.png' alt = '' width={123.8} height={38.52} className='w-[107px] xsm:[124px] h-[33px] xsm:h-[38px] ' />
<Image src = '/image3.png' alt = '' width={123.8} height={38.52} className='w-[107px] xsm:[124px] h-[33px] xsm:h-[38px] ' />
<Image src = '/image4.png' alt = '' width={123.8} height={38.52} className='w-[107px] xsm:[124px] h-[33px] xsm:h-[38px] ' />
<Image src = '/image2.png' alt = '' width={123.8} height={38.52} className='w-[107px] xsm:[124px] h-[33px] xsm:h-[38px] ' />
<Image src = '/image5.png' alt = '' width={123.8} height={38.52} className='w-[107px] xsm:[124px] h-[33px] xsm:h-[38px] ' />
<Image src = '/image6.png' alt = '' width={123.8} height={38.52} className='w-[107px] xsm:[124px] h-[33px] xsm:h-[38px] ' />
</div>
 </div>

    </section>
    </>
  )
}

export default HeroSection