import React, { Component, FormEvent, RefObject } from "react";
import Modal from "./Modal";

export interface InewCard {
  text: string | undefined;
  date: string | undefined;
  file?: string | undefined;
  isModalOpen?: boolean | undefined;
}

const dataForCards: InewCard[] = [];

export class Form extends Component<Record<string, never>, InewCard> {
  private textInput: RefObject<HTMLInputElement> = React.createRef();
  private dateInput: RefObject<HTMLInputElement> = React.createRef();
  private fileInput: RefObject<HTMLInputElement> = React.createRef();

  constructor(props: Record<string, never>) {
    super(props);

    this.state = { text: "1", date: "1", file: "1", isModalOpen: false };
    this.textInput = React.createRef();
    this.dateInput = React.createRef();
    this.fileInput = React.createRef();

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleOpenModal = this.handleOpenModal.bind(this);
    this.handleCloseModal = this.handleCloseModal.bind(this);
  }

  handleOpenModal() {
    this.setState(
      {
        text: this.textInput.current?.value,
        date: this.dateInput.current?.value,
        file: this.fileInput.current?.files
          ? URL.createObjectURL(this.fileInput.current.files[0])
          : "",
        isModalOpen: true,
      },
      () => dataForCards.push(this.state)
    );
  }

  handleCloseModal() {
    this.setState({ isModalOpen: false });
  }

  handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    this.handleOpenModal();
  }

  createNewCard() {
    return (
      <>
        <div>
          {dataForCards
            .map((card, index) => (
              <div key={index}>
                <div>{card.text}</div>
                <div>{card.date}</div>
                <img src={card.file} alt="" className="new-card-img" />
              </div>
            ))
            .slice(1)}
        </div>
      </>
    );
  }

  render(): JSX.Element {
    const { isModalOpen } = this.state;
    console.log("this.state :>> ", this.state);
    console.log("before dataForCards :>> ", dataForCards);
    return (
      <>
        <form className="form-container" onSubmit={this.handleSubmit}>
          <label>
            Text:
            <input
              type="text"
              ref={this.textInput}
              /*  defaultValue="Bob Marchinsky" исправить валидацию на 2 слова*/
              required
              pattern="[a-zA-Z]+"
              title="Имя должно содержать буквы"
            />
          </label>
          <label>
            Date:
            <input type="date" ref={this.dateInput} required />
          </label>
          <label>
            Upload image:
            <input
              type="file"
              ref={this.fileInput}
              required
              id="imageFile"
              accept="image/*"
            />
          </label>
          <button>Submit</button>
        </form>

        <Modal isOpen={isModalOpen} onClose={this.handleCloseModal}></Modal>
        {this.createNewCard()}
      </>
    );
  }
}

/* text input
date input
dropdown/select
checkbox
switcher (radio)
file upload (image)
 */
