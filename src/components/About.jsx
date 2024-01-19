import React from 'react'
import about1 from "../assects/about 01.png"
import about2 from "../assects/about 02.png"
import about3 from "../assects/about 03.png"
import about4 from "../assects/about 04.png"

const About = () => {
  return (
    <section id='about' className='pt-[60px]'>
        <div className="max-w-container mx-auto">
            <div className="sm:flex lg:flex pb-[50px] lg:pb-[100px] pt-[78px] items-center">
                <div className="w-1/2">
                    <h2 className='font-pops sm:text-[30px] text-[48px] lg:text-[48px] text-[#000000] font-[700] w-[289px] sm:w-[200px] lg:w-[289px] '>The biggest supplier on the country</h2>
                </div>
                <div className=" pt-[50px] sm:pl-[30px] lg:w-1/2">
                    <p className='font-pops text-[#6C6C6C] text-[16px] font-[500] lg:w-[651px]'>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution.</p>
                </div>
            </div>
        </div>
        <div className="flex lg:gap-x-[29px] gap-x-[10px]">
            <div className="lg:w-1/4 w-1/2">
                <img src={about1} alt="" />
            </div>
           <div className="lg:w-1/4 w-1/2">
               <img src={about2} alt="" />
           </div>
           <div className="lg:w-1/4 w-1/2">
                <img src={about3} alt="" />
           </div>
            <div className="lg:w-1/4 w-1/2">
                <img src={about4} alt="" />
            </div>
        </div>
    </section>
  )
}

export default About