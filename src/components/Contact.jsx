import React from 'react'
import map from "../assects/maps.png"
import logob from "../assects/logob.png"
import { CiMail } from "react-icons/ci";
import { FaPhoneVolume } from "react-icons/fa6";
import { HiOutlineMapPin } from "react-icons/hi2";
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { TiSocialLinkedinCircular } from "react-icons/ti";
import { FaInstagram } from "react-icons/fa";
import cd1 from "../assects/Cert1.png"
import cd2 from "../assects/Cert2.png"

const Contact = () => {
  return (
    <section id='contact'>
          <div className="">
            <img src={map} alt="" />
          </div>
          <div className="bg-[#F40404] py-[46px]">
            <div className="max-w-container mx-auto">
                <div className="lg:flex">
                    <div className="lg:w-2/3">
                        <h3 className='font-pops font-[700] text-white text-[36px]'>Want to join as member branch in your area?</h3>
                    </div>
                    <div className="lg:w-1/3 lg:text-end text-center">
                        <a className='font-pops font-[600] text-white text-[16px]  border-2 border-[#FFFF] p-[10px] hover:bg-[#FFFF] hover:text-[#000000] items-center ' href="">CONTACT</a>
                    </div>
                </div>
            </div>
          </div>
          <div className=" bg-[#1F1F1F] lg:py-[149px] py-[60px]">
            <div className="max-w-container mx-auto">
                <div className="flex flex-wrap">
                    <div className="lg:w-1/4 sm:w-1/4 w-1/2">
                        <ul className='font-pops text-white'>
                            <li><a href=""><img src={logob} alt="" /></a></li>
                            <li className='flex items-center pt-[33px]'> <CiMail />mail@yourcompany.com</li>
                            <li className='flex items-center pt-[15px]'> <FaPhoneVolume />+896 120 5889 (Toll free)</li>
                            <li className='flex items-center pt-[15px] pb-[34px]'> <HiOutlineMapPin />101 Baker Street, New York, USA, 12345</li>
                            <div className="flex text-[#F40404] gap-x-[12px] pb-5">
                               <FaFacebook />
                               <FaTwitter />
                               <TiSocialLinkedinCircular />
                               <FaInstagram />
                            </div>
                        </ul>
                    </div>
                    <div className="lg:w-1/4 sm:w-1/4 w-1/2 lg:text-end sm:text-end text-center">
                        <ul className='font-pops text-white'>
                            <li><a className='font-pops font-[700] text-[16px] text-white ' href="">Company</a></li>
                            <li><a  className='font-pops font-[400] text-[14px] text-white ' href="">Home</a></li>
                            <li><a  className='font-pops font-[400] text-[14px] text-white ' href="">About</a></li>
                            <li><a   className='font-pops font-[400] text-[14px] text-white ' href="">Services</a></li>
                            <li><a   className='font-pops font-[400] text-[14px] text-white ' href="">Gallery</a></li>
                        </ul>
                    </div>
                    <div className="lg:w-1/4 sm:w-1/4 w-1/2 lg:text-end sm:text-end">
                        <ul className='font-pops text-white'>
                            <li><a className='font-pops font-[700] text-[16px] text-white ' href="">Others</a></li>
                            <li><a  className='font-pops font-[400] text-[14px] text-white ' href="">Blog</a></li>
                            <li><a  className='font-pops font-[400] text-[14px] text-white ' href="">Contact</a></li>
                            <li><a  className='font-pops font-[400] text-[14px] text-white ' href="">Terms & Conditions</a></li>
                            <li><a  className='font-pops font-[400] text-[14px] text-white ' href="">Privacy Policy</a></li>
                        </ul>
                    </div>
                    <div className="lg:w-1/4 sm:w-1/4 w-1/2 lg:text-end sm:text-end text-center">
                        <a className=" font-pops text-white"href="">Certificate</a>
                        <div className="flex ml-[250px] gap-2">
                                <img src={cd1} alt="" />
                                <img src={cd2} alt="" />
                            </div>
                    </div>
                </div>
            </div>
          </div>
          <div className="bg-[#282828] py-[42px]">
            <div className="max-w-container mx-auto">
                <div className="">
                    <p className='font-pops font-[500] text-[16px] text-[#6C6C6C]'>© Copyright 2022 by AltDesain Studio – All right reserved.</p>
                </div>
            </div>
          </div>
    </section>
  )
}

export default Contact