import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getCardById } from "../../modules/CardManager.js";

export const CardDetails = () => {
  const [card, setCard] = useState({});
  const { cardId } = useParams();

  useEffect(() => {
    getCardById(cardId).then((thisCard) => {
      setCard(thisCard.card);
    });
  });

  return (
    <>
      <div className="card_detail_card" id={`card_detail_card_${card.id}`}>
        <img src={card.imageUrl} />
      </div>
    </>
  );
};
