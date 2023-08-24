import AddImprovementDialog from "./AddImprovementDialog";
import EditImprovementDialog from "./EditImprovementDialog";
import "./Tile.css";

const Tile = () => {
  return (
    <div className="Tile">
      <EditImprovementDialog />
      <AddImprovementDialog />
    </div>
  );
};

export default Tile;
