import React from 'react';

export default function Section2() {
    return (
        <>
            <section className="about" id="about section2">
                <div className="container-1">
                    <div className="abt-img">
                        <img src="/public/images/sec2image.png" />
                    </div>
                    <div className="abt-content">
                        <div className="content">
                            <h1>Dance Studio</h1>
                            {/* <span>Adult Classes</span> */}
                        </div>
                        <p>Darshiini, the young and promising Bharatanatyam dancer from Chennai, stands as a testament to the fusion of talent, tradition, and innovation in the world of classical Indian dance. With her exceptional command over the intricate techniques of Bharatanatyam and her mature abhinaya, she brings to life stories and emotions that captivate audiences, leaving a lasting impression. Her journey as a performing artist has been marked by participation in prestigious dance festivals organized by renowned sabhas, not only in Chennai but also beyond its borders.
                        <br />
                        <br />
                        As a performing artist, Darshiini embraces a range of responsibilities, which not only refine her own skills but also contribute to the preservation and propagation of this ancient art form. She meticulously prepares for her performances, diligently rehearsing under the tutelage of her guru, Summa Mani. Her commitment extends beyond solo performances, as she actively participates in group acts, ensuring that she consistently elevates her technical standards.</p>

                        <a href="/about" className="explore">Explore More</a>
                    </div>
                </div>
            </section>
        </>
    )
}