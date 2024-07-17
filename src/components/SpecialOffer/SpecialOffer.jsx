import React from 'react'
import Container from '../Layouts/Container'
import Heading from '../Layouts/Heading'
import Product from '../Layouts/Product'
import Flex from '../Layouts/Flex'

const SpecialOffer = () => {
  return (
    <div>
        <div className='mt-[128px]'> 
        <Container>
            <Heading title="Special Offers"/>
            <Flex className='gap-x-10'>
            <Product badge= {true}/>
            <Product badge= {true}/>
            <Product badge= {true}/>
            <Product badge= {true}/>
            </Flex>
           
        </Container>
    </div>
    </div>
  )
}

export default SpecialOffer