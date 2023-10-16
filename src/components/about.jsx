import React from 'react';
import Header from './header';
import Footer from './footer';

export default function About() {
    return (
        <>
            <Header />
            <div className="aboutPage">
                <span>ABOUT Us</span>
                <h1>Let’s Work Together!</h1>
                <p>You may be a skillful, effective employer but if you don’t trust your personnel and the opposite.</p>
                <div className="container-5">
                    <div className="about-content contact-form">
                        <aside className='aboutImage'></aside>
                        <div>
                            <p>
                            You may be a skillful, effective employer but if you don’t trust your personnel and the opposite, then the chances of improving and expanding the business you deal with, are extremely limited.
                            <br />
                            <br />
                            <br />
                            <br />
                            It’s not critical for the employees to like the boss, but they have to trust him or her. If not, he won’t be able to lead them and the workers will have little motivation at work. Truth and trust are connected together. You could be honest for years but one lie can destroy the trust you have built all this time and there is no doubt that regaining that trust is very difficult.
                            <br />
                            <br />
                            <br />
                            <br />
                            You may be a skillful, effective employer but if you don’t trust your personnel and the opposite, then the chances of improving and expanding the business you deal with, are extremely limited.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
}