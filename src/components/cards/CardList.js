import React, { useEffect, useState } from "react";
import { CardCard } from "./CardCard";
import { getAllCards } from "../../modules/CardManager";

export const CardList = ({}) => {
  const [cards, setCards] = useState([]);
  const [pageNum, setPageNum] = useState(1);

  const getCards = (pageNum) => {
    getAllCards(pageNum).then((theCards) => {
      setCards(theCards.cards);
    });
  };

  useEffect(() => {
    getCards(pageNum);
  }, [pageNum]);

  return (
    <>
      <div className="card_list">
        {cards.map((card) => {
          if (card.imageUrl) {
            return <CardCard key={card.id} card={card} />;
          }
        })}
        <button
          type="button"
          onClick={() => {
            setPageNum(pageNum + 1);
          }}
        >
          Previous Page
        </button>
        <button
          type="button"
          onClick={() => {
            setPageNum(pageNum + 1);
          }}
        >
          Next Page
        </button>
      </div>
    </>
  );
};
