import React from 'react'
import Container from '../Layouts/Container'
import adone from '../../assets/adone.png'
import adtwo from '../../assets/adtwo.png'
import adthree from '../../assets/adthree.png'
import Flex from '../Layouts/Flex'
const Advertise = () => {
  return (
   <>
   <div className='mt-44'>
   <Container>
    <Flex className="justify-between gap-x-8">
    <div>
      <img src={adone} alt=''/>
    </div>

    <div>
        <img src={adtwo} alt=''/>
        <img className="mt-[30px] " src={adthree} alt=''/>
    </div>
    </Flex>
   </Container>
   </div>
   </>
  )
}

export default Advertise