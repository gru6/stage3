import React, { Component, FormEvent, RefObject } from "react";

interface newCard {
  text: string | undefined;
  date: string;
}
const newCard: newCard = {
  text: "",
  date: "",
};

export class TestForm extends Component {
  private textInput: RefObject<HTMLInputElement> = React.createRef();
  // eslint-disable-next-line @typescript-eslint/ban-types
  constructor(props: {}) {
    super(props);
    this.handleText = this.handleText.bind(this);

    this.textInput = React.createRef();
  }

  handleText(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    newCard.text = this.textInput.current?.value;

    /* if (this.textInput.current?.value.trim().length === 0) {
            setError("Please enter text");
      return;
    } else alert("text: " + this.textInput.current?.value); */
  }

  render(): JSX.Element {
    return (
      <form className="form-container" onSubmit={this.handleText}>
        <label>
          Test:
          <input type="text" ref={this.textInput} defaultValue="Test" />
        </label>
        <input type="submit" value="Submit" />
      </form>
    );
  }
}
