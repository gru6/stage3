import React, { useState } from "react";
import { Form, Icards } from "../components/form/Form";

export interface Istate {
  cards: Icards[];
}

export default function FormPage() {
  const [cards, setCards] = useState<Icards[]>([]);

  const updateStateFormComponent = (value: Icards) => {
    setCards([...cards, value]);
  };

  return (
    <>
      <Form updateData={updateStateFormComponent} />
      <ul className="new-card-container">
        {cards.map((card, index) => (
          <div key={index} className="new-card">
            New Card
            <div>Person name: {card.text}</div>
            <div>Birthday: {card.date}</div>
            <div>Sex: {card.sex}</div>
            <div>Client agree with everything</div>
            <div>Contact: {card.contact}</div>
            <div className="img-ccontainer">
              Avatar: <img src={card.file} alt="" className="new-card-img" />
            </div>
          </div>
        ))}
      </ul>
    </>
  );
}
