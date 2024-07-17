import React, { useState } from 'react';
import { FaPlus } from "react-icons/fa6";
import Flex from '../Layouts/Flex'

const LeftSidebarItem = ({subDropDown, title, children, color}) => {
    const [show, setShow] = useState(false);
    const [drop, setDrop] = useState(subDropDown);
  return (
    <div>
        {
        drop ? (
        <Flex 
    className='items-center justify-between border-b border-solid border-[#D8D8D8] pb-[21px] mb-[20px]'>
    <div onClick = {() => setShow(!show)} 
    className='cursor-pointer font-dm text-base text-[#767676] '>
     {
        color && 
        <span className='inline-block w-[10px] h-[10px] rounded-full mr-[10px]' style={{background: color}}></span> 
     }
     {title}</div>
        <FaPlus className='font-dm text-[#767676] text-sm'/>
    </Flex>
    ) : (
      <div className='cursor-pointer font-dm text-base text-[#767676]'> <span>{color}</span> {title}</div>
    )}
    
    {
        show && (
     <div className='border-b border-solid border-[#D8D8D8] pb-[21px] mb-[20px]'>
        {children}
    </div>
        )
    }
    </div>
  )
}

export default LeftSidebarItem