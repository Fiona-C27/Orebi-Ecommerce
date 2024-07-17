import React from 'react';
import Container from "../Layouts/Container";
import Flex from "../Layouts/Flex";

import { RiNumber2 } from "react-icons/ri";
import { FaTruck } from "react-icons/fa";
import { FaUndo } from "react-icons/fa";
const AdditionalInfo = () => {
  return (
    <>
    <div className='border-b border-[#F0F0F0] py-8 mt-[-12px]'>
    <Container>

<Flex className="justify-between">
    <div className='flex gap-x-2.5 items-center '>
    <RiNumber2 className='text-[20px] font-bold' />
    <p className='font-dm text-base text-[#6D6D6D]'>Two years warranty</p>
    </div>

    <div className='flex gap-x-2.5 items-center '>
    <FaTruck className='text-[20px] font-bold'  /> 
    <p className='font-dm text-base text-[#6D6D6D]'>Free shipping</p>
    </div>

    <div className='flex gap-x-2.5 items-center '>
    <FaUndo className='text-[20px] font-bold'  />
    <p className='font-dm text-base text-[#6D6D6D]'>Return policy in 30 days</p>
    </div>
   
</Flex>

</Container>
    </div>
    </>
  )
}

export default AdditionalInfo