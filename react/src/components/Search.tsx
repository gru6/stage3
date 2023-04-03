import { ChangeEvent, useState, useEffect } from "react";

export default function SearchBar() {
  const storedInput = localStorage.getItem("input");
  const [InputValue, setInputValue] = useState(
    storedInput !== null ? storedInput : ""
  );

  function handleInputChange(event: ChangeEvent<HTMLInputElement>) {
    setInputValue(event.target.value);
  }

  useEffect(() => {
    localStorage.setItem("input", InputValue);
    if (localStorage.getItem("input"))
      setInputValue(JSON.parse(JSON.stringify(localStorage.getItem("input"))));
  }, [InputValue]);

  return (
    <>
      <form id="search-form" role="search">
        <div>
          <input value={InputValue} type="text" onChange={handleInputChange} />
        </div>
        <button>Search</button>
      </form>
    </>
  );
}
