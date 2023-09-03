import React from 'react';

const CustomPrevArrow = (props) => (
  <button {...props} type="button" className={`slick-prev ${props.customClassName}`}>
    <span className="fa fa-angle-left"></span>
  </button>
);

export default CustomPrevArrow;
