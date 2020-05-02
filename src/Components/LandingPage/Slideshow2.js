import React, { Component } from 'react'

import { Zoom } from 'react-slideshow-image';
import "./slideshow.css";
import BackgroundSlideshow from 'react-background-slideshow'


import image1 from './images/001.jpg'
import image2 from './images/002.jpg'
import image3 from './images/003.jpg'

export default class Slideshow extends Component {
    render () {
      return (
        <div>
          <BackgroundSlideshow images={[ image1, image2, image3 ]} />
        </div>
      )
    }
  }









