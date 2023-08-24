import { FormEvent, useState } from "react";
import "./AddImprovementDialog.css";

const AddImprovementDialog = () => {
  const [type, setType] = useState("");
  const [icon, setIcon] = useState("");
  // will have to convert string to number
  const [level, setLevel] = useState("");
  // convert string to boolean?
  const [isEmpty, setIsEmpty] = useState("");

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    console.log({ type });
    // onAddImprovement function here
    // {type, icon=type img path, Number(level), isEmpty}
    setType("");
    setIcon("");
    setLevel("");
    setIsEmpty("");
  };

  return (
    <form onSubmit={handleSubmit} className="AddImprovementDialog">
      <label htmlFor="type">
        Type:
        <select name="type" id="type">
          <option value={type}>People</option>
          <option value={type}>Brick</option>
          <option value={type}>Wood</option>
          <option value={type}>Sheep</option>
          <option value={type}>Wheat</option>
        </select>
      </label>
      <p>Benefit:</p>
      <p>Cost:</p>
      <button>Cancel</button>
      <button type="submit">Add</button>
    </form>
  );
};

export default AddImprovementDialog;
