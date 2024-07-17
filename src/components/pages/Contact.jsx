import React from 'react'
import map from '../../assets/map.png'
import { Button, Input } from 'antd'
import Container from '../Layouts/Container'
import Breadcrumb from '../Layouts/Breadcrumb'

const Contact = () => {
  
  return (
    <Container>
      <Breadcrumb/>
      <h1 className='font-dm font-bold text-[39px] text-primary mt-[100px]'>Fill up a Form</h1>
      <p className='font-dm text-bold text-primary text-[16px] mt-[20px]'>Name</p>
      <Input placeholder="Your name here" />
      <br/>
      <br/>
      <p className='font-dm text-bold text-primary text-[16px] mt-[20px]'>Email</p>
      <Input placeholder="Your email here" />
      <br/>
      <br/>
      <p className='font-dm text-bold text-primary text-[16px] mt-[20px]'>Message</p>
      <Input placeholder="Your message here" />
      <br/>
      <br/>
      <Button type='primary'>Post</Button>

      <img src={map} className='mt-[100px]' alt='' />

    </Container>
  )
}

export default Contact