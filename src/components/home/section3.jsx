import React from 'react';
import { Tabs, Tab } from '../sub-components/react-tab';
import Particle from '../sub-components/particle';

export default function Section3() {
    return (
        <>
            {/* <Particle /> */}
            <section className="classes" id="classes">
                <div className="container-2">
                    <div className="align">
                        <h1>Dance Class</h1>
                        <h3>That will Make You Advance</h3>
                    </div>
                    <div className="img-content">
                        <Tabs>
                            <Tab label="Class">
                                <div>
                                    <a href="/gallery/#class">Explore More</a>
                                    <img src="/images/slider_b_4.png" />
                                </div>
                            </Tab>
                            <Tab label="Event">
                                <div>
                                    <a href="/gallery/#event">Explore More</a>
                                    <img src="/images/slider_b_6.png" />
                                </div>
                            </Tab>
                            <Tab label="Photoshoot">
                                <div>
                                    <a href="/gallery/#photoshoot">Explore More</a>
                                    <img src="/images/slider_b_9.png" />
                                </div>
                            </Tab>
                        </Tabs>
                    </div>
                </div>
            </section>
        </>
    )
}