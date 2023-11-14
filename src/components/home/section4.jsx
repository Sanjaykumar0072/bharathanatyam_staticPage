import React from 'react';
import InfinitySlider from '../sub-components/infinity-slider';

export default function Section2() {
    return (
        <>
            <section className="gallery" id="section4">
                <div className="container-3 container-2 ">
                    <div className="align video-align">
                        <h1>Video Gallery</h1>
                        <h3>That will Make You Advance</h3>
                    </div>
                    <div className="video-content">
                        <div className="video-box">
                            <iframe
                                src='https://www.youtube.com/embed/InqeQQF-O-A'
                                className="main-video"
                                title='Kanikanum neeram kamala nethrante'
                                allowFullScreen="allowfullscreen"
                            ></iframe>
                        </div>
                        <div className="video-box">
                            <iframe
                                src='https://www.youtube.com/embed/Ox-ZcopkVWo'
                                className="main-video"
                                title='2021 shivaratri'
                                allowFullScreen="allowfullscreen"
                            ></iframe>
                        </div>
                        <div className="video-box">
                            <iframe
                                src='https://www.youtube.com/embed/k9kAhpZVn0A'
                                className="main-video"
                                title='Vathikkalu velaripravu'
                                allowFullScreen="allowfullscreen"
                            ></iframe>
                        </div>
                    </div>
                    <a href="/playlist" className="explore">Explore More</a>
                </div>
                <InfinitySlider />
                            </section>
        </>
    )
}