// components/MobileMenu.js
import React, { useState } from 'react';
import { navData } from '../data/navData';

const MobileMenu = ({ isOpen, onClose, data }) => {
  const [activeTab, setActiveTab] = useState(null);

  if (!isOpen) return null;

  return (
      <div className="mobile-menu">
           <div className='topbar'></div>
        <div className='containTopBlock'>
          <span>{navData.topBar.award}</span>
        </div>
      <div className="mobile-menu-header">
        <img src="/images/ferrari-logomain.webp" alt="Ferrari logo" />
        <button onClick={onClose} className="close-button">
          <img src="/images/menu-slide.webp" alt="close" style={{ width: '24px', height: '24px' }} />
        </button>
      </div>

      <div className="award-banner">
        {data.topBar.award}
      </div>

      <div className="mobile-menu-content">
        {Object.entries(data.dropdowns).map(([key, dropdown]) => (
          <div key={key} className="mobile-tab">
            <button
              className={`tab-button ${activeTab === key ? 'active' : ''}`}
              onClick={() => setActiveTab(activeTab === key ? null : key)}
            >
              {dropdown.title}
              <img 
                src="/images/dropdown-slide.webp" 
                alt=""
                style={{ width: '12px', height: '12px' }}
              />
            </button>
            <div className={`tab-content ${activeTab === key ? 'active' : ''}`}>
              {dropdown.items.map((item, index) => (
                <a 
                  key={index}
                  href="/#"
                  className={`mobile-menu-link ${item.isHeader ? 'header' : ''}`}
                >
                  {item.title}
                </a>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className="mobile-menu-footer">
        <a href="/#" className="footer-link">
          <img src="/images/search-logo.webp" alt="search" style={{ width: '20px', height: '20px' }} />
          <span>Global Search</span>
        </a>
        <a href="/#" className="footer-link">
          {data.topBar.phone}
        </a>
        <a href="/#" className="footer-link">
          {data.topBar.address}
        </a>
      </div>
    </div>
  );
};

export default MobileMenu;