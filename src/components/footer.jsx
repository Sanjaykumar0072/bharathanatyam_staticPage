import React from "react";

export default function Footer() {
    return (
        <>
            <footer>
                <div className="container-6">
                    <div className="logo">
                        <img src="/public/images/logo1.png" alt="" />
                        <h2>Dharshini VS</h2>
                        <p>"Discover the art of Bharatanatyam, where tradition meets innovation in a symphony of rhythm and emotion."</p>
                    </div>
                    <div className="inner-cont">
                        <img src="/svg/map.svg" alt="" />
                        <a target="_blank" href="https://www.google.com/maps/search/Plot+no+167,S2+Reda+Enclave,+vallalar+street+panner+Nagar,+mogappair+Chennai-600037/@13.0809151,80.1781027,18z">Plot no 167,S2 Reda Enclave, vallalar street panner Nagar, mogappair Chennai-600037.</a>
                    </div>
                    <div>
                        <div className="inner-cont">
                            <img src="/svg/gmail.svg" alt="" />
                            <a href="mailto: darshiini.dance@gmail.com">darshiini.dance@gmail.com</a>
                        </div>
                        <div className="inner-cont">
                            <img src="/svg/phone.svg" alt="" />
                            <div>
                                <a href="tel: +919087543216">+91 - 9087543216</a>
                                <br />
                                <a href="tel: +33745633549">+33 - 745633549</a>
                            </div>
                        </div>
                    </div>
                    <div className="footer-img">
                        <a target="_blank" href="https://www.facebook.com/darshiini.vs"><img src="/svg/fb.svg" alt="" /></a>
                        <a target="_blank" href="https://instagram.com/darshiinivs"><img src="/svg/instagram.svg" alt="" /></a>
                        <a target="_blank" href="https://www.youtube.com/channel/UChz5FJCG6PVLvSMB4yxEvxg"><img src="/svg/youtube.svg" alt="" /></a>
                        <a target="_blank" href="https://www.linkedin.com/in/darshiini-v-s-99662919b"><img src="/svg/linkedin.svg" alt="" /></a>
                        <a target="_blank" href="https://api.whatsapp.com/send?phone=9087543216"><img src="/svg/whatsapp.svg" alt="" /></a>
                    </div>
                </div>
                <div className="copyright">
                <p>Copyright © | Designed and Developed by</p><a href="https://sanjaykumar0072.netlify.app">Sanjay Kumar</a>
                </div>
            </footer> 
        </>
    )
}