// components/Dropdown.js
import React, { useState } from 'react';
import '../App.css';

const Dropdown = ({ title, items }) => {
  const [showImageId, setShowImageId] = useState(null);
  const [showDropdown, setShowDropdown] = useState(false);

  return (
    <div 
      className={`item_link_dropdown ${showDropdown ? 'active' : ''}`}
      onMouseEnter={() => setShowDropdown(true)}
      onMouseLeave={() => setShowDropdown(false)}
    >
      <a className='first-dropdown'>
        <p>{title}</p>
        <img src="dropdown.png" alt="" />
      </a>
      <div className={`dropdown_buy ${showDropdown ? 'visible' : ''}`}>
        <div className='contain_dropdown_link'>
          {items.map((item, index) => (
            <div 
              key={index} 
              className={`dropdown_item ${item.isHeader ? 'header-item' : ''}`}
            >
              <a 
                onMouseEnter={() => item.showImage && setShowImageId(item.image)}
                onMouseLeave={() => setShowImageId(null)}
              >
                {item.title}
              </a>
            </div>
          ))}
        </div>
        <div className='dropdown_right_content'>
          {items
            .filter(item => item.showImage && item.image)
            .map((item, index) => (
              <img
                key={index}
                className='img_content_drop'
                src={item.image}
                alt={item.title}
                style={{ display: showImageId === item.image ? 'block' : 'none' }}
              />
            ))}
        </div>
      </div>
    </div>
  );
};

export default Dropdown;