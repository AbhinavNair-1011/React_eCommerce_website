import React from "react";
import "../stylings/home.css";

const Home = () => {
  return (
    <div className="home-container">
      {}
      <div className="header">
        <h1 className="header-title">The Generics</h1>
        <div className="album-section">
          <p className="album-text">Get our Latest Album</p>
          <button className="album-button">►</button>
        </div>
      </div>

      {}
      <div className="tours-section">
        <h2 className="tours-title">TOURS</h2>
        <div className="tour-card">
          <p className="tour-date">JUL 16</p>
          <p className="tour-location">DETROIT, MI</p>
          <p className="tour-venue">DTE ENERGY MUSIC THEATRE</p>
          <button className="buy-ticket">BUY TICKETS</button>
        </div>
        <div className="tour-card">
          <p className="tour-date">JUL 19</p>
          <p className="tour-location">TORONTO, ON</p>
          <p className="tour-venue">BUDWEISER STAGE</p>
          <button className="buy-ticket">BUY TICKETS</button>
        </div>
        <div className="tour-card">
          <p className="tour-date">JUL 22</p>
          <p className="tour-location">BRISTOW, VA</p>
          <p className="tour-venue">JIGGY LUBE LIVE</p>
          <button className="buy-ticket">BUY TICKETS</button>
        </div>
        <div className="tour-card">
          <p className="tour-date">JUL 29</p>
          <p className="tour-location">PHOENIX, AZ</p>
          <p className="tour-venue">AK-CHIN PAVILION</p>
          <button className="buy-ticket">BUY TICKETS</button>
        </div>
        <div className="tour-card">
          <p className="tour-date">AUG 2</p>
          <p className="tour-location">LAS VEGAS, NV</p>
          <p className="tour-venue">T-MOBILE ARENA</p>
          <button className="buy-ticket">BUY TICKETS</button>
        </div>
        <div className="tour-card">
          <p className="tour-date">AUG 7</p>
          <p className="tour-location">CONCORD, CA</p>
          <p className="tour-venue">CONCORD PAVILION</p>
          <button className="buy-ticket">BUY TICKETS</button>
        </div>
      </div>

      <footer className="footer">
        <p>The Generics</p>
      </footer>
    </div>
  );
};

export default Home;
