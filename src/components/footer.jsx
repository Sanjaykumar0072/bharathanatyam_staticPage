import React from "react";

export default function Footer() {
    return (
        <>
            <footer>
                <div className="container-6">
                    <div className="logo">
                        <h2>DharshiniVSDance</h2>
                        <p>"Discover the art of Bharatanatyam, where tradition meets innovation in a symphony of rhythm and emotion."</p>
                    </div>
                    <div className="inner-cont">
                        <img src="/svg/map.svg" alt="" />
                        <p>NO.46, Anna Nagar, Anna Nagar West, Chennai - 600040.</p>
                    </div>
                    <div>
                        <div className="inner-cont">
                            <img src="/svg/mail.svg" alt="" />
                            <a href="mailto: darshiini.dance@gmail.com">darshiini.dance@gmail.com</a>
                        </div>
                        <div className="inner-cont">
                            <img src="/svg/phone.svg" alt="" />
                            <a href="tel: +919087543216">+91 9087543216</a>
                        </div>
                    </div>
                    <div className="footer-img">
                        <a href="#"><img src="/svg/fb.svg" alt="" /></a>
                        <a href="#"><img src="/svg/insta.svg" alt="" /></a>
                        <a href="#"><img src="/svg/twitter.svg" alt="" /></a>
                        <a href="#"><img src="/svg/youtube.svg" alt="" /></a>
                    </div>
                </div>
                <div className="copyright">
                <p>Copyright © | Designed and Developed by</p><a href="https://sanjaykumar0072.netlify.app">Sanjay Kumar</a>
                </div>
            </footer> 
        </>
    )
}