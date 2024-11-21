// NewsletterCTA.js
import React from 'react';
import DiscoverBtn from './DiscoverBtn';

function NewsletterCTA() {
  return (
    <section className='newsletter-section'>
      <div className='newsletter-overlay'>
        <div className='newsletter-card'>
          <div className='flexnewstitle'>
            <span></span>
            <h6>NEWSLETTER</h6>
          </div>
          <h5>JOIN LIFE IN THE FAST LANE</h5>
          <DiscoverBtn />
        </div>
      </div>
    </section>
  );
}

export default NewsletterCTA;