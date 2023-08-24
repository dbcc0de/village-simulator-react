import "./Map.css";
import Tile from "./Tile";
import Cell from "../models/Cell";

interface Props {
  cells: Cell[];
}

const Map = ({ cells }: Props) => {
  return (
    <div className="Map">
      {cells.map((item, index) => (
        <Tile cell={item} key={index} />
      ))}
    </div>
  );
};

export default Map;
