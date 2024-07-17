import React from 'react'

const Badge = ({title}) => {
  return (
    <div><span className='absolute top-[20px] left-[20px] inline-block bg-primary py-2 px-8 text-white font-dm font-bold '>{title}</span></div>
  )
}

export default Badge