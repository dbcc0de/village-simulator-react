import { FormEvent, MouseEventHandler, useState } from "react";
import Cell from "../models/Cell";
import Resource from "../models/Resource";
import "./EditImprovementDialog.css";

interface Props {
  cell: Cell;
  resources: Resource[];
  onAdd: (index: number, cell: Cell) => void;
  index: number;
  setShowDialogs: (boolean: boolean) => void;
}

const EditImprovementDialog = ({
  cell,
  resources,
  index,
  onAdd,
  setShowDialogs,
}: Props) => {
  const [type, setType] = useState(cell.type);
  const [icon, setIcon] = useState(cell.icon);
  const [level, setLevel] = useState(cell.level);
  const [isEmpty, setIsEmpty] = useState(false);

  // const handleClick = (e: FormEvent) => {
  //   console.dir(e.target);
  // };

  // need a function that will handle all buttons
  // close adds class hidden
  // level ++ // level --
  // edit the object's level => reuse onEdit function
  // level up function , use onEdit
  //  onClick={()=>onEdit(cell.level + 1)}

  // && will allow render

  const handleUpgrade = () => {
    if (type === "house") {
      onAdd(index, {
        type: "house",
        icon: "http://localhost:3000/assets/house-solid.svg",
        level: level + 1,
        isEmpty: false,
      });
    } else if (type === "cow") {
      onAdd(index, {
        type: "cow",
        icon: "http://localhost:3000/assets/cow-solid.svg",
        level: level + 1,
        isEmpty: false,
      });
    } else if (type === "wheat") {
      onAdd(index, {
        type: "wheat",
        icon: "http://localhost:3000/assets/wheat-awn-solid.svg",
        level: level + 1,
        isEmpty: false,
      });
    } else if (type === "wood") {
      onAdd(index, {
        type: "wood",
        icon: "http://localhost:3000/assets/tree-solid.svg",
        level: level + 1,
        isEmpty: false,
      });
    } else if (type === "brick") {
      onAdd(index, {
        type: "brick",
        icon: "http://localhost:3000/assets/trowel-bricks-solid.svg",
        level: level + 1,
        isEmpty: false,
      });
    }
    setShowDialogs(false);
  };

  const toUpper = String(cell.type);
  const capitalized = toUpper.charAt(0).toUpperCase() + toUpper.slice(1);

  return (
    <>
      <p>Type: {capitalized}</p>
      <p>Level: {cell.level}</p>
      <p>Benefit: </p>
      <p>Cost: </p>
      {/* increase some resources and take away some */}
      {/* if resources < x then disallow upgrade */}
      <button className="exitOnClick" onClick={handleUpgrade}>
        Upgrade
      </button>
      <button className="exitOnClick" onClick={() => {}}>
        Downgrade
      </button>
      <button onClick={() => {}}>Remove</button>
    </>
  );
};

export default EditImprovementDialog;
// Div-ilization / Civilization
