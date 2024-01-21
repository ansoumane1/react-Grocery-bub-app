import { useState } from "react";

import { nanoid } from "nanoid";
import { toast } from "react-toastify";

function Form({ addItem }) {
  const [name, setName] = useState("");
  function handleSubmit(e) {
    e.preventDefault();

    if (!name) {
      toast.error("Please enter value");
      return;
    }
    addItem(name);
    setName("");
  }
  return (
    <form onSubmit={handleSubmit}>
      <h4>Grocery Bud</h4>
      <div className="form-control">
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="form-input"
        />
        <button type="submit" className="btn">
          submit
        </button>
      </div>
    </form>
  );
}

export default Form;
