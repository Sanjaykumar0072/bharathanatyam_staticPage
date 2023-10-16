import React from 'react';

export default function Section2() {
    return (
        <>
            <section className="about" id="about section2">
                <div className="container-1">
                    <div className="abt-img">
                        <img src="/public/images/sec2image.png" />
                    </div>
                    <div className="abt-content">
                        <div className="content">
                            <h1>Dance Studio</h1>
                            <span>Adult Classes</span>
                        </div>    
                        <p>You may be a skillful, effective employer 
                            but if you don’t trust your personnel and 
                            the opposite, then the chances of improving 
                            and expanding the business you deal with, 
                            are extremely limited.</p>
                        <p>It’s not critical for the employees to like the
                            boss, but they have to trust him or her. If not,
                            he won’t be able to lead them and the workers
                            will have little motivation at work. Truth and 
                            trust are connected together. You could be
                            honest for years but one lie can destroy the 
                            trust you have built all this time and there is 
                            no doubt that regaining that trust is very difficult.</p>

                        <a href="/about" className="explore">Explore More</a>
                    </div>
                </div>
            </section>
        </>
    )
}