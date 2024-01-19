import React from 'react'
import service1 from "../assects/service01.png"
import service2 from "../assects/service02.png"
import service3 from "../assects/service03.png"

const Service = () => {
  return (
    <section id='service'>
        <div className=" pt-[28px]">
             <div className="lg:flex sm:flex sm:gap-x-1">
                 <div className="lg:w-1/2">
                    <h2 className='text-[#000000] font-[700] sm:text-[40px] text-[48px] lg:text-[62px] font-pops  text-center lg:text-end pl-[20px] lg:pr-[61px] lg:pt-[134px]'>Our Services</h2>
                    <p className='text-[#6C6C6C] font-[500]text-[16px] lg:pl-[482px] font-pops text-center sm:pl-[40px] lg:text-start '>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>
                 </div>
                 <div className="lg:w-1/2 relative after:absolute after:top-0 after:left-0 after:[] after:h-full after:w-full after:bg-[rgba(0,0,0,0.36)]">
                    <img src={service1} alt="" />
                    <h3 className='absolute lg:top-[147px] lg:left-[116px] font-pops top-[20px] left-[10px] text-center text-white lg:text-[36px] font-[700] z-[1]'>Modern natural oil and gas refineries.</h3>
                    <a className='absolute border-2 border-[#F40404] lg:p-[10px] hover:bg-[#F40404] top-[70px] left-[130px] lg:top-[234px] lg:left-[116px] font-pops text-white text-[16px] font-[600] z-[1]' href="">Learn More</a>
                 </div>
             </div>
             <div className="lg:flex sm:flex sm:gap-x-3 lg:gap-0">
                 <div className="lg:w-1/2 relative after:absolute after:top-0 after:left-0 after:[] after:h-full after:w-full after:bg-[rgba(0,0,0,0.36)]">
                    <img  src={service2} alt="" />
                    <h3 className='absolute lg:top-[147px] lg:left-[116px] font-pops top-[20px] left-[10px] text-center text-white lg:text-[36px] font-[700] z-[1]'>Modern natural oil and gas refineries.</h3>
                    <a className='absolute border-2 border-[#F40404] lg:p-[10px] hover:bg-[#F40404] top-[70px] left-[130px] lg:top-[234px] lg:left-[116px] font-pops text-white text-[16px] font-[600] z-[1]' href="">Learn More</a>
                 </div>
                 <div className="lg:w-1/2 relative after:absolute after:top-0 after:left-0 after:[] after:h-full after:w-full after:bg-[rgba(0,0,0,0.36)]">
                    <img src={service3} alt="" />
                    <h3 className='absolute lg:top-[147px] lg:left-[116px] font-pops top-[20px] left-[10px] text-center text-white lg:text-[36px] font-[700] z-[1]'>Modern natural oil and gas refineries.</h3>
                    <a className='absolute border-2 border-[#F40404] lg:p-[10px] hover:bg-[#F40404] top-[70px] left-[130px] lg:top-[234px] lg:left-[116px] font-pops text-white text-[16px] font-[600] z-[1]' href="">Learn More</a>
                 </div>
             </div>
        </div>
    </section>
  )
}

export default Service