import { FormEvent, useState } from "react";
import "./AddImprovementDialog.css";
import Resource from "../models/Resource";
import Cell from "../models/Cell";
import treeSolid from "./Assets/tree-solid.svg";
import cowSolid from "./Assets/cow-solid.svg";
import brickSolid from "./Assets/trowel-bricks-solid.svg";
import wheatSolid from "./Assets/wheat-awn-solid.svg";
import houseSolid from "./src/Assets/house-solid.svg";

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
    if (type === "house") {
      onAdd({
        type: "house",
        icon: "http://localhost:3000/assets/house-solid.svg",
        level: 1,
        isEmpty: false,
      });
    } else if (type === "cow") {
      onAdd({
        type: "cow",
        icon: "http://localhost:3000/assets/cow-solid.svg",
        level: 1,
        isEmpty: false,
      });
    } else if (type === "wheat") {
      onAdd({
        type: "wheat",
        icon: "http://localhost:3000/assets/wheat-awn-solid.svg",
        level: 1,
        isEmpty: false,
      });
    } else if (type === "wood") {
      onAdd({
        type: "wood",
        icon: "http://localhost:3000/assets/tree-solid.svg",
        level: 1,
        isEmpty: false,
      });
    } else if (type === "brick") {
      onAdd({
        type: "brick",
        icon: "http://localhost:3000/assets/trowel-bricks-solid.svg",
        level: 1,
        isEmpty: false,
      });
    }
    // onAdd({ type, icon: "", level: 1, isEmpty: false });
    // need onAdd to edit resource #s
    setType("house");
    setIcon("");
    setLevel(0);
    setIsEmpty(true);
    console.log(cell);
  };

  let benefit = "";
  let cost = "";
  if (type === "house") {
    cost = "3 bricks, 2 wood";
    benefit = "5 people";
  } else if (type === "cow") {
    cost = "3 wheat, 1 wood, 1 people";
    benefit = "3 cows";
  } else if (type === "wheat") {
    cost = "1 wood, 1 people";
    benefit = "6 wheat";
  } else if (type === "wood") {
    cost = "2 wheat, 1 cow, 1 people";
    benefit = "4 wood";
  }
  if (type === "brick") {
    cost = "2 wheat, 1 cow, 2 people";
    benefit = "4";
  }

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
          <option value={"cow"}>Cow</option>
          <option value={"wheat"}>Wheat</option>
        </select>
      </label>
      <p>Benefit: {benefit}</p>
      <p>Cost: {cost}</p>
      <button>Cancel</button>
      <button type="submit">Add</button>
    </form>
  );
};

export default AddImprovementDialog;
