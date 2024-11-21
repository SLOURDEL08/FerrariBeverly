import React, { useState } from 'react';
import Dropdown from './Dropdown';
import MobileMenu from './MobileMenu';
import { navData } from '../data/navData';
import '../App.css';

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <nav>
      <div className='topbar'></div>
        <div className='containTopBlock'>
          <span>{navData.topBar.award}</span>
        </div>

      <div className='nav_firstRow'>
        <a href='/buy'>
          <div className='contain_searchButton'>
            <img src="/images/search-logo.webp" alt="search icon" />
            <p>Global Search</p>
          </div>
        </a>
        <span></span>
        <a className='underlinks' href='/buy'>{navData.topBar.phone}</a>
        <span></span>
        <a className='underlinks' href='/buy'>{navData.topBar.address}</a>
      </div>

      <div className='nav_secondRow'>
        <div className="contain_secondRow">
          <a href='/buy'>
            <img src="/images/ferrari-logomain.webp"  width="400" height="30"  alt="Ferrari logo" />
          </a>
          <div className='contain_linkNav hidden md:flex'>
            {Object.values(navData.dropdowns).map((dropdown) => (
              <Dropdown 
                key={dropdown.title}
                {...dropdown}
              />
            ))}
          </div>
          <button 
            className="toggle-menu"
            onClick={() => setIsMobileMenuOpen(true)}
          >
            <img src="/images/menu-slide.webp" width={20} height={20} alt="menu" />
          </button>
        </div>
      </div>

      <MobileMenu 
        isOpen={isMobileMenuOpen} 
        onClose={() => setIsMobileMenuOpen(false)}
        data={navData}
      />
    </nav>
  );
}

export default Navbar;
