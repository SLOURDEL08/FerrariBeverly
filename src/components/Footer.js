import React, { useState } from 'react';

function Footer() {
  const [activeTab, setActiveTab] = useState(null);

  const footerData = [
    {
      title: 'Buy',
      links: ['New Line Up', 'Pre-owned', 'Where to find us?', 'Finance']
    },
    {
      title: 'Sell',
      links: ['Consign Your Vehicle', 'Sell Your Vehicle']
    },
    {
      title: 'Services',
      links: ['Service Centers', 'Parts', 'Warranties & Service Plans']
    },
    {
      title: 'News & Events',
      links: ['All News', 'Event Calendar']
    },
    {
      title: 'Restoration',
      links: ['Bacchelli & Villa Restoration', 'Services', 'Awards', 'News', 'Contact', 'Ferrari Registry']
    },
    {
      title: 'Racing',
      links: ['Scuderia Corsa Racing', 'Driving Series', 'Event Calendar', 'Our Drivers', 'Our Partners']
    }
  ];

  const toggleTab = (index) => {
    setActiveTab(activeTab === index ? null : index);
  };

  return (
    <div className='footer'>
      <div className='cfooter'>
        <div className='leftfooter'>
          <div className='containbar'>
            <span className='bartesti'></span>
            <p>NEWSLETTER</p>
          </div>
          <h3>JOIN LIFE IN THE FAST LANE</h3>
          <p>You'll be the first to learn about the latest News, Events, Inventory, New Models....and more.</p>
        </div>
        <div className='rightfooter'>
          <h6 className='titlenews-footer'>YOUR INFORMATION</h6>
          <form>
            <input placeholder='Email address *' />
            <input placeholder='First name *' />
            <input placeholder='Last name *' />
          </form>
          <div className='submitform-contain'>
            <div className='ccheck'>
              <input id='checkk' type="checkbox" name="horns" />
              <label>I've read and agreed with the terms and conditions</label>
            </div>
            <div className="SkewButton_footer" style={{
              height: '45px',
              clipPath: 'polygon(25.2px 0px, calc(100% - 5.6px) 0px, 100% 5.6px, calc(100% - 25.2px) 100%, 5.6px 100%, 0px calc(100% - 5.6px))'
            }}>
              <span className="SkewButton_text__NbO5q learnmore">SUBSCRIBE</span>
            </div>
          </div>
        </div>
      </div>

      <img src='/images/ferrari-white-slide.webp' width="400" height="30" alt='logo ferrari footer' className='footerlogo' />

      {/* Navigation mobile */}
      <section className='footer-mobile-nav'>
        <div className='foot-linkstitle'>
          {footerData.map((section, index) => (
            <div key={index} className='footer-tab'>
              <span 
                className={`tab-title ${activeTab === index ? 'active' : ''}`}
                onClick={() => toggleTab(index)}
              >
                {section.title}
              </span>
              <div className={`foot-links ${activeTab === index ? 'active' : ''}`}>
                {section.links.map((link, linkIndex) => (
                  <p key={linkIndex}>{link}</p>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Navigation desktop */}
      <section className='footer-desktop-nav'>
        <div className='foot-linkstitle'>
          {footerData.map((section, index) => (
            <span key={index}>{section.title}</span>
          ))}
        </div>
        <div className='contain-footlinks'>
          {footerData.map((section, index) => (
            <div key={index} className='foot-links'>
              {section.links.map((link, linkIndex) => (
                <p key={linkIndex}>{link}</p>
              ))}
            </div>
          ))}
        </div>
      </section>

      <section className='findus-sec'>
        <div>
          <span className='findusspan'>FIND US ON</span>
          <div className='flexsvg'>
            <svg width="40" height="41" viewBox="0 0 40 41" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle opacity="0.2" cx="20" cy="20.4578" r="19" stroke="white" strokeWidth="2"></circle>
              <path d="M21.9143 16.4498H23V14.5418C22.4744 14.485 21.9462 14.457 21.4177 14.4578C19.847 14.4578 18.7729 15.4538 18.7729 17.2778V18.8498H17V20.9858H18.7729V26.4578H20.898V20.9858H22.6651L22.9307 18.8498H20.898V17.4878C20.898 16.8578 21.0597 16.4498 21.9143 16.4498Z" fill="white"></path>
            </svg>
            <svg width="40" height="41" viewBox="0 0 40 41" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle opacity="0.2" cx="20" cy="20.4578" r="19" stroke="white" strokeWidth="2"></circle>
              <path d="M26 16.6558C25.549 16.8561 25.0721 16.9885 24.584 17.0489C25.0989 16.734 25.4848 16.2387 25.67 15.6547C25.1861 15.9495 24.6565 16.1573 24.104 16.2689C23.7347 15.8589 23.243 15.5861 22.7059 15.4931C22.1688 15.4 21.6167 15.4921 21.1363 15.7549C20.6558 16.0177 20.2742 16.4363 20.0511 16.945C19.8281 17.4538 19.7764 18.0239 19.904 18.566C18.9257 18.5154 17.9687 18.2546 17.0952 17.8006C16.2217 17.3467 15.4513 16.7097 14.834 15.9311C14.6175 16.3181 14.5037 16.7565 14.504 17.2025C14.5032 17.6167 14.6025 18.0247 14.7931 18.3901C14.9836 18.7555 15.2594 19.067 15.596 19.2969C15.2048 19.286 14.8219 19.1786 14.48 18.9837V19.0144C14.4829 19.5947 14.6816 20.1562 15.0424 20.6039C15.4032 21.0516 15.904 21.358 16.46 21.4712C16.246 21.5379 16.0237 21.573 15.8 21.5756C15.6451 21.5738 15.4907 21.5594 15.338 21.5326C15.4963 22.0318 15.8028 22.4681 16.2146 22.7808C16.6265 23.0934 17.1233 23.2669 17.636 23.277C16.7703 23.9742 15.7015 24.3548 14.6 24.358C14.3994 24.3586 14.199 24.3463 14 24.3211C15.1247 25.0644 16.4353 25.4591 17.774 25.4574C18.6978 25.4672 19.6143 25.2885 20.4699 24.9317C21.3255 24.5749 22.103 24.0471 22.7571 23.3792C23.4112 22.7113 23.9288 21.9167 24.2795 21.0418C24.6303 20.1669 24.8072 19.2292 24.8 18.2835C24.8 18.1791 24.8 18.0685 24.8 17.9579C25.2708 17.5985 25.6769 17.1579 26 16.6558Z" fill="white"></path>
            </svg>
            <svg width="40" height="41" viewBox="0 0 40 41" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle opacity="0.2" cx="20" cy="20.4578" r="19" stroke="white" strokeWidth="2"></circle>
              <path d="M26.9968 18.9821C27.0282 18.0568 26.8292 17.1384 26.4181 16.3122C26.1391 15.9732 25.752 15.7444 25.3242 15.6657C23.5546 15.5025 21.7778 15.4356 20.0012 15.4653C18.2311 15.4343 16.4606 15.499 14.6973 15.6593C14.3486 15.7237 14.026 15.8899 13.7688 16.1376C13.1964 16.6742 13.1328 17.5922 13.0692 18.3679C12.9769 19.7627 12.9769 21.1622 13.0692 22.557C13.0876 22.9936 13.1516 23.4271 13.26 23.8499C13.3367 24.1765 13.4918 24.4785 13.7115 24.7291C13.9705 24.99 14.3007 25.1656 14.6591 25.2334C16.0302 25.4054 17.4117 25.4767 18.7929 25.4467C21.0187 25.479 22.9711 25.4467 25.2797 25.2657C25.6469 25.2021 25.9864 25.0262 26.2527 24.7615C26.4307 24.5804 26.5637 24.3588 26.6406 24.115C26.8681 23.4056 26.9798 22.6631 26.9713 21.917C26.9968 21.555 26.9968 19.37 26.9968 18.9821ZM18.5639 22.3049V18.3033L22.3288 20.3138C21.2731 20.9085 19.8804 21.5809 18.5639 22.3049Z" fill="white"></path>
            </svg>
            <svg width="40" height="41" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg">
              <circle opacity="0.2" cx="20" cy="20" r="19" stroke="white" strokeWidth="2" fill="transparent"></circle>
              <g opacity="0.8" fill="white" xmlns="http://www.w3.org/2000/svg" id="instagram" className='instagrom'><g><path d="M9.808,5.562c-2.423,0-4.393,2.004-4.393,4.468c0,2.465,1.97,4.47,4.393,4.47c2.422,0,4.392-2.005,4.392-4.47 C14.199,7.566,12.229,5.562,9.808,5.562z M9.808,12.621c-1.404,0-2.546-1.163-2.546-2.591s1.142-2.589,2.546-2.589 s2.545,1.162,2.545,2.589S11.212,12.621,9.808,12.621z"></path><ellipse cx="14.244" cy="5.329" rx="1.014" ry="1.031"></ellipse><path d="M18.315,4.987c-0.326-2.55-2.044-4.082-4.817-4.313c-0.663-0.056-1.342-0.091-1.965-0.112 c-0.035-0.001-4.031-0.001-4.067,0C6.843,0.584,6.165,0.619,5.5,0.675c-2.772,0.231-4.49,1.763-4.816,4.313 C0.514,6.312,0.499,8.601,0.5,9.498c-0.001,0.898,0.014,3.186,0.184,4.511c0.327,2.549,2.044,4.28,4.816,4.512 c0.664,0.055,7.334,0.055,7.998,0c2.773-0.231,4.491-1.862,4.817-4.412c0.171-1.325,0.186-3.664,0.185-4.561 C18.501,8.65,18.486,6.312,18.315,4.987z M16.643,10.336c-0.009,1.042-0.037,2.527-0.153,3.44 c-0.215,1.669-1.234,2.477-3.126,2.635c-1.027,0.084-6.7,0.084-7.726,0c-1.892-0.158-2.913-0.966-3.126-2.635 c-0.117-0.913-0.145-2.398-0.153-3.44C2.356,10.138,2.356,9.84,2.358,9.498c-0.002-0.342-0.002-0.64-0.001-0.838 c0.009-1.041,0.037-2.526,0.153-3.441c0.214-1.667,1.234-2.476,3.126-2.634c1.026-0.083,6.699-0.083,7.726,0 c1.892,0.158,2.911,0.967,3.126,2.634c0.116,0.915,0.145,2.4,0.153,3.441c0.001,0.198,0.001,0.496-0.002,0.838 C16.644,9.84,16.644,10.138,16.643,10.336z"></path></g></g>
            </svg>
          </div>
        </div>
        <div>
          <div className='textright-footer'>
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
              <path d="M9.18576 7.58299L6.60278 5L5.93495 5.66782C4.68835 6.91443 4.68835 8.93557 5.93495 10.1822L9.81782 14.065C11.0644 15.3117 13.0856 15.3117 14.3322 14.065L15 13.3972L12.417 10.8142L11.391 11.8403L8.15972 8.60903L9.18576 7.58299Z" fill="white"></path>
            </svg>
            <a target="_self" className="Footer_rightlink" href="tel:(888) 785-8829">(888) 785-8829</a>
          </div>
          <div className='textright-footer'>
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
              <path d="M10.5 5.00012C8.565 5.00012 7 6.56512 7 8.50012C7 11.1251 10.5 15.0001 10.5 15.0001C10.5 15.0001 14 11.1251 14 8.50012C14 6.56512 12.435 5.00012 10.5 5.00012ZM10.5 9.75012C9.81 9.75012 9.25 9.19012 9.25 8.50012C9.25 7.81012 9.81 7.25012 10.5 7.25012C11.19 7.25012 11.75 7.81012 11.75 8.50012C11.75 9.19012 11.19 9.75012 10.5 9.75012Z" fill="white"></path>
            </svg>
            <a target="_self" className="Footer_rightlink" href="tel:(888) 785-8829">9372 WILSHIRE BLVD, <br />BEVERLY HILLS CA 90212</a>
          </div>
        </div>
      </section>
      <section className='third-footer'>
        <span>CONTACT</span><span>MATTIOLI AUTOMATIVE GROUP</span><span>CAREERS</span>
      </section>
      <section className='four-footer'>
        <span>COPYRIGHT © 2023 - FERRARI BEVERLY HILLS - ALL RIGHTS RESERVED</span>
        <div className='underlinelink'>
          <span>PRIVACY POLICY</span>
          <span>TERMS & CONDITIONS</span>
          <span>COOKIE POLICY</span>
        </div>
      </section>
    </div>
  );
}

export default Footer;