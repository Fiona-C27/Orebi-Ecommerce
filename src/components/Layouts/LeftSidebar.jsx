import React from 'react'
import LeftSidebarContent from '../Layouts/LeftSidebarContent'

const LeftSidebar = () => {
  return (
    <div>
        <LeftSidebarContent dropDown={false} dropTitle="Shop by Category"/>
        <LeftSidebarContent dropDown={true} dropTitle="Shop by Color"/>
        <LeftSidebarContent dropDown={true} dropTitle="Shop by Brand"/>
        <LeftSidebarContent dropDown={false} dropTitle="Shop by Price"/>
        
    </div>
  )
}

export default LeftSidebar