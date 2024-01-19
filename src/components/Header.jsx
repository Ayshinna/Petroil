import React from 'react'
import { CiMail } from "react-icons/ci";
import { FaPhoneAlt } from "react-icons/fa";
import { FaFacebookF,FaTwitter, FaLinkedinIn,FaInstagram } from "react-icons/fa";

const Header = () => {
  return (
    <section className='lg:py-[17px] bg-[#282828] fixed top-0 left-0 w-full z-[999]'>
         <div className="max-w-container mx-auto">
            <div className="flex text-white flex-wrap ">
                <div className="w-full lg:w-1/6">
                    <div className="flex items-center">
                        <CiMail />
                        <p>mail@yourcompany.com</p>
                    </div>
                </div>
                <div className="w-full lg:w-1/6">
                    <div className=" flex items-center">
                        <FaPhoneAlt />
                        <p>+896 120 5889 (Toll free)</p>
                    </div>
                </div>
                <div className="w-full lg:w-4/6 ">
                     <div className="flex items-center justify-end gap-x-[19px]  ">
                          <FaFacebookF />
                          <FaTwitter />
                          <FaLinkedinIn />
                          <FaInstagram />
                     </div>
                </div>
            </div>
         </div>
    </section>
  )
}

export default Header