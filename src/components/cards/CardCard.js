import React from "react";
import { useNavigate } from "react-router-dom";

export const CardCard = ({ card }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/${card.id}/details`);
  };

  return (
    <>
      <div className="card_card" id={`card_card_${card.id}`}>
        <img src={card.imageUrl} onClick={() => handleClick()} />
      </div>
    </>
  );
};
