import React from 'react';

export default function Section1() {
    return (
        <>
            <section className="home space-between" id="section1">
                <div className="container">
                    <div className="content">
                        <h1>Adult Open Division Classes</h1>
                        {/* <span>With Your friend name</span> */}
                    </div>
                </div>
                {/* <ul className="slideshow">
                    <li><span></span></li>
                    <li><span></span></li>
                    <li><span></span></li>
                    <li><span></span></li>
                    <li><span></span></li>
                    <li><span></span></li>
                </ul> */}
                <img src="/public/images/sec1image.png" alt="" />
            </section>
        </>
    )
}