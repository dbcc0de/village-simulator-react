import { FormEvent, useState } from "react";
import Cell from "../models/Cell";
import Resource from "../models/Resource";
import "./EditImprovementDialog.css";

interface Props {
  cell: Cell;
  resources: Resource[];
  onEdit: (cell: Cell) => void;
}

const EditImprovementDialog = ({ cell, resources, onEdit }: Props) => {
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
  //

  return (
    <div className="EditImprovementDialog">
      <p>Type: {cell.type}</p>
      <p>Level: {cell.level}</p>
      <p>Benefit: </p>
      <p>Cost: </p>
      <button onClick={() => {}}>Close</button>
      {/* increase some resources and take away some */}
      {/* if resources < x then disallow upgrade */}
      <button onClick={() => {}}>Upgrade</button>
      <button onClick={() => {}}>Downgrade</button>
      <button onClick={() => {}}>Remove</button>
    </div>
  );
};

export default EditImprovementDialog;
// Div-ilization / Civilization
