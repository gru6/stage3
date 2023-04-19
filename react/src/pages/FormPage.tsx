import { Form, Icards } from "../components/Form/Form";
import { useDispatch, useSelector } from "react-redux";
import { addFormValue } from "../features/formSubmitSlice";
import { RootState } from "store";

export default function FormPage() {
  const dispatch = useDispatch();
  const formValues = useSelector((state: RootState) => state.form.formValues);

  const updateStateFormComponent = (value: Icards) => {
    dispatch(addFormValue(value));
  };

  return (
    <>
      <Form updateData={updateStateFormComponent} />
      <ul className="new-card-container">
        {formValues.map((card, index) => (
          <div key={index} className="new-card">
            New Card
            <div>Person name: {card.text}</div>
            <div>Birthday: {card.date}</div>
            <div>Sex: {card.sex}</div>
            <div>Client agree with everything</div>
            <div>Contact: {card.contact}</div>
            <div className="img-container">
              Avatar: <img src={card.file} alt="" className="new-card-img" />
            </div>
          </div>
        ))}
      </ul>
    </>
  );
}
