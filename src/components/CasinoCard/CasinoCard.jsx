import React from 'react';
import './CasinoCard.css';

const CasinoCard = ({ image, title }) => {
  return (
    <div className="casino-card-div">
      <a href="#" className="casino-card-link">
        <img className="casino-card-image" src={image} alt={title} />
        <h2 className="casino-card-title">{title}</h2>
      </a>
    </div>
  );
};

export default CasinoCard; 