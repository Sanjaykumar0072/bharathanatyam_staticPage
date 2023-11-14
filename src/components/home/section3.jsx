import React from 'react';
import { Tabs, Tab } from '../sub-components/react-tab';

export default function Section3() {
    return (
        <>
            <section className="classes" id="classes">
                <div className="container-2">
                    <div className="align">
                        <h1>Dance Class</h1>
                        <h3>That will Make You Advance</h3>
                    </div>
                    <div className="img-content">
                        <Tabs>
                            <Tab label="Awards">
                                <div>
                                    <a href="/gallery-awards">Explore More</a>
                                    <img src="/public/images/awards/11.jpg" />
                                </div>
                            </Tab>
                            <Tab label="Events">
                                <div>
                                    <a href="/gallery-events">Explore More</a>
                                    <img src="/public/images/events/ev-10.jpg" />
                                </div>
                            </Tab>
                            <Tab label="Photoshoot">
                                <div>
                                    <a href="/gallery-photoshoot">Explore More</a>
                                    <img src="/public/images/photoshoot/ps-16.jpg" />
                                </div>
                            </Tab>
                        </Tabs>
                    </div>
                </div>
            </section>
        </>
    )
}