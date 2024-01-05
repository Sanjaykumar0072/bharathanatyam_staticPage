import React from 'react';
import { AnimationOnScroll } from 'react-animation-on-scroll';

export default function Section2() {
    return (
        <>
            <section className="about" id="about section2">
                <div className="container-1">
                    <div className="abt-img">
                        <AnimationOnScroll animateOnce={true} animateIn="animate__fadeIn">
                            <img src="/images/sec2image.png" />
                        </AnimationOnScroll>
                    </div>
                    <div className="abt-content">
                        <AnimationOnScroll animateOnce={true} animateIn="animate__fadeInRightBig">
                            <div className="align">
                                <AnimationOnScroll animateOnce={true} animateIn="animate__fadeIn">
                                    <h1>About Me</h1>
                                    <h3>Connecting through Bharathanatyam</h3>
                                </AnimationOnScroll>
                            </div>
                            <p>Darshiini, the young and promising Bharatanatyam dancer from Chennai, stands as a testament to the fusion of talent, tradition, and innovation in the world of classical Indian dance. With her exceptional command over the intricate techniques of Bharatanatyam and her mature abhinaya, she brings to life stories and emotions that captivate audiences, leaving a lasting impression. Her journey as a performing artist has been marked by participation in prestigious dance festivals organized by renowned sabhas, not only in Chennai but also beyond its borders.
                                <br />
                                <br />
                                As a performing artist, Darshiini embraces a range of responsibilities, which not only refine her own skills but also contribute to the preservation and propagation of this ancient art form. She meticulously prepares for her performances, diligently rehearsing under the tutelage of her guru, Suma Mani. Her commitment extends beyond solo performances, as she actively participates in group acts, ensuring that she consistently elevates her technical standards.</p>
                            <p className='sec_2_3rd_para'>In summary, Darshiini's journey as a Bharatanatyam dancer represents the harmonious coexistence of time-honored traditions and contemporary innovation. Her commitment to preserving the essence of the art while pushing its boundaries has positioned her as a promising talent with the potential to inspire and shape the future of classical Indian dance. Her performances serve as a testament to the timeless beauty and relevance of Bharatanatyam in the modern world.</p>
                            <a href="/about" className="explore">Explore More</a>
                        </AnimationOnScroll>
                    </div>
                </div>
            </section>
        </>
    )
}