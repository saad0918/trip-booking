import React from 'react';
import '../App.css';

const About = () => {
    return (
        <section className="about">
            <div className="container">
                <h2 className="lg-heading text-black about-heading">About Us</h2>
                <p className="saif1">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil, dicta...
                </p>

                <div className="about-wrapper">
                    <div className="left">
                        <ul>
                            <li>Lorem ipsum dolor sit.</li>
                            <li>Lorem ipsum dolor sit.</li>
                            <li>Lorem ipsum dolor sit.</li>
                        </ul>
                    </div>
                    <div className="right">
                        <ul>
                            <li>Lorem ipsum dolor sit.</li>
                            <li>Lorem ipsum dolor sit.</li>
                            <li>Lorem ipsum dolor sit.</li>
                        </ul>
                    </div>

                    <div className="counts">
                        <div className="count-item"><span>3000+</span><p>Travelled</p></div>
                        <div className="count-item"><span>200+</span><p>Places</p></div>
                        <div className="count-item"><span>100+</span><p>Guide</p></div>
                        <div className="count-item"><span>50+</span><p>Hotels</p></div>
                    </div>

                    <div className="cta-banner">
                        <div className="cta-banner-left">
                            <p className="cta-line">What are you waiting for? Reach us right now.</p>
                        </div>
                        <div className="cta-banner-right">
                            <a href="/contact" className="btn-cta">Contact Us</a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
