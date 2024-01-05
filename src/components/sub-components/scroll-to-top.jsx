import React,  { useRef, useEffect } from 'react';

const ScrollToTop = () => {
  const scrollTopRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 500) {
        scrollTopRef.current.style.display = 'inline-block';
      } else {
        scrollTopRef.current.style.display = 'none';
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth' // Add smooth scroll behavior
    });
  };

   
    return(
      <>
        <span 
          ref={scrollTopRef}
          onClick={scrollToTop}
          className="scroll link-icons"
        ><img src="/svg/up-arrow.svg" alt="" /></span>
      </>
    )    
}

export default ScrollToTop;
  