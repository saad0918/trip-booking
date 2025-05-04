// src/Showcase.js
import React from 'react';

const Showcase = () => {
    return (
        <section className="showcase" id="explore-places">
            <div className="container">
                <div className="row row1">
                    <div className="img-box">
                        <img src="/client/utils/ooty.avif" alt="Ooty" />
                    </div>
                    <div className="text-box">
                        <h2 className="heading text-black">OoTy</h2>
                        <p className="text-gray">Ooty, often referred to as the "Queen of Hill Stations" is located in the Nilgiri Hills of Tamil Nadu...</p>
                        <a href="./src/about.html" className="btn btn-secondary text-red">MORE</a>
                    </div>
                </div>
                <div className="row row2">
                    <div className="img-box">
                        <img src="/client/utils/desert.jpg" alt="Desert, Egypt" />
                    </div>
                    <div className="text-box">
                        <h2 className="lg-heading text-black">DESERT, EGYPT</h2>
                        <p className="text-gray">The deserts of Egypt are like golden seas of sand, where the sun kisses the dunes goodnight...</p>
                        <a href="./src/about.html" className="btn btn-secondary text-red">MORE</a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Showcase;
