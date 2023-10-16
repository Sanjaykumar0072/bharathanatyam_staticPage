import React from 'react';
import Header from './header';
import ScrollToTop from './sub-components/scroll-to-top';
import Section1 from './home/section1';
import Section2 from './home/section2';
import Section3 from './home/section3';
import Section4 from './home/section4';
import Footer from './footer';
import Section5 from './home/section5';

export default function Home() {
    return (
        <>
            <ScrollToTop />
            <Header />
            <Section1 />
            <Section2 />
            <Section3 />
            <Section4 />
            <Section5 />
            <Footer />
        </>
    )
}