import React, { Component, useEffect, useRef } from 'react';
import Slider from "react-slick";

class InfinitySlider extends Component {

    render() {
        const settings = {
            slidesToShow: 6,
            slidesToScroll: 1,
            autoplay: true,
            autoplaySpeed: 0,
            speed: 8000,
            pauseOnHover: true,
            cssEase: 'linear',
            responsive: [
                {
                  breakpoint: 1440,
                  settings: {
                    slidesToShow: 5,
                    slidesToScroll: 5,
                    speed: 8000,
                  }
                },
                {
                  breakpoint: 1024,
                  settings: {
                    slidesToShow: 4,
                    slidesToScroll: 4,
                    speed: 25000,
                  }
                },
                {
                  breakpoint: 800,
                  settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    speed: 22000,
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    speed: 18000,
                  }
                }
              ]
        };

        const imageList = [];
        const totalImages = 17; // Total number of images

        for (let i = 1; i <= totalImages; i++) {
            imageList.push(
                <img
                    key={i}
                    src={`/images/slider/Rectangle${i}.png`}
                    alt={`Image ${i}`}
                />
            );
        }

        return (
            <>
                <div className="slider" >
                    <Slider className="slide-track" {...settings}>
                        {imageList}
                        {imageList}
                    </Slider>
                </div>
            </>
        );
    };
};

export default InfinitySlider;
