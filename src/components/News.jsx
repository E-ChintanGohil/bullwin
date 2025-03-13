import React from 'react';
import './News.css';
import bannerImage from '../assets/img/banner.png';

function News() {
  return (
    <div className="news-container">
      {/* News Section */}
      <div className="row">
        <div className="col-md-12">
          <div className="marquee-box">
            <h4>
              <i className="mdi mdi-microphone-outline"></i>
              News
            </h4>
            <marquee scrollAmount="5">
              Welcome to the biggest exchange for Cricket, Tennis, Football, Casino and Virtual Games!
            </marquee>
          </div>
        </div>
      </div>

      {/* Banner Section */}
      <div className="row">
        <div className="col-md-12 banner-section">
          <img className="img-fluid" src={bannerImage} alt="Exchange Banner" />
        </div>
      </div>
    </div>
  );
}

export default News; 