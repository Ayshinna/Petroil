import React from 'react'
import b1 from "../assects/blog03 (1).png"
import b2 from "../assects/blog03 (2).png"
import b3 from "../assects/blog03 (3).png"

const Blog = () => {
  return (
    <section id='blog' className='bg-[#F0F0F0]'>
        <div className="max-w-container mx-auto">
            <div className="lg:flex py-[150px] sm:ml-[170px] lg:ml-0 ml-[15px] ">
                <div className="lg:w-1/3 w-full ">
                    <img  src={b2} alt="" />
                </div>
                <div className="lg:w-1/3 w-full">
                    <img src={b3} alt="" />
                </div>
                <div className="lg:w-1/3 w-full">
                    <img src={b1} alt="" />
                </div>
                </div>
        </div>
    </section>
  )
}

export default Blog