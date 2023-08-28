import "./Map.css";
import Tile from "./Tile";
import Cell from "../models/Cell";
import Resource from "../models/Resource";

interface Props {
  cells: Cell[];
  resources: Resource[];
  onAdd: (index: number, cell: Cell) => void;
}

const Map = ({ cells, resources, onAdd }: Props) => {
  return (
    <div className="Map">
      {cells.map((item, index) => (
        <Tile
          cell={item}
          index={index}
          key={index}
          resources={resources}
          onAdd={onAdd}
        />
      ))}
    </div>
  );
};

export default Map;
