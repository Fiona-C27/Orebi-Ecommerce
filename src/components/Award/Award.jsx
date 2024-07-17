import React from 'react'
import Container from '../Layouts/Container'
import award from '../../assets/award.png'
const Award = () => {
  return (
    <div className='mt-[130px]'>
        <Container>
            <img src={award} alt=''/>
        </Container>
    </div>
  )
}

export default Award