import React from 'react'

import watch from '../../assets/watch.png'
import basket from '../../assets/basket.png'

import Breadcrumb from '../Layouts/Breadcrumb'
import Container from '../Layouts/Container'
import Flex from '../Layouts/Flex'

const About = () => {
  return (
    <div>
      <Container>
      <Breadcrumb/>
      <Flex className="justify-between mt-[140px]">
      <img src={watch} className='w-[600px] ' alt='' />
      <img src={basket} className='w-[600px]' alt=''/>
      </Flex>

      <h1 className='font-dm font-regular text-[30px] text-primary mt-[100px]'>Orebi is one of the world’s leading ecommerce brands and is internationally recognized for celebrating the essence of classic Worldwide cool looking style.</h1>

      <Flex className="gap-x-10 mt-[100px]">
        
        <div>
          <h5 className='font-dm font-bold text-[20px] text-primary pb-[10px]'>Our Vision</h5>
          <p className='font-dm text-regular text-[#767676] text-[16px]'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an   printer took a galley of type and scrambled it to make a type specimen book.</p>
        </div>

        <div>
          <h5 className='font-dm font-bold text-[20px] text-primary pb-[10px]'>Our Story</h5>
          <p className='font-dm text-regular text-[#767676] text-[16px]'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic.</p>
        </div>

        <div>
          <h5 className='font-dm font-bold text-[20px] text-primary pb-[10px]'>Our Brands</h5>
          <p className='font-dm text-regular text-[#767676] text-[16px]'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley.</p>
        </div>
      
      </Flex>

      </Container>
    </div>
  )
}

export default About