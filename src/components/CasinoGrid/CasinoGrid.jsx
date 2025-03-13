import React from 'react';
import CasinoCard from '../CasinoCard/CasinoCard';
import './CasinoGrid.css';

const CasinoGrid = ({ cards }) => {
  return (
    <div className="casino-grid-container">
      <div className="casino-grid-row">
        {cards.map((card, index) => (
          <div key={index} className="casino-grid-col">
            <CasinoCard 
              image={card.image}
              title={card.title}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default CasinoGrid; 