import React from 'react';
import Header from './header';
import Footer from './footer';
import ScrollToTop from './sub-components/scroll-to-top';

export default function About() {
    return (
        <>
            <Header />
            <ScrollToTop />
            <div className="aboutPage">
                <span>ABOUT ME</span>
                <h1>Discover My Journey</h1>
                <div className="container-5">
                    <div className="about-content contact-form">
                        <aside className='aboutImage'></aside>
                        <div>
                            <p>
                                Darshiini, the young and promising Bharatanatyam dancer from Chennai, stands as a testament to the fusion of talent, tradition, and innovation in the world of classical Indian dance. With her exceptional command over the intricate techniques of Bharatanatyam and her mature abhinaya, she brings to life stories and emotions that captivate audiences, leaving a lasting impression. Her journey as a performing artist has been marked by participation in prestigious dance festivals organized by renowned sabhas, not only in Chennai but also beyond its borders.
                                <br />
                                <br />
                                The pivotal moment in her journey was her arangetram in 2014, marking a significant milestone in her career. Since that turning point, Darshiini has consistently graced the stage, evolving into a natural performer with an unmistakable creative touch. This fusion is the hallmark of her artistic expression, making her a unique and compelling presence in the world of classical dance.
                                <br />
                                <br />
                                Under the mentorship of guru Suma Mani, Darshiini delves deep into the intricacies of choreography and dance steps. This not only enhances her own performances but also broadens her understanding of the art form, contributing to her growth as an artist. She takes the responsibility of maintaining a database of her organization and dance performance videos, showcasing her commitment to preserving the legacy of her work for the benefit of future generations.
                            </p>
                        </div>
                    </div>

                    <div className="about-content contact-form">
                        <div>
                            <p>
                                Darshiini's footprint in the dance world extends to prestigious platforms like renowned dance festivals organized by leading sabhas, both within Chennai and on a national and international scale. These opportunities have allowed her to showcase her exceptional talent and unwavering passion, solidifying her position as a promising and respected figure in the domain of Bharatanatyam.
                                <br />
                                <br />
                                As a performing artist, Darshiini embraces a range of responsibilities, which not only refine her own skills but also contribute to the preservation and propagation of this ancient art form. She meticulously prepares for her performances, diligently rehearsing under the tutelage of her guru, Suma Mani. Her commitment extends beyond solo performances, as she actively participates in group acts, ensuring that she consistently elevates her technical standards.
                                <br />
                                <br />
                                In summary, Darshiini's journey as a Bharatanatyam dancer represents the harmonious coexistence of time-honored traditions and contemporary innovation. Her commitment to preserving the essence of the art while pushing its boundaries has positioned her as a promising talent with the potential to inspire and shape the future of classical Indian dance. Her performances serve as a testament to the timeless beauty and relevance of Bharatanatyam in the modern world.
                            </p>
                        </div>
                        <aside className='aboutImage aboutImage1'></aside>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
}