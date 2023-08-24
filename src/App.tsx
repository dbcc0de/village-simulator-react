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

  return (
    <div className="App">
      {/* ResourcesView */}
      <ResourcesView resources={resources} />
      {/* Map */}
      <Map />
    </div>
  );
}

export default App;
