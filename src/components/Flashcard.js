import React, { useState } from 'react';

const Card = ({ id, title, description }) => {
  const [flipped, setFlipped] = useState(false);

  const handleCardFlip = () => {
    setFlipped(!flipped);
  };

  return (
    <div
      key={id}
      className={` card ${flipped ? 'flipped ' : ''}`}
      onMouseEnter={handleCardFlip}
      onMouseLeave={handleCardFlip}
    >
      <div className="card-inner w-full h-full transition-transform duration-500">
        <div className=" card-front absolute h-full w-full flex items-center justify-center text-center  rounded-xl shadow-lg flashcardBack text-white font-bold tracking-wide">
          <p className="drop-shadow-lg">{title}</p>
        </div>
        <div className="card-back p-4 leading-8 text-white absolute h-full w-full flex items-center justify-center rounded-xl shadow-lg -rotate-180 bg-[#042824]">
          <p>{description}</p>
        </div>
      </div>
    </div>
  );
};

export default Card;
