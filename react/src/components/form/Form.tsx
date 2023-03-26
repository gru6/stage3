import React, { Component, FormEvent, RefObject } from "react";
import Modal from "./Modal";

type Props = {
  updateData: (data: Icards) => void;
};

export interface Icards {
  text: string | undefined;
  date: string | undefined;
  file: string | undefined;
}

export interface Istate {
  cards: Icards[];
  card: Icards;
  isModalOpen: boolean | undefined;
}

export class Form extends Component<Props, Istate> {
  private textInput: RefObject<HTMLInputElement>;
  private dateInput: RefObject<HTMLInputElement>;
  private fileInput: RefObject<HTMLInputElement>;
  private form: RefObject<HTMLFormElement>;

  constructor(props: Props) {
    super(props);

    this.state = {
      cards: [],
      card: { text: "", date: "", file: "" },
      isModalOpen: false,
    };
    this.textInput = React.createRef();
    this.dateInput = React.createRef();
    this.fileInput = React.createRef();
    this.form = React.createRef();

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleOpenModal = this.handleOpenModal.bind(this);
    this.handleCloseModal = this.handleCloseModal.bind(this);
  }

  handleOpenModal() {
    this.setState({
      isModalOpen: true,
    });
  }

  handleCloseModal() {
    this.setState({ isModalOpen: false });
  }

  handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const dataForNewCard = {
      text: this.textInput.current?.value,
      date: this.dateInput.current?.value,
      file: this.fileInput.current?.files
        ? URL.createObjectURL(this.fileInput.current.files[0])
        : "",
    };

    this.setState(
      {
        card: dataForNewCard,
      },
      () => this.handleDataForCard(dataForNewCard)
    );

    this.handleOpenModal();
  }

  handleDataForCard(data: Icards) {
    this.props.updateData(data);
  }

  render(): JSX.Element {
    const { isModalOpen } = this.state;
    return (
      <>
        <form
          ref={this.form}
          className="form-container"
          onSubmit={this.handleSubmit}
        >
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
