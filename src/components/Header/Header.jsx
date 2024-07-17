import React, { useEffect, useRef, useState } from 'react'
import Container from '../Layouts/Container'
import Flex from '../Layouts/Flex'
import { FaBarsStaggered } from "react-icons/fa6";
import Search from './Search';
import { FaSearch } from "react-icons/fa";
import { IoPerson } from "react-icons/io5";
import { GoTriangleDown } from "react-icons/go";
import { FaCartShopping } from "react-icons/fa6";
import Dropdown from '../Layouts/Dropdown';
import cartimg from "../../assets/cartimg.png"
import { RxCross2 } from "react-icons/rx";

const Header = () => {

  const categoryRef = useRef();
  const userRef = useRef();
  const cartRef = useRef();

  const [categoryShow, setCategoryShow] = useState(false)
  const [userShow, setUserShow] = useState(false)
  const [cartShow, setCartShow] = useState(false)

  useEffect(() => {
    document.body.addEventListener('click', (e) => {
      if (categoryRef.current.contains(e.target)) {
        setCategoryShow(true);
      } else {
        setCategoryShow(false);
      }
      
      if (userRef.current.contains(e.target)) {
        setUserShow(true);
      } else {
        setUserShow(false);
      }

      if (cartRef.current.contains(e.target)) {
        setCartShow(true);
      } else {
        setCartShow(false);
      }
    })
  }, []);

  return (
    <div className='bg-[#F5F5F3]'>

      <Container className="py-10">

        <Flex className="justify-between">

          <Dropdown className="z-50 relative" dropRef={categoryRef}>
            <div className='flex items-center gap-x-2.5 font-dm text-base'>
              <FaBarsStaggered className='text-x1' />Shop by Category
            </div>
            {categoryShow && (
              <ul className='absolute w-[263px] top-[50px] bg-primary text-[#BEBEBE] font-dm text-base'>
                <li className='py-4 px-5 border-b border-solid border-[#2D2D2D] hover:text-white hover:mx-2.5 ease-in duration-300 hover:font-bold'>Accesories</li>
                <li className='py-4 px-5 border-b border-solid border-[#2D2D2D] hover:text-white hover:mx-2.5 ease-in duration-300 hover:font-bold'>Furniture</li>
                <li className='py-4 px-5 border-b border-solid border-[#2D2D2D] hover:text-white hover:mx-2.5 ease-in duration-300 hover:font-bold'>Electronics</li>
                <li className='py-4 px-5 border-b border-solid border-[#2D2D2D] hover:text-white hover:mx-2.5 ease-in duration-300 hover:font-bold'>Clothes</li>
                <li className='py-4 px-5 border-b border-solid border-[#2D2D2D] hover:text-white hover:mx-2.5 ease-in duration-300 hover:font-bold'>Bags</li>
                <li className='py-4 px-5 border-b border-solid border-[#2D2D2D] hover:text-white hover:mx-2.5 ease-in duration-300 hover:font-bold'>Home appliances</li>
              </ul>
            )}
          </Dropdown>

          <div className='relative'>
            <Search className='py-4 px-5 w-[600px] font-dm text-base text-[#C4C4C4] outline-none rounded' placeholder="Search Products" />
            <FaSearch className='text-x1 absolute top-5 right-5' />
          </div>

          <div className='flex items-center gap-x-10'>
            <Dropdown className="z-50 relative" dropRef={userRef} >
            <div className='flex items-center'>
              <IoPerson className='text-x1' />
              <GoTriangleDown className='text-x1' />
            </div>

            {userShow && (
              <div className='absolute right-0 w-[200px] top-[50px] bg-primary text-[#BEBEBE] font-dm text-base shadow'>
                <p className='bg-primary text-base font-dm py-5 text-center font-bold text-white'>My Account</p>
                <p className='bg-white text-base font-dm py-5 text-center font-bold text-primary'>Log out</p>
              </div>
            )}

            </Dropdown>
            
            <Dropdown className="z-50 relative" dropRef={cartRef}>
            <div>
              <FaCartShopping className='text-x1' />
            </div>

            {cartShow && (
              <div className='absolute right-0 w-[360px] top-[50px] text-[#BEBEBE] font-dm text-base shadow'>
                
                <Flex className="justify-between items-center p-5 bg-[#f5f5f5]">
                  <img src={cartimg} alt=''/>
                  <p className='text-base font-dm font-bold text-primary'>Black Smart Watch</p>
                  
                  <div>
                    <RxCross2 className='text-x1 ml-3 text-primary font-bold' />
                  </div>
                </Flex>
                
                <div className='bg-white p-5'>
                  
                  <div>
                    <p className='font-dm text-base text-[#767676]'>Subtotal : <span className='font-dm text-base text-black text-bold'>$44.00</span></p>
                  </div>
                  
                  <div className='mt-[13px]'>
                    <button className='py-4 px-10 border border-primary font-dm hover:bg-sky-700 font-bold text-primary text-[14px] '>View cart</button>
                    <button className='py-4 px-10 border border-primary font-dm hover:bg-sky-700 font-bold text-primary text-[14px] ml-3' >Checkout</button>
                  </div>
                
                </div>
              
              </div>
            )}

            </Dropdown>
          
          </div>

        </Flex>
      </Container>

    </div>
  )
}


export default Header