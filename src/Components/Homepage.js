import React from 'react';
import '../App.css';
import backgroundImage from '../assets/background.svg';
import ootyImage from '../assets/ooty.avif';
import desertImage from '../assets/desert.jpg';

const HomePage = () => {
  return (
    <div>
      <header className="header" style={{ backgroundImage: `url(${backgroundImage})` }}>
        <div className="header-content">
          <h1 className="lg-heading text-light">TRAVEL THE WORLD</h1>
          <p className="text-light">
            Travel the world, experience the greatness, it's the best gift by nature
          </p>
          <a href="#explore-places" className="btn btn-primary text-red md-heading">
            Explore Places
          </a>
        </div>
      </header>

      <section className="showcase" id="explore-places">
        <div className="container">
          <div className="row row1">
            <div className="img-box">
              <img src={ootyImage} alt="Ooty" />
            </div>
            <div className="text-box">
              <h2 className="heading text-black">OoTy</h2>
              <p className="text-gray">
                Ooty, often referred to as the "Queen of Hill Stations"...
              </p>
              <a href="/about" className="btn btn-secondary text-red">MORE</a>
            </div>
          </div>

          <div className="row row2">
            <div className="img-box">
              <img src={desertImage} alt="Desert, Egypt" />
            </div>
            <div className="text-box">
              <h2 className="lg-heading text-black">DESERT, EGYPT</h2>
              <p className="text-gray">
                The deserts of Egypt are like golden seas of sand...
              </p>
              <a href="/about" className="btn btn-secondary text-red">MORE</a>
            </div>
          </div>
        </div>
      </section>
      
      <section className="features">
        <div className="container">
          <div className="box-wrapper">
            <div className="box box-1">
              <i className="fas fa-route"></i>
              <h2 className="md-heading">Adventurous</h2>
              <p>Lorem ipsum dolor sit amet consectetur...</p>
            </div>
            <div className="box box-2">
              <i className="fas fa-strikethrough"></i>
              <h2 className="md-heading">Less price</h2>
              <p>Lorem ipsum, dolor sit amet consectetur...</p>
            </div>
            <div className="box box-3">
              <i className="fas fa-user-check"></i>
              <h2 className="md-heading">Experience</h2>
              <p>Lorem ipsum dolor sit amet consectetur...</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
