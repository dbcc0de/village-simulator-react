import "./App.css";
import ResourcesView from "./components/ResourcesView";
import Map from "./components/Map";
import { useState } from "react";
import Cell from "./models/Cell";

function App() {
  // is there a house?
  const [resources, setResources] = useState([
    { icon: "", type: "Wood", amount: 12 },
    { icon: "", type: "Sheep", amount: 3 },
    { icon: "", type: "Brick", amount: 6 },
    { icon: "", type: "Wheat", amount: 10 },
    { icon: "", type: "People", amount: 5 },
  ]);

  // 24 cells with specific info
  const [cells, setCells] = useState<Cell[]>([
    {
      type: null,
      icon: null,
      level: 0,
      isEmpty: true,
    },
    {
      type: null,
      icon: null,
      level: 0,
      isEmpty: true,
    },
    {
      type: null,
      icon: null,
      level: 0,
      isEmpty: true,
    },
    {
      type: null,
      icon: null,
      level: 0,
      isEmpty: true,
    },
    {
      type: null,
      icon: null,
      level: 0,
      isEmpty: true,
    },
    {
      type: null,
      icon: null,
      level: 0,
      isEmpty: true,
    },
    {
      type: null,
      icon: null,
      level: 0,
      isEmpty: true,
    },
    {
      type: null,
      icon: null,
      level: 0,
      isEmpty: true,
    },
    {
      type: null,
      icon: null,
      level: 0,
      isEmpty: true,
    },
    {
      type: null,
      icon: null,
      level: 0,
      isEmpty: true,
    },
    {
      type: null,
      icon: null,
      level: 0,
      isEmpty: true,
    },
    {
      type: null,
      icon: null,
      level: 0,
      isEmpty: true,
    },
    {
      type: null,
      icon: null,
      level: 0,
      isEmpty: true,
    },
    {
      type: null,
      icon: null,
      level: 0,
      isEmpty: true,
    },
    {
      type: null,
      icon: null,
      level: 0,
      isEmpty: true,
    },
    {
      type: null,
      icon: null,
      level: 0,
      isEmpty: true,
    },
    {
      type: null,
      icon: null,
      level: 0,
      isEmpty: true,
    },
    {
      type: null,
      icon: null,
      level: 0,
      isEmpty: true,
    },
    {
      type: null,
      icon: null,
      level: 0,
      isEmpty: true,
    },
    {
      type: null,
      icon: null,
      level: 0,
      isEmpty: true,
    },
    {
      type: null,
      icon: null,
      level: 0,
      isEmpty: true,
    },
    {
      type: null,
      icon: null,
      level: 0,
      isEmpty: true,
    },
    {
      type: null,
      icon: null,
      level: 0,
      isEmpty: true,
    },
    {
      type: null,
      icon: null,
      level: 0,
      isEmpty: true,
    },
  ]);

  const onAddImprove = (index: number, cell: Cell) => {
    setCells((prev) => [
      ...prev.slice(0, index),
      cell,
      ...prev.slice(index + 1),
    ]);
    // also needs to edit the resource #s
  };

  const onEditImprove = (index: number, cell: Cell) => {
    setCells((prev) => [
      ...prev.slice(0, index),
      cell,
      ...prev.slice(index + 1),
    ]);
    // also needs to edit the resource #s
  };

  console.log(cells);
  // const onAddImprovement = (improvement: any): void => {
  //   setCells((cells))
  // }

  // cells.icon += "image path"

  // callback props live here
  return (
    <div className="App">
      {/* ResourcesView */}
      <ResourcesView resources={resources} />
      {/* Map */}
      <Map
        cells={cells}
        resources={resources}
        onAdd={onAddImprove}
        onEdit={onEditImprove}
      />
    </div>
  );
}

export default App;
