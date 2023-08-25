import { useState } from "react";
import Cell from "../models/Cell";
import Resource from "../models/Resource";
import AddImprovementDialog from "./AddImprovementDialog";
import EditImprovementDialog from "./EditImprovementDialog";
import "./Tile.css";

interface Props {
  cell: Cell;
  resources: Resource[];
  index: number;
  onAdd: (cell: Cell) => void;
  onEdit: (cell: Cell) => void;
}

const Tile = ({ cell, resources, index, onAdd, onEdit }: Props) => {
  // when a tile is clicked render a improvement dialog
  // if empty render add / if !empty render edit
  // cell.isEmpty === true => render onAdd
  // cell data
  // if e.target[data-index]

  const [showDialogs, setShowDialogs] = useState(false);
  const [choice, setChoice] = useState<boolean>(cell.isEmpty);
  // cancel button needs access to setShowDialogs

  return (
    <div
      onClick={() => setShowDialogs(true)}
      className="Tile"
      data-index={index}
    >
      {showDialogs && (
        <div>
          {!choice ? (
            <EditImprovementDialog
              cell={cell}
              resources={resources}
              onEdit={onEdit}
            />
          ) : (
            <AddImprovementDialog
              cell={cell}
              resources={resources}
              onAdd={onAdd}
            />
          )}
        </div>
      )}
    </div>
  );
};

export default Tile;
