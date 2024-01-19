import React from 'react'
import Ban from "../assects/banner.png"

const Banner = () => {
  return (
    <section id='banner' className='bg-no-repeat bg-center bg-cover w-full z-[1] sm:top-[100px] top-[74px] relative after:absolute after:top-0 after:left-0 after:[""] after:h-full after:w-full after:bg-[#00000071] after:z-[-1]' style={{background:`url(${Ban})`}}>
        <div className="max-w-container mx-auto">
            <div className="">
                <h1 className=' sm:pl-[50px] sm:text-center lg:text-start font-pops text-[#FFFFFF] text-[40px] lg:text-[64px] font-[700] lg:pt-[257px] pt-[40px]  lg:w-[900px]'>We exist since 1975 on the oil and gas industry.</h1>
                <div className=" sm:pl-[50px] sm:text-center lg:text-start pt-[31px] pb-[50px] lg:pb-[258px]">
                <a className=' font-pops text-[#FFFFFF] text-[16px] font-[600] border-2 border-[#F40404] p-[10px] hover:bg-[#F40404] ' href="">LEARN MORE</a>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Banner