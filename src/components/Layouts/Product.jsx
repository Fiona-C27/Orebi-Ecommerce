import React from 'react'

import pro1 from '../../assets/pro1.png'

import Badge from '../Layouts/Badge'
import Flex from '../Layouts/Flex';

import { FaHeart } from "react-icons/fa";
import { TfiReload } from "react-icons/tfi";
import { FaShoppingCart } from "react-icons/fa";
import Container from '../Layouts/Container';

const Product = ({ badge }) => {
    return (
        <>
        <Container>
        <div className='relative overflow-y-hidden group p-2 '>
            <img src={pro1} className='w-[100%]' alt='' />
            {
                badge &&
                <Badge title="New" />
            }
            <div className='absolute bottom-[-160px] group-hover:bottom-0 left-0 w-full bg-white py-7 pr-[30px] ease-in duration-300'>
            <Flex className='items-center justify-end gap-x-4'>
                <div className='flex gap-x-2.5 items-center '>
                    <p className='font-dm text-base text-[#767676]'>Add to Wish List</p>
                    <FaHeart className='text-x1 font-bold' />
                </div>
            </Flex>
            <Flex className='items-center justify-end py-5 gap-x-4'>
                <div className='flex gap-x-2.5 items-center '>
                    <p className='font-dm text-base text-[#767676]'>Compare</p>
                    <TfiReload  className='text-x1 font-bold' />
                </div>
            </Flex>
            <Flex className='items-center justify-end gap-x-4'>
                <div className='flex gap-x-2.5 items-center '>
                    <p className='font-dm text-base text-primary font-bold'>Add to Cart</p>
                    <FaShoppingCart className='text-x1 font-bold' />
                </div>
            </Flex>
            </div>
        </div>
        <div className='mt-5 p-2'>
            <Flex className="justify-between">
            <h2 className='font-dm text-[20px] font-bold text-primary'>Basic Crew Neck Tee</h2>
            <p className='font-dm text-[16px] text-[#767676]'>$44.00</p>
            </Flex>
            <h2 className='font-dm text-[16px] text-[#767676] pt-[15px]'>Black</h2>
        </div>
        </Container>
        </>
    )
}

export default Product