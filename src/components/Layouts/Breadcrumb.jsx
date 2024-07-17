import React from 'react'
import Container from '../Layouts/Container';
import { FaAngleRight } from "react-icons/fa";
const Breadcrumb = () => {
  return (
    <div>
        <Container>
        <h2 className='font-dm font-bold text-[49px] text-primary mt-[140px]' >{window.location.pathname.split("/")[1]}</h2>
        <p className='font-dm text-base text-[#767676] flex items-center gap-x-3 mt-[10px]'>Home <FaAngleRight /> {window.location.pathname.split("/")[1]}</p>
      </Container>
    </div>
  )
}

export default Breadcrumb