import "./App.css";
import ResourcesView from "./components/ResourcesView";
import Map from "./components/Map";
import { useState } from "react";
import Cell from "./models/Cell";
import Resource from "./models/Resource";
import Header from "./components/Header";

function App() {
  const [resources, setResources] = useState([
    {
      icon: "http://localhost:3000/assets/tree-solid.svg",
      type: "Wood",
      amount: 8,
    },
    {
      icon: "http://localhost:3000/assets/cow-solid.svg",
      type: "Cow",
      amount: 3,
    },
    {
      icon: "http://localhost:3000/assets/trowel-bricks-solid.svg",
      type: "Brick",
      amount: 6,
    },
    {
      icon: "http://localhost:3000/assets/wheat-awn-solid.svg",
      type: "Wheat",
      amount: 7,
    },
    {
      icon: "http://localhost:3000/assets/house-solid.svg",
      type: "People",
      amount: 4,
    },
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

  // formula for decrementing, resources * cell.level
  const onAddChangeResources = (type: string, cell: Cell) => {
    if (type === "house") {
      setResources((prev) => {
        const newResources = prev.slice(0); // Just makes a copy.
        newResources[4].amount += 5 * cell.level;
        newResources[2].amount -= 3 * cell.level;
        newResources[0].amount -= 2 * cell.level;
        return newResources;
      });
    } else if (type === "cow") {
      setResources((prev) => {
        const newResources = prev.slice(0);
        newResources[1].amount += 3 * cell.level;
        newResources[3].amount -= 3 * cell.level;
        newResources[4].amount -= 1 * cell.level;
        newResources[0].amount -= 1 * cell.level;
        return newResources;
      });
    } else if (type === "wheat") {
      setResources((prev) => {
        const newResources = prev.slice(0);
        newResources[3].amount += 6 * cell.level;
        newResources[4].amount -= 1 * cell.level;
        newResources[0].amount -= 1 * cell.level;
        return newResources;
      });
    } else if (type === "wood") {
      setResources((prev) => {
        const newResources = prev.slice(0);
        newResources[0].amount += 4 * cell.level;
        newResources[3].amount -= 2 * cell.level;
        newResources[4].amount -= 1 * cell.level;
        newResources[1].amount -= 1 * cell.level;
        return newResources;
      });
    } else if (type === "brick") {
      setResources((prev) => {
        const newResources = prev.slice(0);
        newResources[2].amount += 4 * cell.level;
        newResources[3].amount -= 2 * cell.level;
        newResources[4].amount -= 2 * cell.level;
        newResources[1].amount -= 1 * cell.level;
        return newResources;
      });
    }
  };

  const onAddImprove = (index: number, cell: Cell) => {
    onAddChangeResources(cell.type!, cell);

    setCells((prev) => [
      ...prev.slice(0, index),
      cell,
      ...prev.slice(index + 1),
    ]);
  };

  return (
    <div className="App">
      <div className="backgroundImage"></div>
      <Header />
      <ResourcesView resources={resources} />
      <Map cells={cells} resources={resources} onAdd={onAddImprove} />
    </div>
  );
}

export default App;
