import "./App.css";
import ResourcesView from "./components/ResourcesView";
import Map from "./components/Map";
import { useState } from "react";

function App() {
  const [resources, setResources] = useState([
    { icon: "", type: "Wood", amount: 12 },
    { icon: "", type: "Sheep", amount: 3 },
    { icon: "", type: "Brick", amount: 6 },
    { icon: "", type: "Wheat", amount: 10 },
    { icon: "", type: "People", amount: 5 },
  ]);

  // 24 cells with specific info
  const [cells, setCells] = useState([
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
      <Map cells={cells} />
    </div>
  );
}

export default App;
