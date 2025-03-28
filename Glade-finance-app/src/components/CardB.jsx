import React from 'react';
import './cardB.css';

const CardB = () => {
  return (  
    <div className='cardB-container'>
      <div className='left-cardB-container'>                        
        <div className='left-cardB-content'>
            <h3 className='cardB-text'>
                Borderless cards: The way to pay in the global economy.
            </h3>
            <p className='cardb-description'>
              Create a virtual card   to manage one-time or recurring payments with or specific vendors or subscriptions. 
              This can help you track spending and ensure that your team only spends money on approved items.
            </p>
             <span className="CardB-get-Started">
                Get Started 
                <img src="https://cdn1.iconfinder.com/data/icons/material-core/16/arrow-forward-1024.png" alt="arrow"/>
            </span> 
        </div>
      </div>
      <div className='right-cardB-container'>
        <img src='https://gladefinance.co/images/glade-card.svg' alt="Glade Card"/>
      </div>
    </div>
  );
}

export default CardB;



 {/* <div className="card">
      {cardData.map((card, index) => (
        <Card
          key={index}
          index={index}
          image={card.image}
          title={card.title}
          description={card.description}
          link={card.link}
          theme={card.theme}
          descriptionColor={card.descriptionColor}
        />
      ))}
    </div> */}
