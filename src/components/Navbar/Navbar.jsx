import React from 'react'
import logo from '../../assets/logo.png'
import Flex from '../Layouts/Flex'
import Container from '../Layouts/Container'
const Navbar = () => {
  return (
   <nav>
    
    <Container>
       
       <div className='py-8'>
       
       {/*<div className='flex item-center'>*/}
       
       <Flex className="items-center">
       
       <div className='w-3/12'>
       <img src={logo} alt=''/>
       </div>
       
       <div className='w-9/12'>
       <ul className='flex justify-end gap-x-20 font-dm'>
        <li className='text-[#767676] text-[18px] hover:text-primary font-bold'>Home</li>
        <li className='text-[#767676] text-[18px] hover:text-primary font-bold'>Shop</li>
        <li className='text-[#767676] text-[18px] hover:text-primary font-bold'>About</li>
        <li className='text-[#767676] text-[18px] hover:text-primary font-bold'>Contacts</li>
        <li className='text-[#767676] text-[18px] hover:text-primary font-bold'>Journal</li>
       </ul>
       </div>
       
       </Flex>
       
       {/*</div>*/}
       </div>
   
   </Container>
   
   </nav>
  )
}

export default Navbar