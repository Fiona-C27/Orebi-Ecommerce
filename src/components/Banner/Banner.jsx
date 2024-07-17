import React, { useState } from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import banner from "../../assets/banner.png"


const Banner = () => {

    const [activeDot, setActiveDot] = useState(0);

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        beforeChange: (prev, next) => {
            setActiveDot(next);
        },
        appendDots: (dots) => (
            <div
              style={{
                position: "absolute",
                top: "40%",
                left: "150px",

              }}
            >
              <ul style={{ margin: "0px" }}> 
              {dots.map((item) => {
                return <li style={{ display: "block", marginTop: "10px"}}>{item}</li>
              })} </ul>
            </div>
          ),
          customPaging: (i) => (
            <div
              style={
              i === activeDot ? 
              {
                width: "30px",
                borderRight: "3px #262626 solid",
                paddingTop: "10px",
                paddingBottom: "10px",
                paddingRight: "30px",
                fontFamily: "dm sans",
                fontSize: "14px",
                color: "#262626",
              } :  {
                width: "30px",
                borderRight: "3px white solid",
                paddingTop: "10px",
                paddingBottom: "10px",
                paddingRight: "30px",
                fontFamily: "dm sans",
                fontSize: "14px",
                color: "transparent",
              }

            }
            >
              0{i + 1}
            </div>
          ),
      };

      

  return (
    
      <Slider {...settings}>
        <div >
          <img className='w-full' src={banner} alt=''/>
        </div>
        <div>
        <img className='w-full' src={banner} alt=''/>
        </div>
        <div>
        <img className='w-full' src={banner} alt=''/>
        </div>
      </Slider>
  
  )
}

export default Banner