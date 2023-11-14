import React from 'react';
import Header from '../header';
import ScrollToTop from '../sub-components/scroll-to-top';
import Footer from '../footer';


export default function Events() {
    return (
        <>
            <Header />
            <ScrollToTop />
            <div className="aboutPage galleryPages">
                <span>Events</span>
                <h1>Dharshiini, a Virtuoso in the Realm of Bharatanatyam</h1>
                <div class="gallery-flex event-flex">
                    <img src="/public/images/event.jpg" alt="" width="300" />
                    <div>
                        <h2>Importance Performance</h2>
                        <ul>
                            <li>Sabha festivals ( parthasarathysabha, mylapore fine arts, gana mukundhapriya etc. )</li>
                            <li>TV shows ( vijay tv, mega tv etc )</li>
                            <li>Temple shows( inside and outside of Tamil nadu )</li>
                            <li>Dubai tamil sangam show</li>
                            <li>Instinct Singapore ( Bharataarpana production )</li>
                            <li>Freelancing </li>
                            <li>Natyanjali ( Chidambaram, pandanaloor, tiruvudaimarudur )</li>
                            <li>Chennaiyil thiruvaiyaru</li>
                        </ul>
                    </div>
                </div>
                <h2>A Gallery of Unforgettable Performances</h2>
                <div className="gallery-images">
                <img src="/public/images/events/ev-1.jpg" alt="" />
                    <img src="/public/images/events/ev-2.jpg" alt="" />
                    <img src="/public/images/events/ev-3.jpg" alt="" />
                    <img src="/public/images/events/ev-4.jpg" alt="" />
                    <img src="/public/images/events/ev-5.jpg" alt="" />
                    <img src="/public/images/events/ev-6.jpg" alt="" />
                    <img src="/public/images/events/ev-7.jpg" alt="" />
                    <img src="/public/images/events/ev-8.jpg" alt="" />
                    <img src="/public/images/events/ev-9.jpg" alt="" />
                    <img src="/public/images/events/ev-10.jpg" alt="" />
                    <img src="/public/images/events/ev-11.jpg" alt="" />
                    <img src="/public/images/events/ev-12.jpg" alt="" />
                </div>
            </div>
            <Footer />
        </>
    );
}