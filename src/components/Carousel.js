import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import CustomNextArrow from './CustomNextArrow';
import CustomPrevArrow from './CustomPrevArrow';


const Carousel = ({ children, customPrevClassName, customNextClassName }) => {
  const settings = {
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    prevArrow: <CustomPrevArrow customClassName={customPrevClassName} />,
    nextArrow: <CustomNextArrow customClassName={customNextClassName} />,
    responsive: [
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return <Slider {...settings}>{children}</Slider>;
};







export default Carousel;
