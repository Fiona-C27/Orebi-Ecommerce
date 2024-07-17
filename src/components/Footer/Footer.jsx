import React from 'react'
import Container from '../Layouts/Container'
import logo from '../../assets/logo.png'

import { FaFacebookF } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <div className='bg-[#F5F5F5] h-[374px] mt-[140px]'>
        <Container>
          <div className='flex justify-between py-[60px]'>
            <div>
                <h2 className='font-dm text-base text-[16px] text-primary font-bold pb-4'>MENU</h2>
                <p className='font-dm text-[14px] text-[#6D6D6D] pb-2'>Home</p>
                <p className='font-dm text-[14px] text-[#6D6D6D] pb-2'>Shop</p>
                <p className='font-dm text-[14px] text-[#6D6D6D] pb-2'>About</p>
                <p className='font-dm text-[14px] text-[#6D6D6D] pb-2'>Contact</p>
                <p className='font-dm text-[14px] text-[#6D6D6D] pb-2'>Journal</p>
            </div>

            <div>
            <h2 className='font-dm text-base text-[16px] text-primary font-bold pb-4'>SHOP</h2>
                <p className='font-dm text-[14px] text-[#6D6D6D] pb-2'>Category 1</p>
                <p className='font-dm text-[14px] text-[#6D6D6D] pb-2'>Category 2</p>
                <p className='font-dm text-[14px] text-[#6D6D6D] pb-2'>Category 3</p>
                <p className='font-dm text-[14px] text-[#6D6D6D] pb-2'>Category 4</p>
                <p className='font-dm text-[14px] text-[#6D6D6D] pb-2'>Category 5</p>
            </div>
            
            <div>
                <h2 className='font-dm text-base text-[16px] text-primary font-bold pb-4'>HELP</h2>
                <p className='font-dm text-[14px] text-[#6D6D6D] pb-2'>Privacy Policy</p>
                <p className='font-dm text-[14px] text-[#6D6D6D] pb-2'>Terms & Conditions</p>
                <p className='font-dm text-[14px] text-[#6D6D6D] pb-2'>Special E-shop</p>
                <p className='font-dm text-[14px] text-[#6D6D6D] pb-2'>Shipping</p>
                <p className='font-dm text-[14px] text-[#6D6D6D] pb-2'>Secure Payments</p>
            </div>
            
            <div>
                <h2 className='font-dm text-base text-[16px] text-primary font-bold pb-4'>(052) 611-5711</h2>
                <h2 className='font-dm text-base text-[16px] text-primary font-bold pb-4'>company@domain.com</h2>
                <p className='font-dm text-[14px] text-[#6D6D6D]'>575 Crescent Ave. Quakertown, PA 18951</p>
            </div>
            
            <div>
            <img src={logo} alt=''/>
            </div>
          
          </div>
        <div className='flex justify-between pb-10 '>
        <div className='flex gap-x-2 '>
                <FaFacebookF />
                <FaLinkedinIn />
                <FaInstagram />
                </div>
          <div className='font-dm text-[#6D6D6D] text-[14px]'>
                <p>2020 Orebi Minimal eCommerce Figma Template by Adveits</p>
            </div>
        </div>
        
        </Container>

    </div>
  )
}

export default Footer