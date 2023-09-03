import React from 'react';

const CustomNextArrow = (props) => (
  <button {...props} type="button" className={`slick-next ${props.customClassName}`}>
    <span className="fa fa-angle-right"></span>
  </button>
);

export default CustomNextArrow;
