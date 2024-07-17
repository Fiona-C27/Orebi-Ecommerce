import React, { useState } from 'react';
import { GoTriangleDown } from "react-icons/go";
import Flex from '../Layouts/Flex'

import LeftSidebarItem from './LeftSidebarItem';

const LeftSidebarContent = ({dropDown, dropTitle}) => {
    const [show, setShow] = useState(dropDown);
    const [drop, setDrop] = useState(dropDown);
  return (
    <> 
     {
        drop ? (
        <Flex 
    className='items-center justify-between mt-[53px] pb-[35px]'>
    <div onClick = {() => setShow(!show)} 
    className='cursor-pointer font-dm text-[20px] font-bold text-primary'>
      {dropTitle}</div>
    <GoTriangleDown />
    </Flex>
    ) : (
      <div className='cursor-pointer font-dm text-[20px] font-bold text-primary pb-[35px]'>{dropTitle}</div>
    )}
    
    {
        show && (
            <div>
        <LeftSidebarItem subDropDown={true} title="Color" >
          <p>demo</p>
        </LeftSidebarItem>
        <LeftSidebarItem subDropDown={true} title="Category 2" color="yellow">
          <p>demo</p>
        </LeftSidebarItem>
        <LeftSidebarItem subDropDown={true} title="Category 3" color="blue">
          <p>demo</p>
        </LeftSidebarItem>
        <LeftSidebarItem subDropDown={true} title="Category 4" color="green">
          <p>demo</p>
        </LeftSidebarItem>
        <LeftSidebarItem subDropDown={true} title="Category 5" color="orange">
          <p>demo</p>
        </LeftSidebarItem>
    </div>
        )
    }
    {
        drop == false && (
            <div>
        <LeftSidebarItem subDropDown={true} title="Color">
          <p>demo</p>
        </LeftSidebarItem>
        <LeftSidebarItem subDropDown={true} title="Category 2" color="yellow">
          <p>demo</p>
        </LeftSidebarItem>
        <LeftSidebarItem subDropDown={true} title="Category 3" color="blue">
          <p>demo</p>
        </LeftSidebarItem>
        <LeftSidebarItem subDropDown={true} title="Category 4" color="green">
          <p>demo</p>
        </LeftSidebarItem>
        <LeftSidebarItem subDropDown={true} title="Category 5" color="orange">
          <p>demo</p>
        </LeftSidebarItem>
    </div>
        )
    }
    </>
  )
}

export default LeftSidebarContent