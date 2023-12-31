import React from 'react';
import '../App.css';
import DiscoverBtn from './DiscoverBtn';


function SplitScreenSlider() {
  return (
    <section class="split">
  <div class="screen">
    <div class="content">
      <img src="roma.webp" alt="representation voiture"/>
      <h2 class="title">FERRARI ROMA SPIDER</h2>
      <DiscoverBtn customClassName="discover-sss" />
    </div>
  </div>
  <div class="screen">
    <div class="content">
    <img src="corsa.webp" alt="representation voiture"/>
      <h2 class="title">FERRARI DRIVING SCHOOL</h2>
      <DiscoverBtn customClassName="discover-sss" />
    </div>
  </div>
</section>
  );
}

export default SplitScreenSlider;
