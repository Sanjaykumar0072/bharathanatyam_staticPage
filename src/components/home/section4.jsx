import React from 'react';
import { AnimationOnScroll } from 'react-animation-on-scroll';

export default function Section2() {
    return (
        <>
            <section className="gallery" id="section4">
                <div className="container-3 container-2 ">
                    <div className="align video-align">
                        <AnimationOnScroll animateOnce={true} animateIn="animate__fadeIn">
                            <h1>Video Gallery</h1>
                            <h3>Graceful Performances on Screen</h3>
                        </AnimationOnScroll>
                    </div>
                    <div className="video-content">
                        <AnimationOnScroll animateOnce={true} animateIn='animate__fadeIn'>
                            <div className="video-box">
                                <iframe
                                    src='https://www.youtube.com/embed/Ox-ZcopkVWo'
                                    className="main-video"
                                    title='2021 shivaratri'
                                    allowFullScreen="allowfullscreen"
                                ></iframe>
                            </div>
                        </AnimationOnScroll>
                        <AnimationOnScroll animateOnce={true} animateIn='animate__fadeIn'>
                            <div className="video-box">
                                <iframe
                                    src='https://www.youtube.com/embed/N3L10jo0mTg'
                                    className="main-video"
                                    title='Natyanjali'
                                    allowFullScreen="allowfullscreen"
                                ></iframe>
                            </div>
                        </AnimationOnScroll>
                        <AnimationOnScroll animateOnce={true} animateIn='animate__fadeIn'>
                            <div className="video-box">
                                <iframe
                                    src='https://www.youtube.com/embed/-5OgXQGrJsk'
                                    className="main-video"
                                    title='Natiyam'
                                    allowFullScreen="allowfullscreen"
                                ></iframe>
                            </div>
                        </AnimationOnScroll>
                    </div>

                    <a href="/playlist" className="explore">Explore More</a>
                </div>
            </section>
        </>
    )
}