/* import React from "react";

import { InewCard, dataForNewCard } from "./Form";

export class NewCard extends React.Component<Record<string, never>, InewCard> {
  constructor(props: Record<string, never>) {
    super(props);
    this.state = { text: dataForNewCard.text, date: dataForNewCard.date };
  }

  componentDidMount() {
    console.log("Component mounted!");
  }

  componentDidUpdate() {
    console.log("Component updated!");
  }
  handleCard = () => {
    this.setState((prevState) => ({
      //надо заставить обновиться форму!!!!!
      text: dataForNewCard.text,
      date: dataForNewCard.date,
    }));
  };

  componentWillUnmount() {
    console.log("Component will unmount!");
  }
  render() {
    console.log("this.state.text :>> ", this.state.text);
    return (
      <>
        <div className="movie-card">
          <div className="movie-details">
            <h2>{this.state.text}</h2>
            <p>Directed by {this.state.date}</p>
          </div>
        </div>
        <input type="submit" value="Submit" onClick={() => this.handleCard()} />
      </>
    );
  }
}
 */
