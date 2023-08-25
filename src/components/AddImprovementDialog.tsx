import { FormEvent, useState } from "react";
import "./AddImprovementDialog.css";
import Resource from "../models/Resource";
import Cell from "../models/Cell";

interface Props {
  cell: Cell;
  resources: Resource[];
  onAdd: (cell: Cell) => void;
}

const AddImprovementDialog = ({ cell, resources, onAdd }: Props) => {
  const [type, setType] = useState("house");
  const [icon, setIcon] = useState("");
  // will have to convert string to number
  const [level, setLevel] = useState(0);
  // convert string to boolean?
  const [isEmpty, setIsEmpty] = useState(true);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    onAdd({ type, icon: "", level: 1, isEmpty: false });
    // need onAdd to edit resource #s
    setType("house");
    setIcon("");
    setLevel(0);
    setIsEmpty(true);
    console.log(cell);
  };

  let benefit = "";
  let cost = "";

  return (
    <form onSubmit={(e) => handleSubmit(e)} className="AddImprovementDialog">
      <label htmlFor="type">
        Type:
        <select
          name="type"
          id="type"
          value={type}
          onChange={(e) => setType(e.target.value)}
        >
          <option value={"house"}>House</option>
          <option value={"brick"}>Brick</option>
          <option value={"wood"}>Wood</option>
          <option value={"sheep"}>Sheep</option>
          <option value={"wheat"}>Wheat</option>
        </select>
      </label>
      <p>Benefit:{benefit}</p>
      <p>Cost: {cost}</p>
      <button>Cancel</button>
      <button type="submit">Add</button>
    </form>
  );
};

export default AddImprovementDialog;
