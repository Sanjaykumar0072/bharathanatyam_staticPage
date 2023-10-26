import React from 'react';
import Header from './header';
import Footer from './footer';
import ScrollToTop from './sub-components/scroll-to-top';

export default function Gallery() {
    return (
        <>
            <Header />   
            <ScrollToTop />
            <Footer />    
        </>
    );
}