import React from 'react';
import Header from '../header';
import ScrollToTop from '../sub-components/scroll-to-top';
import Footer from '../footer';


export default function Awards() {
    return (
        <>
            <Header />
            <ScrollToTop />
            <div className="aboutPage galleryPages">
                <span>Awards</span>
                <h1>Dharshiini, a Virtuoso in the Realm of Bharatanatyam</h1>
                <div class="gallery-flex">
                    <img src="/public/images/award.jpg" alt="" width="300" />
                    <div>
                        <h2>Prestigious Awards</h2>
                        <ul>
                            <li>Nataya Kazhai Thilagam</li>
                            <li>Natya Kazha Ratna</li>
                            <li>Member of UNIESCO-CID ( International Dance Council )</li>
                            <li>Natya Mani</li>
                            <li>Thamirabarani Natya</li>
                            <li>Sai Natya Thilagam</li>
                        </ul>
                    </div>
                </div>
                <h2>A Gallery of Prestigious Awards</h2>
                <div className="gallery-images">
                    <img src="/public/images/awards/01.jpg" alt="" />
                    <img src="/public/images/awards/02.jpg" alt="" />
                    <img src="/public/images/awards/03.jpg" alt="" />
                    <img src="/public/images/awards/04.jpg" alt="" />
                    <img src="/public/images/awards/05.jpg" alt="" />
                    <img src="/public/images/awards/06.jpg" alt="" />
                    <img src="/public/images/awards/07.jpg" alt="" />
                    <img src="/public/images/awards/08.jpg" alt="" />
                    <img src="/public/images/awards/09.jpg" alt="" />
                    <img src="/public/images/awards/10.jpg" alt="" />
                    <img src="/public/images/awards/01.jpg" alt="" />
                    <img src="/public/images/awards/11.jpg" alt="" />
                    <img src="/public/images/awards/12.jpg" alt="" />
                </div>
            </div>
            <Footer />
        </>
    );
}