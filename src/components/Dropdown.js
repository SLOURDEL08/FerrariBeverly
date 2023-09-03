import React, { useState } from 'react';
import '../App.css';

function Dropdown({ title, images }) {
  const [showImageId, setShowImageId] = useState(null);
  const [showDropdown, setShowDropdown] = useState(false);

  function showImage(imageId) {
    setShowImageId(imageId);
  }

  function hideImage() {
    setShowImageId(null);
  }

  function showDropdownContent() {
    setShowDropdown(true);
  }

  function hideDropdownContent() {
    setShowDropdown(false);
  }

  return (
    <div className={`item_link_dropdown ${showDropdown ? 'active' : ''}`} onMouseEnter={showDropdownContent} onMouseLeave={hideDropdownContent}>
      <a href="/buy" className='first-dropdown'><p>{title}</p><img src="dropdown.png" alt="" /></a>
      <div className={`dropdown_buy ${showDropdown ? 'visible' : ''}`} onMouseEnter={showDropdownContent} onMouseLeave={hideDropdownContent}>
        <div className='contain_dropdown_link'>
          {images.map((image, index) => (
            <div className='dropdown_item' key={index}>
              <a href="/buy" onMouseOver={() => showImage(image)} onMouseOut={hideImage}>{image}</a>
            </div>
          ))}
        </div>
        <div className='dropdown_right_content'>
          {images.map((image, index) => (
            <img
              key={index}
              id={image}
              className='img_content_drop'
              src={`${image}.webp`}
              alt="représentation content"
              style={{ display: showImageId === image ? 'block' : 'none' }}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Dropdown;
