import { useEffect, useState } from "react";
import Cell from "../models/Cell";
import Resource from "../models/Resource";
import AddImprovementDialog from "./AddImprovementDialog";
import EditImprovementDialog from "./EditImprovementDialog";
import "./Tile.css";

interface Props {
  cell: Cell;
  resources: Resource[];
  index: number;
  onAdd: (index: number, cell: Cell) => void;
  onDowngrade: (index: number, cell: Cell) => void;
}

const Tile = ({ cell, resources, index, onAdd, onDowngrade }: Props) => {
  // when a tile is clicked render a improvement dialog
  // if empty render add / if !empty render edit
  // cell.isEmpty === true => render onAdd
  // cell data
  // if e.target[data-index]

  const [showDialogs, setShowDialogs] = useState(false);

  const handleClick = (e: any) => {
    setShowDialogs(true);
    if (
      e.target.classList.contains("cancel") ||
      e.target.classList.contains("exitOnClick")
    ) {
      setShowDialogs(false);
    }
  };

  return (
    <div onClick={handleClick} className="Tile" data-index={index}>
      {!cell.isEmpty && (
        <>
          <img src={cell.icon || ""} alt="" />
          <p>LVL {cell.level}</p>
        </>
      )}
      {showDialogs && (
        <div className="form-container">
          {cell.icon ? (
            <EditImprovementDialog
              cell={cell}
              index={index}
              resources={resources}
              onAdd={onAdd}
              onDowngrade={onDowngrade}
              setShowDialogs={setShowDialogs}
            />
          ) : (
            <AddImprovementDialog
              index={index}
              cell={cell}
              resources={resources}
              onAdd={onAdd}
              setShowDialogs={setShowDialogs}
            />
          )}
          <button className="cancel" onClick={handleClick}>
            Cancel
          </button>
        </div>
      )}
    </div>
  );
};

export default Tile;
