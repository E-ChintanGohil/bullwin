import React from 'react';
import './CardFront.css';

const CardFront = ({ image, title, sportsList }) => {
  return (
    <div className="game-card-div">
      <a href="#" className="game-card-link">
        <img className="game-card-image" src={image} alt={title} />
        <h2 className="game-card-title">{title}</h2>
      </a>
      {sportsList && (
        <div className="game-card-sports">
          <p className="game-card-live"><span></span> LIVE</p>
          {sportsList.map((sport, index) => (
            <div key={index} className="game-card-sport-item">
              <a href={sport.link} className="game-card-sport-link">
                <h3 className="game-card-sport-name">{sport.name}</h3>
                <span className="game-card-sport-count">{sport.count}</span>
              </a>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default CardFront; 