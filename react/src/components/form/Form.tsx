import React, { Component, FormEvent, RefObject } from "react";
import Modal from "./Modal";

type Props = {
  updateData: (data: Icards) => void;
};

export interface Icards {
  text: string | undefined;
  date: string | undefined;
  sex?: string | undefined;
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
  private selectInput: RefObject<HTMLSelectElement>;
  private form: RefObject<HTMLFormElement>;

  constructor(props: Props) {
    super(props);

    this.state = {
      cards: [],
      card: { text: "", date: "", /* sex: "", */ file: "" },
      isModalOpen: false,
    };

    this.textInput = React.createRef();
    this.dateInput = React.createRef();
    this.selectInput = React.createRef();
    this.fileInput = React.createRef();
    this.form = React.createRef();

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleOpenModal = this.handleOpenModal.bind(this);
    this.handleCloseModal = this.handleCloseModal.bind(this);
    this.clearForm = this.clearForm.bind(this);
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
      sex: this.selectInput.current?.value,
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
    this.clearForm();
  }

  clearForm() {
    this.form.current?.reset();
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
            Person name:
            <input
              type="text"
              ref={this.textInput}
              required
              pattern="^[a-zA-Zа-яА-Я]{2,50}[\s][a-zA-Zа-яА-Я]{2,50}$"
              title="The name must contain 2 words longer than 2 letters"
            />
          </label>
          <label>
            Birthday:
            <input type="date" ref={this.dateInput} required />
          </label>
          {/* <label htmlFor="sex">
            Choose a sex:
            <select name="sex" required ref={this.selectInput}>
              <option selected disabled value="">
                -- Do not chosen --
              </option>
              <option value="Man">Man</option>
              <option value="Woman">Woman</option>
              <option value="Another">Another</option>
            </select>
          </label> */}
          <label>
            Upload avatar:
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

/* 
date add validation
dropdown/select add то что нельзя не выбрать значение
checkbox
switcher (radio)
 */
