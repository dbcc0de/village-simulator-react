import Cell from "../models/Cell";
import AddImprovementDialog from "./AddImprovementDialog";
import EditImprovementDialog from "./EditImprovementDialog";
import "./Tile.css";

interface Props {
  cell: Cell;
}

const Tile = ({ cell }: Props) => {
  return (
    <div className="Tile">
      <EditImprovementDialog />
      <AddImprovementDialog />
    </div>
  );
};

export default Tile;
