import React, { useState } from 'react'
import Breadcrumb from '../Layouts/Breadcrumb'
import Container from '../Layouts/Container'
import Flex from '../Layouts/Flex'
import Pagination from '../Layouts/Pagination';
import LeftSidebar from '../Layouts/LeftSidebar';



const Shop = () => {
  const [show, setShow] = useState(5);
  const handleItemChange = (e) =>{
    setShow(+e.target.value);
}
  return (
    <div>
      <Container>
        <Breadcrumb />
        <Flex className='gap-x-10 mt-[130px]'>
          <div className='w-1/4'>
            <LeftSidebar/>
          </div>
          
          <div className='w-3/4 relative'>
          <div className='flex justify-end gap-x-10 mb-[60px]'>
          <div className='flex items-center gap-x-[14px]'>
          <div for="countries" class="block font-dm text-[#767676] text-base">Sort by:</div>
            <div className='w-[239px]'>
              <select 
              id="countries" 
              class=" border border-[#F0F0F0] font-dm text-[#767676] text-base focus:border-black-500 block w-full p-2.5 ">
                <option className='font-dm text-[#767676] text-base' selected>Feature</option>
                <option value="US">United States</option>
                <option value="CA">Canada</option>
                <option value="FR">France</option>
                <option value="DE">Germany</option>
              </select>
            
            </div>
          </div>

          <div className='flex items-center gap-x-[14px]'>
          <div for="countries" class="block font-dm text-[#767676] text-base">Show:</div>
            <div className='w-[139px]'>
              <select 
              onChange={(e) => handleItemChange(e)} 
              id="countries" 
              class=" border border-[#F0F0F0] font-dm text-[#767676] text-base focus:border-black-500 block w-full p-2.5 ">
                <option value="12">12</option>
                <option value="24">24</option>
                <option value="36">36</option>
              </select>
            
            </div>
          </div>
          </div>
            <Pagination itemsPerPage={show} />
          </div>
        </Flex>
      </Container>
    </div>
  )
}

export default Shop