import React, { Component } from 'react'
import { Zoom } from 'react-slideshow-image';
import "./slideshow.css";


import image0 from './images/000.jpg'
import image1 from './images/001.jpg'
import image2 from './images/002.jpg'
import image3 from './images/003.jpg'

const images = [
    image0,
    image1,
    image2,
    image3,
];

const zoomOutProperties = {
    duration: 5000,
    transitionDuration: 500,
    infinite: true,
    indicators: false,
    scale: 0.4,
    arrows: true
  }

export default class Slideshow extends Component {
    render () {
      return (
        <div className="slide-container">
          <Zoom {...zoomOutProperties}>
            {
              images.map((each, index) => <img key={index} style={{width: "100%"}} src={each} alt={index} />)
            }
          </Zoom>
        </div>
      )
    }
}

