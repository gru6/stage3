import { useState } from "react";
import Modal from "../Modal/Modal";
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

  function handleOpenModal() {
    setModalStatus(true);
  }

  function handleCloseModal() {
    setModalStatus(false);
  }

  const onSubmit = (data: Icards) => {
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
  const element = <div>Форма отправлена!</div>;

  return (
    <>
      <form className="form-container" onSubmit={handleSubmit(onSubmit)}>
        <label>
          Person name:
          <input
            type="text"
            {...register("text")}
            required
            pattern="^[a-zA-Zа-яА-Я]{2,50}[\s][a-zA-Zа-яА-Я]{2,50}$"
            title="The name must contain 2 words longer than 2 letters"
          />
        </label>
        <label>
          Birthday:
          <input type="date" {...register("date")} required />
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

      <Modal
        isOpen={isModalOpen}
        onClose={() => handleCloseModal()}
        InnerComponent={element}
      ></Modal>
    </>
  );
}
