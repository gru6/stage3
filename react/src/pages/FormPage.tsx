import React from "react";
import { Form, Icards } from "../components/form/Form";

export interface Istate {
  cards: Icards[];
}

export default class FormPage extends React.Component<
  Record<string, never>,
  Istate
> {
  constructor(props: Record<string, never>) {
    super(props);
    this.state = { cards: [] };
    this.updateStateFormComponent = this.updateStateFormComponent.bind(this);
  }

  updateStateFormComponent(value: Icards) {
    this.setState((prevState) => ({
      cards: [...prevState.cards, value],
    }));
  }

  render() {
    return (
      <>
        <Form updateData={this.updateStateFormComponent} />
        <ul className="new-card-container">
          {this.state.cards.map((card, index) => (
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
}
