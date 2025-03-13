import React from 'react';
import CardFront from '../CardFront/CardFront';
import './Grid.css';

const Grid = ({ cards }) => {
  return (
    <div className="game-grid-container">
      <div className="game-grid-row">
        {cards.map((card, index) => (
          <div key={index} className="game-grid-col">
            <CardFront 
              image={card.image}
              title={card.title}
              sportsList={card.sportsList}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Grid; 