import Cell from "../models/Cell";
import Resource from "../models/Resource";
import AddImprovementDialog from "./AddImprovementDialog";
import EditImprovementDialog from "./EditImprovementDialog";
import "./Tile.css";

interface Props {
  cell: Cell;
  resources: Resource[];
  onAdd: (cell: Cell) => void;
}

const Tile = ({ cell, resources, onAdd }: Props) => {
  return (
    <div className="Tile">
      <EditImprovementDialog cell={cell} resources={resources} />
      <AddImprovementDialog cell={cell} resources={resources} onAdd={onAdd} />
    </div>
  );
};

export default Tile;
