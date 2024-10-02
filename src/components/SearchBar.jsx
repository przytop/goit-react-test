import { useState } from "react";

export default function SearchBar() {
  const [inputValue, setInputValue] = useState("");

  const handleChange = (evt) => {
    setInputValue(evt.target.value);
  };

  return (
    <div>
      <h1>SearchBar</h1>
      <input type="text" value={inputValue} onChange={handleChange} />
      <p>{inputValue}</p>
    </div>
  );
}
