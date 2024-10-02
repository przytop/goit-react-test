import { useState } from "react";

export default function RadioButton() {
  const [coffeeSize, setCoffeeSize] = useState("sm");

  const handleSizeChange = (evt) => {
    setCoffeeSize(evt.target.value);
  };

  return (
    <div>
      <h1>Select coffee size</h1>
      <label>
        <input
          type="radio"
          name="coffeeSize"
          value="sm"
          checked={coffeeSize === "sm"}
          onChange={handleSizeChange}
        />
        Small
      </label>
      <label>
        <input
          type="radio"
          name="coffeeSize"
          value="md"
          checked={coffeeSize === "md"}
          onChange={handleSizeChange}
        />
        Meduim
      </label>
      <label>
        <input
          type="radio"
          name="coffeeSize"
          value="lg"
          checked={coffeeSize === "lg"}
          onChange={handleSizeChange}
        />
        Large
      </label>
    </div>
  );
}
