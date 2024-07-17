import React from 'react'
import Container from '../Layouts/Container'
import Heading from '../Layouts/Heading'
import Product from '../Layouts/Product'
import SampleNextArrow from '../Layouts/SampleNextArrow'
import SamplePrevArrow from '../Layouts/SamplePrevArrow'
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";

const NewArrival = () => {

  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />
  };
  return (
    
    <div className='mt-[128px]'> 
        <Container>
            <Heading title="New Arrivals"/>
            {/*<Flex className='gap-x-10'>*/}
            <Slider className=''{...settings}>
            <Product badge= {true}/>
            <Product badge= {false}/>
            <Product badge= {true}/>
            <Product badge= {false}/>
            </Slider>
            
             
            
            {/*</Flex>*/}
           
        </Container>
    </div>
  );
}

export default NewArrival