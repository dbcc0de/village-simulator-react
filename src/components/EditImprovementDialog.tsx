import { useState } from "react";
import Cell from "../models/Cell";
import Resource from "../models/Resource";
import "./EditImprovementDialog.css";

interface Props {
  cell: Cell;
  resources: Resource[];
}

const EditImprovementDialog = ({ cell, resources }: Props) => {
  const [type, setType] = useState(cell.type);
  const [icon, setIcon] = useState(cell.icon);
  const [level, setLevel] = useState(cell.level);
  const [isEmpty, setIsEmpty] = useState(false);

  return <div className="EditImprovementDialog"></div>;
};

export default EditImprovementDialog;
