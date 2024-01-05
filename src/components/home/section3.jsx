import React from 'react';
import { Tabs, Tab } from '../sub-components/react-tab';
import { AnimationOnScroll } from 'react-animation-on-scroll';

export default function Section3() {
    return (
        <>
            <section className="classes" id="classes">
                <div className="container-2">
                    <div className="align">
                        <AnimationOnScroll animateOnce={true} animateIn="animate__fadeIn">
                            <h1>Photo Gallery</h1>
                            <h3>Dancing Stories in Photographs</h3>
                        </AnimationOnScroll>
                    </div>
                    <div className="img-content">
                        <AnimationOnScroll animateOnce={true} animateIn="animate__fadeIn">
                            <Tabs>
                                <Tab label="Awards">
                                    <div>
                                        <a href="/gallery-awards">Explore More</a>
                                        <img src="/images/awards/13.jpg" />
                                    </div>
                                </Tab>
                                <Tab label="Events">
                                    <div>
                                        <a href="/gallery-events">Explore More</a>
                                        <img src="/images/events/ev-15.jpg" />
                                    </div>
                                </Tab>
                                <Tab label="Photoshoot">
                                    <div>
                                        <a href="/gallery-photoshoot">Explore More</a>
                                        <img src="/images/photoshoot/PS-16.jpg" />
                                    </div>
                                </Tab>
                            </Tabs>
                        </AnimationOnScroll>
                    </div>
                </div>
            </section>
        </>
    )
}