import React from "react";

export const CardCard = ({ card }) => {
  return (
    <>
      <div className="card_card" id={`card_card_${card.id}`}>
        <img src={card.imageUrl} />
      </div>
    </>
  );
};
