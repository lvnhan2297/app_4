import React from 'react'
import BgBanner from '../assets/images/Banner-1.jpg'

const Banner = () => {
  return (
    <div id="hero" className="Hero" style={{backgroundImage: `url(${BgBanner})`}}>
      <div className="content">
        <img className="logo" src="http://www.returndates.com/backgrounds/narcos.logo.png" alt="narcos background" />
        <h2>Season 2 now available</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloremque id quam sapiente unde voluptatum alias vero debitis, magnam quis quod.</p>
        <div className="button-wrapper">
          <a href="#" className="Button" data-primary="true">Watch now</a>
          <a href="#" className="Button" data-primary="false">+ My list</a></div>
      </div>
      <div className="overlay" />
    </div>

  )
}

export default Banner
