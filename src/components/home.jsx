import React, { useEffect, useState } from 'react';
import Header from './header';
import ScrollToTop from './sub-components/scroll-to-top';
import Section1 from './home/section1';
import Section2 from './home/section2';
import Section3 from './home/section3';
import Section4 from './home/section4';
import InfinitySlider from './sub-components/infinity-slider';
import Footer from './footer';
import Section5 from './home/section5';

export default function Home() {

    const [loading, setLoading] = useState(true);
    const [windowloaded, setWindowLoaded] = useState(false);

    useEffect(() => {
        // Simulating a delay to showcase the loader
        const timer = setTimeout(() => {
            setLoading(false);
        }, 1000); // Adjust the delay time according to your preference

        window.addEventListener('load', handleWindowLoad);

        return () => {
            clearTimeout(timer);
            window.removeEventListener('load', handleWindowLoad);
        };
    }, []);


    const handleWindowLoad = () => {
        setWindowLoaded(true);
    };

    if (loading) {
        return (
            <div className="home loader">
                <div></div>
            </div>
        )
    }

    return (
        <>
            <ScrollToTop />
            <Header />
            <Section1 />
            <Section2 />
            <Section3 />
            <Section4 />
            <InfinitySlider />
            <Section5 />
            <Footer />
        </>
    )
}