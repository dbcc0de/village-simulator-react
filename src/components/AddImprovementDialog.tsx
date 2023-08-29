import { FormEvent, useState } from "react";
import "./AddImprovementDialog.css";
import Resource from "../models/Resource";
import Cell from "../models/Cell";

interface Props {
  cell: Cell;
  resources: Resource[];
  onAdd: (index: number, cell: Cell) => void;
  setShowDialogs: (boolean: boolean) => void;
  index: number;
}

const AddImprovementDialog = ({
  cell,
  index,
  resources,
  onAdd,
  setShowDialogs,
}: // handleClicks,
Props) => {
  const [type, setType] = useState("house");
  const [icon, setIcon] = useState("");
  // will have to convert string to number
  const [level, setLevel] = useState(0);
  // convert string to boolean?
  const [isEmpty, setIsEmpty] = useState(true);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (
      resources[0].amount <= 0 ||
      resources[1].amount <= 0 ||
      resources[2].amount <= 0 ||
      resources[3].amount <= 0 ||
      resources[4].amount <= 0
    ) {
      let anuncio: boolean | undefined = window.confirm(
        "Lo siento...you lost the game :'("
      );
      if (anuncio === true) {
        window.location.reload();
      }
    } else if (type === "house") {
      onAdd(index, {
        type: "house",
        icon: "http://localhost:3000/assets/house-solid.svg",
        level: 1,
        isEmpty: false,
      });
    } else if (type === "cow") {
      onAdd(index, {
        type: "cow",
        icon: "http://localhost:3000/assets/cow-solid.svg",
        level: 1,
        isEmpty: false,
      });
    } else if (type === "wheat") {
      onAdd(index, {
        type: "wheat",
        icon: "http://localhost:3000/assets/wheat-awn-solid.svg",
        level: 1,
        isEmpty: false,
      });
    } else if (type === "wood") {
      onAdd(index, {
        type: "wood",
        icon: "http://localhost:3000/assets/tree-solid.svg",
        level: 1,
        isEmpty: false,
      });
    } else if (type === "brick") {
      onAdd(index, {
        type: "brick",
        icon: "http://localhost:3000/assets/trowel-bricks-solid.svg",
        level: 1,
        isEmpty: false,
      });
    }
    // onAdd({ type, icon: "", level: 1, isEmpty: false });
    // need onAdd to edit resource #s
    setShowDialogs(false);
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
  } else if (type === "brick") {
    cost = "2 wheat, 1 cow, 2 people";
    benefit = "4 brick";
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
      <button className="add" type="submit">
        Add
      </button>
    </form>
  );
};

export default AddImprovementDialog;
