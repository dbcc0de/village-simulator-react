import { useState } from "react";
import ResourceLine from "./ResourceLine";
import "./ResourcesView.css";
import Resource from "../models/Resource";

interface Props {
  resources: Resource[];
}

const ResourcesView = ({ resources }: Props) => {
  //   function that updates a resource's amount
  // onEditAmount = (resource: Resource)

  return (
    <div className="ResourcesView">
      {resources.map((item, index) => (
        <ResourceLine resource={item} key={item.type} />
      ))}
    </div>
  );
};

export default ResourcesView;
