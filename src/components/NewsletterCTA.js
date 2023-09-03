import React from 'react';
import DiscoverBtn from './DiscoverBtn';

function NewsletterCTA() {
  return (
    <div className='container-news'>
      <div className='overnews'>
        <div className='yelo'>
          <div className='flexnewstitle'>
            <span></span><h6>NEWSLETTER</h6>
            </div>
            <h5>JOIN LIFE IN THE FAST LANE</h5>
            <DiscoverBtn />
        </div>
      </div>
      <img src='news.webp' alt='newsletter'/>
    </div>
  );
}

export default NewsletterCTA;
