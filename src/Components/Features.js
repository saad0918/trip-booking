import React from 'react';
import '../App.css';

const Features = () => {
    return (
        <section className="features">
            <div className="container">
                <div className="box-wrapper">
                    <div className="box box-1">
                        <i className="fas fa-route"></i>
                        <h2 className="md-heading">Adventurous</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit...</p>
                    </div>
                    <div className="box box-2">
                        <i className="fas fa-strikethrough"></i>
                        <h2 className="md-heading">Less Price</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit...</p>
                    </div>
                    <div className="box box-3">
                        <i className="fas fa-user-check"></i>
                        <h2 className="md-heading">Experience</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit...</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Features;
