import "./App.css";
import ResourcesView from "./components/ResourcesView";
import Map from "./components/Map";
import { useState } from "react";
import Cell from "./models/Cell";
import Resource from "./models/Resource";
// import treeSolid from "./assets/tree-solid.svg";
// import cowSolid from "./assets/cow-solid.svg";
// import brickSolid from "./assets/trowel-bricks-solid.svg";
// import wheatSolid from "./assets/wheat-awn-solid.svg";
// import personSolid from "./assets/person-solid.svg";

function App() {
  const [resources, setResources] = useState([
    {
      icon: "http://localhost:3000/assets/tree-solid.svg",
      type: "Wood",
      amount: 12,
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
      amount: 10,
    },
    {
      icon: "http://localhost:3000/assets/house-solid.svg",
      type: "People",
      amount: 5,
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

  // also needs to edit the resource #s
  // if house, add benefits, subtract cost
  // formula for decrementing, resources * cell.level
  const onAddChangeResources = (type: string) => {
    if (type === "house") {
      setResources((prev) => {
        const newResources = prev.slice(0); // Just makes a copy.
        newResources[4].amount += 5;
        newResources[2].amount -= 3;
        newResources[0].amount -= 2;
        return newResources;
      });
    } else if (type === "cow") {
      setResources((prev) => {
        const newResources = prev.slice(0);
        newResources[1].amount += 3;
        newResources[3].amount -= 3;
        newResources[4].amount -= 1;
        newResources[0].amount -= 1;
        return newResources;
      });
    } else if (type === "wheat") {
      setResources((prev) => {
        const newResources = prev.slice(0);
        newResources[3].amount += 6;
        newResources[4].amount -= 1;
        newResources[0].amount -= 1;
        return newResources;
      });
    } else if (type === "wood") {
      setResources((prev) => {
        const newResources = prev.slice(0);
        newResources[0].amount += 4;
        newResources[3].amount -= 2;
        newResources[4].amount -= 1;
        newResources[1].amount -= 1;
        return newResources;
      });
    } else if (type === "brick") {
      setResources((prev) => {
        const newResources = prev.slice(0);
        newResources[2].amount += 4;
        newResources[3].amount -= 2;
        newResources[4].amount -= 2;
        newResources[1].amount -= 1;
        return newResources;
      });
    }
  };

  const onAddImprove = (index: number, cell: Cell) => {
    onAddChangeResources(cell.type!);

    setCells((prev) => [
      ...prev.slice(0, index),
      cell,
      ...prev.slice(index + 1),
    ]);
  };

  // const onEditResources = (resources: Resource) => {
  //   setResources((prev) => [
  //   ])
  // }

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
      <Map cells={cells} resources={resources} onAdd={onAddImprove} />
    </div>
  );
}

export default App;
