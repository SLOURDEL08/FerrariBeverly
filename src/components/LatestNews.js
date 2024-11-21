import React from 'react';
import Carousel from './Carousel'; // Assurez-vous d'importer correctement le composant Carousel
import DiscoverBtn from './DiscoverBtn';


const LatestNews = () => {
  return (
    <section className='contain-latestnews'>
      <div className='title_latestnews'><h2>THE LATEST NEWS</h2><DiscoverBtn /></div>
    
    <div className="container-carousel-news">
    <Carousel customPrevClassName="prev-news" customNextClassName="next-news">
        {/* Insérez ici les éléments du carrousel */}
        <div className="slide-news">
          <div className="latestnews-content">
            <div><h1>RESTORATION</h1><p>2MIN</p></div>
            <div>
            <h2>August 24, 2023</h2>
            <span>BACCHELLI & VILLA’S SONOMA CAMEO</span></div>
          </div>
          <img src="/images/zyro-image-hero.webp"  width="300" height="300"   className='img-slide' alt="jejed"/>
        </div>
        <div className="slide-news">
          <div className="latestnews-content">
            <div><h1>RESTORATION</h1><p>2MIN</p></div>
            <div>
            <h2>August 24, 2023</h2>
            <span>BACCHELLI & VILLA'S SONOMA CAMEO</span></div>
          </div>
          <img src="/images/zyro2-hero.webp"  width="300" height="300"   className='img-slide' alt="jejed"/>
        </div>
        <div className="slide-news">
          <div className="latestnews-content">
            <div><h1>RESTORATION</h1><p>2MIN</p></div>
            <div>
            <h2>August 24, 2023</h2>
            <span>BACCHELLI & VILLA'S SONOMA CAMEO</span></div>
          </div>
          <img src="/images/zyro3-hero.webp" width="300" height="300"  className='img-slide' alt="jejed"/>
        </div>
        <div className="slide-news">
          <div className="latestnews-content">
            <div><h1>RESTORATION</h1><p>2MIN</p></div>
            <div>
            <h2>August 24, 2023</h2>
            <span>BACCHELLI & VILLA'S SONOMA CAMEO</span></div>
          </div>
          <img src="/images/zyro4-hero.webp"  width="300" height="300"   className='img-slide' alt="jejed"/>
        </div>
       
      </Carousel>
    </div>
  </section>
);
};

export default LatestNews;
