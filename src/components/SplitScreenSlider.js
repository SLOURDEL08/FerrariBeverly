import React from 'react';
import '../App.css';
import DiscoverBtn from './DiscoverBtn';


function SplitScreenSlider() {
  return (
    <section class="split">
  <div class="screen">
    <div class="content">
      <img src="/images/roma-slide.webp"  width="400" height="100"  alt="representation voiture"/>
      <h2 class="title">FERRARI ROMA SPIDER</h2>
      <DiscoverBtn customClassName="discover-sss" />
    </div>
  </div>
  <div class="screen">
    <div class="content">
    <img src="/images/corsa-slide.webp"  width="400" height="100"  alt="representation voiture"/>
      <h2 class="title">FERRARI DRIVING SCHOOL</h2>
      <DiscoverBtn customClassName="discover-sss" />
    </div>
  </div>
</section>
  );
}

export default SplitScreenSlider;
