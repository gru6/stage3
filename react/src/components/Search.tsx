import { setSearchValue } from "../features/searchSlice";
import { FormEvent, useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "store";

export default function SearchBar() {
  const [inputValue, setInputValue] = useState("");
  const dispatch = useDispatch();
  const searchValue = useSelector((state: RootState) => state.search.value);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = event.target.value;
    setInputValue(inputValue);
  };

  useEffect(() => {
    setInputValue(inputValue);
  }, [inputValue]);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    dispatch(setSearchValue(inputValue));
  };

  return (
    <>
      <form id="search-form" role="search" onSubmit={handleSubmit}>
        <div>
          <input
            defaultValue={searchValue}
            type="text"
            onChange={handleInputChange}
          />
        </div>
        <button type="submit">Search</button>
      </form>
    </>
  );
}
