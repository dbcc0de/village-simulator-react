import Resource from "../models/Resource";
import "./ResourceLine.css";

interface Props {
  resource: Resource;
}

const ResourceLine = ({ resource }: Props) => {
  // will include various resources, their icon, type, and amount
  return (
    <div className="ResourceLine">
      <p>{resource.type}</p>
      <p>{resource.amount}</p>
    </div>
  );
};

export default ResourceLine;
