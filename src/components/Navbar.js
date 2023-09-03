import React from 'react';
import '../App.css';
import Dropdown from '../components/Dropdown';

function Navbar() {
  return (
    <nav>
      <div className='topbar'></div>
      <a target="_self" href='/buy'>
        <div className='containTopBlock'><span>2022 CAVALLINO AWARD WINNER</span></div>
      </a>

      <div className='nav_firstRow'>
        <a target="_self" href='/buy'>
          <div className='contain_searchButton'>
            <img src="search.png" alt=" icone bouton pour rechercher" /><p>Global Search</p>
          </div>
        </a>
        <span></span>
        <a className='underlinks' target="_self" href='/buy'>(888) 785-8829</a>
        <span></span>
        <a className='underlinks' target="_self" href='/buy'>9372 Wilshire Blvd,<br />Beverly Hills CA 90212</a>
      </div>

      <div className='nav_secondRow'>
        <div className="contain_secondRow">
          <a target="_self" href='/buy'>
            <img src="ferrari-logo.webp" alt="logo de marque ferrari" />
          </a>
          <div className='contain_linkNav'>
          <Dropdown
  title="Buy"
  images={['NewLineUp', 'Preowned', 'Wheretofindus', 'Finance']}
  imagePath="newcar.webp"
/>

<Dropdown
  title="Sell"
  images={['NewLineUp', 'Preowned', 'Wheretofindus', 'Finance']}
  imagePath="newcar.webp"
/>
<Dropdown
  title="Service"
  images={['NewLineUp', 'Preowned', 'Wheretofindus', 'Finance']}
  imagePath="newcar.webp"
/>
<Dropdown
  title="News & Events"
  images={['NewLineUp', 'Preowned', 'Wheretofindus', 'Finance']}
  imagePath="newcar.webp"
/>
<Dropdown
  title="Restoration"
  images={['NewLineUp', 'Preowned', 'Wheretofindus', 'Finance']}
  imagePath="newcar.webp"
/>
<Dropdown
  title="Racing"
  images={['NewLineUp', 'Preowned', 'Wheretofindus', 'Finance']}
  imagePath="newcar.webp"
/>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
