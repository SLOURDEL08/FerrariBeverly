import React from 'react';
import SplitScreenSlider from '../components/SplitScreenSlider';
import Featured from '../components/Featured'
import DiscoverBtn from '../components/DiscoverBtn';
import NewsletterCTA from '../components/NewsletterCTA';
import LatestNews from '../components/LatestNews';




function Home() {
  return (
    <div className="Home">
      <SplitScreenSlider />
      <div className='titlehome'>
        <h1>YOU'VE ARRIVED AT YOUR FINAL DESTINATION</h1>
        <p>This is the one-stop platform for all of your Ferrari needs</p>
      </div>
      <Featured />
      <div className='familybox'>
        <h3>WELCOME TO THE FAMILY</h3>
        <p>Ferrari Beverly Hills is part of the Mattioli Automotive Group. We provide clients with a tailored client experience and unparalleled access to the Ferrari lifestyle.</p>
        <img src='cava.webp' alt='marque' />
      </div>
      <section className='servicesbox'>
        <div className='services-image-container'>
          <div className="overlay-services">
            <div className='item-services'>
              <div className='flextitle'>
                <span></span>
                <h4>Services</h4>
              </div>
              <span>OFFICIAL FERRARI <br />SERVICE CENTERS</span>
              <p>We take great pride in caring for your <br />Prancing Horse</p>
              <div className="SkewButton_button__xipxU" style={{
                  height: '56px',
                  clipPath: 'polygon(25.2px 0px, calc(100% - 5.6px) 0px, 100% 5.6px, calc(100% - 25.2px) 100%, 5.6px 100%, 0px calc(100% - 5.6px))'}}>
                  <span className="SkewButton_text__NbO5q">Learn more</span>
            </div>
            </div>

          </div>
          <img src='services.webp' alt='services' />
        </div>
      </section>
<section>
  <div className='container_racingteam'>
  <div className='imgracing'>
        <img src='racingteam.webp' alt='racing team' />
    </div>
    <div className='text-racingteam'>
        <div className='flextext-racing'>
          <span></span>
          <h4>SCUDERIA CORSA</h4>
        </div>
        <h5>MEET OUR CHAMPIONSHIP RACING TEAM</h5>
        <p>We've been breeding the next generation of race car drivers since 2012</p>
          <DiscoverBtn />
    </div>
  </div>
</section>
<NewsletterCTA />
<section>
  <div className='container_racingteam'>
  <div className='imgracing'>
        <img src='restore.webp' alt='racing team' />
    </div>
    <div className='text-racingteam'>
        <div className='flextext-racing'>
          <span></span>
          <h4>BACCHELLI & VILLA</h4>
        </div>
        <h5>WORLD CLASS RESTORATION</h5>
        <p>Founded in 1972, Bacchelli & Villa is one of the most prestigious and renowned restoration shops in the world, located a few miles from the Ferrari factory.</p>
          <DiscoverBtn />
    </div>
  </div>
</section>
<LatestNews />
<section className='sellbox'>
  <div className='sell-image-container'>
    <div className="overlay-servicescta">
      <div className='item-sells'>
        <div className='flextitle'>
          <span></span>
          <h4>LOOKING TO SELL YOUR VEHICLE?</h4>
        </div>
        <span>LET'S TALK</span>
        <p>Ferrari Beverly Hills offers a convenient and seamless option for those looking to make room in their garage.</p>
        <div className="SkewButton_button__xipxU" style={{
            height: '56px',
            clipPath: 'polygon(25.2px 0px, calc(100% - 5.6px) 0px, 100% 5.6px, calc(100% - 25.2px) 100%, 5.6px 100%, 0px calc(100% - 5.6px))'}}>
            <span className="SkewButton_text__NbO5q learnmore">Learn more</span>
      </div>
      </div>
    </div>
    
    <img src='landing.webp' alt='services' />
  </div>
  <div className='containtestimonial'>
    <div className='testimonial-rel'>
      <div className='contbartesti'><span className='bartesti'></span><h6>TESTIMONIAL</h6></div>
      <p>The process of selling my car was extremely simple, from start to finish. The FBH team facilitated everything with great expertise.</p>
      <div className='infostesti'>
        <img src='user.webp' alt='user icone'/>
        <div className='textinfos-testi'>
          <span className='detailstesti'><b>Scott J, Private Seller</b><br/>September 22, 2022</span>
        </div>
      </div>
    </div>
  </div>
</section>


    </div>
  );
}

export default Home;
