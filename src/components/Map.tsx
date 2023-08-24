import "./Map.css";
import Cell from "../models/Cell";
import Tile from "./Tile";

interface Props {
  tiles: Cell[];
}

const Map = ({ tiles }: Props) => {
  return (
    <div className="Map">
      {tiles.map((item, index) => (
        <Tile cell={item} key={item.name + index} />
      ))}
    </div>
  );
};

export default Map;
