import React from 'react'
import T1 from "../assects/gallaryT1.png"
import G01 from "../assects/gallary01.png"
import G02 from "../assects/gallary02.png"
import G03 from "../assects/gallary03.png"
import G04 from "../assects/gallary04.png"

const Gallery = () => {
  return (
    <section id='gallary'>
        <div className="bg-[#F0F0F0] ">
            <div className="max-w-container mx-auto">
                <div className="lg:flex sm:flex lg:py-[136px] py-[60px]">
                    <div className="py-[100px] px-[77px] sm:py-[50px] sm:px-[77px] bg-[#F40404]">
                           <h3 className='w-[262px] font-pops font-[700] lg:text-[36px] text-[#FFFFFF] '>Learn more about our company</h3>
                    </div>
                     <div className='relative'>
                     <img  src={T1} alt="" />
                     <a className='absolute lg:right-[300px] lg:top-[200px] top-[100px] right-[125px] z-[1] font-pops font-[600] text-[16px] text-[#FFFF] hover:text-[#F40404] border-2 border-[#FFFFFF] p-[10px] hover:bg-[#FFFFFF]' href="">Learn More</a>
                     </div>
                </div>
            </div>
        </div>
        <div className="">
            <div className="max-w-container mx-auto ">
                <div className="lg:flex  lg:py-[117px] py-[20px] lg:gap-x-[30px] sm:ml-[210px] lg:ml-0 ml-[40px] ">
                    <img src={G01} alt="" />
                    <img src={G02} alt="" />
                    <img src={G03} alt="" />
                    <img src={G04} alt="" />
                </div>
            </div>
        </div>
    </section>
  )
}

export default Gallery