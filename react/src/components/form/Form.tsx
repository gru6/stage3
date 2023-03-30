import { useState } from "react";
import Modal from "./Modal";
import { useForm } from "react-hook-form";

type Props = {
  updateData: (data: Icards) => void;
};

export interface Icards {
  text: string;
  date: string;
  sex: string;
  box: string;
  contact: string;
  file: string;
}

export interface Istate {
  cards: Icards[];
  card: Icards;
  isModalOpen: boolean;
}

export function Form(props: Props) {
  const { register, handleSubmit, reset } = useForm<Icards>();

  const [isModalOpen, setModalStatus] = useState(false);
  /*   const [isChecked, setIsChecked] = useState(false)  Починить потом очистку чекбокса */
  /*   const [cards, setCardsdArray] = useState([]);
   */

  function handleOpenModal() {
    setModalStatus(true);
  }

  function handleCloseModal() {
    setModalStatus(false);
  }

  const onSubmit = (data: Icards) => {
    console.log("data :>> ", data);
    const file = data.file?.[0];
    if (file) {
      const blob = new Blob([file], { type: "application/pdf" });
      data.file = URL.createObjectURL(blob);
    }
    handleOpenModal();
    handleDataForCard(data);
    handleClearForm();
  };

  const handleClearForm = () => {
    reset({
      text: "",
      date: "",
      sex: "",
      box: "",
      contact: "",
      file: "",
    });
  };

  function handleDataForCard(data: Icards) {
    props.updateData(data);
  }

  return (
    <>
      <form className="form-container" onSubmit={handleSubmit(onSubmit)}>
        <label>
          Person name:
          <input
            type="text"
            /*   defaultValue={"Loe Choe"} */
            {...register("text")}
            required
            pattern="^[a-zA-Zа-яА-Я]{2,50}[\s][a-zA-Zа-яА-Я]{2,50}$"
            title="The name must contain 2 words longer than 2 letters"
          />
        </label>
        <label>
          Birthday:
          <input
            type="date"
            /*  defaultValue={"2023-12-12"} */
            {...register("date")}
            required
          />
        </label>
        <label htmlFor="sex">
          Choose a sex:
          <select required {...register("sex")} defaultValue="">
            <option disabled value="">
              -- Do not chosen --
            </option>
            <option value="Man">Man</option>
            <option value="Woman">Woman</option>
            <option value="Another">Another</option>
          </select>
        </label>
        <label htmlFor="agreement">
          I agree
          <input
            {...register("box")}
            /*  defaultChecked */
            type="checkbox"
            name="agreement"
            value="agreed"
            required
          />
        </label>
        <div className="radio-container">
          <p>Please select your preferred contact method:</p>
          <div className="radio-item">
            <label htmlFor="contactChoice1">
              Email
              <input
                {...register("contact")}
                /*    defaultChecked */
                required
                type="radio"
                id="contactChoice1"
                name="contact"
                value="email"
              />
            </label>
            <label htmlFor="contactChoice2">
              Phone
              <input
                {...register("contact")}
                type="radio"
                id="contactChoice2"
                name="contact"
                value="phone"
              />
            </label>
            <label htmlFor="contactChoice3">
              Telegram
              <input
                {...register("contact")}
                type="radio"
                id="contactChoice3"
                name="contact"
                value="telegram"
              />
            </label>
          </div>
        </div>

        <label>
          Upload avatar:
          <input
            type="file"
            {...register("file")}
            required
            id="imageFile"
            accept="image/*"
          />
        </label>
        <button>Submit</button>
      </form>

      <Modal isOpen={isModalOpen} onClose={() => handleCloseModal()}></Modal>
    </>
  );
}

/* 
import React, { Component, FormEvent, RefObject } from "react";
import Modal from "./Modal";

type Props = {
  updateData: (data: Icards) => void;
};

export interface Icards {
  text: string | undefined;
  date: string | undefined;
  sex: string | undefined;
  box: string | undefined;
  contact: string | undefined;
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
  private selectInput: RefObject<HTMLSelectElement>;
  private boxInput: RefObject<HTMLInputElement>;
  private contactInput: RefObject<HTMLInputElement>;
  private fileInput: RefObject<HTMLInputElement>;
  private form: RefObject<HTMLFormElement>;

  constructor(props: Props) {
    super(props);

    this.state = {
      cards: [],
      card: { text: "", date: "", sex: "", box: "", contact: "", file: "" },
      isModalOpen: false,
    };

    this.textInput = React.createRef();
    this.dateInput = React.createRef();
    this.selectInput = React.createRef();
    this.boxInput = React.createRef();
    this.contactInput = React.createRef();
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
      box: this.boxInput.current?.value,
      contact: this.contactInput.current?.value,
      file: this.fileInput.current?.files
        ? URL.createObjectURL(this.fileInput.current.files[0])
        : "",
    };
    console.log("dataForNewCard :>> ", dataForNewCard);

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
              defaultValue={"Loe Choe"}
              ref={this.textInput}
              required
              pattern="^[a-zA-Zа-яА-Я]{2,50}[\s][a-zA-Zа-яА-Я]{2,50}$"
              title="The name must contain 2 words longer than 2 letters"
            />
          </label>
          <label>
            Birthday:
            <input
              type="date"
              defaultValue={"2023-12-12"}
              ref={this.dateInput}
              required
            />
          </label>
          <label htmlFor="sex">
            Choose a sex:
            <select name="sex" required ref={this.selectInput} defaultValue="">
              <option disabled value="Man">
                -- Do not chosen --
              </option>
              <option value="Man">Man</option>
              <option value="Woman">Woman</option>
              <option value="Another">Another</option>
            </select>
          </label>
          <label htmlFor="agreement">
            I agree
            <input
              ref={this.boxInput}
              defaultChecked
              type="checkbox"
              name="agreement"
              value="agreed"
              required
            />
          </label>
          <div className="radio-container">
            <p>Please select your preferred contact method:</p>
            <div className="radio-item">
              <label htmlFor="contactChoice1">
                Email
                <input
                  ref={this.contactInput}
                  defaultChecked
                  required
                  type="radio"
                  id="contactChoice1"
                  name="contact"
                  value="email"
                />
              </label>
              <label htmlFor="contactChoice2">
                Phone
                <input
                  ref={this.contactInput}
                  type="radio"
                  id="contactChoice2"
                  name="contact"
                  value="phone"
                />
              </label>
              <label htmlFor="contactChoice3">
                Telegram
                <input
                  ref={this.contactInput}
                  type="radio"
                  id="contactChoice3"
                  name="contact"
                  value="telegram"
                />
              </label>
            </div>
          </div>

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


switcher (radio)
 */
