import React,{useState} from 'react'
import logo from "../assects/logo.png"
import { FaBars } from "react-icons/fa";
import { ImCross } from "react-icons/im";
import ScrollspyNav from "react-scrollspy-nav";

const Nav = () => {
    let [show, setShow] = useState(false)

    let handleShow = () =>{
        setShow(!show)
    }
  return (
    <section className='bg-[#F40404] lg:py-[20px] fixed top-[64px] lg:top-[50px] left-0 w-full z-[999]'>
        <div className="max-w-container mx-auto">
            <div className="flex justify-between items-center">
                <div className="">
                    <img src={logo} alt="" />
                </div>
                <div className="">
                <ScrollspyNav
                    scrollTargetIds={["banner", "about", "service","gallary","blog","contact"]}
                    offset={100}
                    activeNavClass="is-active"
                    scrollDuration="1000"
                    headerBackground="true"
                >
                    <ul className={`lg:flex lg:gap-x-[47px] absolute left-0 top-0 lg:static ${show ? 'sm:top-[45pxpx] top-[45px] left-0 w-full bg-[#797777] z-[999] py-4 text-center transition duration-300 ease-in-out' :"top-[-320px] left-0 w-full transition duration-300 ease-in-out"}`}>
                        <li className='py-2 lg:py-0'><a className='font-pops text-white text-[16px] font-semibold hover:text-black' href="#banner">Home</a></li>
                        <li className='py-2 lg:py-0'><a className='font-pops text-white text-[16px] font-semibold hover:text-black' href="#about">About</a></li>
                        <li className='py-2 lg:py-0'><a className='font-pops text-white text-[16px] font-semibold hover:text-black' href="#service">Services</a></li>
                        <li className='py-2 lg:py-0'><a className='font-pops text-white text-[16px] font-semibold hover:text-black' href="#gallary">Gallery</a></li>
                        <li className='py-2 lg:py-0'><a className='font-pops text-white text-[16px] font-semibold hover:text-black' href="#blog">Blog</a></li>
                        <li className='py-2 lg:py-0'><a className='font-pops text-white text-[16px] font-semibold border-2 border-white-500 p-[10px] hover:bg-white hover:text-black' href="#contact">CONTACT</a></li>
                    </ul>
               </ScrollspyNav>
                
                </div>
                <div className="lg:hidden" onClick={handleShow}>
                    {show == true ? <ImCross />: <FaBars />}
                </div>
            </div>
        </div>
    </section>
  )
}

export default Nav