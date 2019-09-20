import React, { Component } from 'react';

import welcomeBanner1 from '../../assets/welcome-banner-01.png';
import welcomeBanner2 from '../../assets/welcome-banner-02.png';
import welcomeBanner3 from '../../assets/welcome-banner-03.png';
import slideshow from '../../styles/_slideshow.scss';

class Slideshow extends Component {



    plusSlides = (slideIndex) => {
    }


    render() {
        let slideShow =
            <div>
                <div class="mySlides fade">
                    <img src={welcomeBanner1} />
                    <div class="text">Caption Text</div>
                </div>

                <div class="mySlides fade">
                    <img src={welcomeBanner2} />
                    <div class="text">Caption Two</div>
                </div>

                <div class="mySlides fade">
                    <img src={welcomeBanner3} />
                    <div class="text">Caption Three</div>
                </div>

                <a class="prev" onClick={this.plusSlides(-1)}>&#10094;</a>
                <a class="next" onClick={this.plusSlides(1)}>&#10095;</a>
            </div>
        return (
            <div class="slideshow-container">
                {slideShow}
            </div>


        );
    }
}

export default Slideshow;