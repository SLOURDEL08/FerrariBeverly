import React from 'react';
import Carousel from './Carousel'; // Assurez-vous d'importer correctement le composant Carousel

const Featured = () => {
  return (
    <section className='contain_featured'>
    <h2>FEATURED INVENTORY</h2>
    <div className="container-carousel">
      <Carousel>
        {/* Insérez ici les éléments du carrousel */}
        <div className="slide">
        <div class="wrapInfoPost">
        <h3 class="titrePost">2022 FERRARI SF90 SPIDER</h3>
        <span class="auteur">$ 991,000</span>
      </div>
        <img src="/images/spider-feature.webp"  width="300" height="300"   className='img-slide-feat' alt="jejed"/>
        </div>
        <div className="slide">
        <div class="wrapInfoPost">
        <h3 class="titrePost">202 FERRARI SF90 SPIDER</h3>
        <span class="auteur">$ 991,000</span>
      </div>
        <img src="/images/gt-feature.webp"  width="300" height="300"   className='img-slide-feat' alt="jejed"/>
        </div>
        <div className="slide">
        <div class="wrapInfoPost">
        <h3 class="titrePost">2022 FERRARI SF90 SPIDER</h3>
        <span class="auteur">$ 991,000</span>
      </div>
        <img src="/images/superfast-feature.webp"  width="300" height="300"   className='img-slide-feat' alt="jejed"/>
        </div>
        <div className="slide">
        <div class="wrapInfoPost">
        <h3 class="titrePost">2022 FERRARI SF90 SPIDER</h3>
        <span class="auteur">$ 991,000</span>
      </div>
        <img src="/images/spider-feature.webp"  width="300" height="300"   className='img-slide-feat' alt="jejed"/>
        </div>
      </Carousel>
    </div>
  </section>
);
};

export default Featured;
