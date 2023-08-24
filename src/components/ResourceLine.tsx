import Resource from "../models/Resource";
import "./ResourceLine.css";

interface Props {
  resource: Resource;
}

const ResourceLine = ({ resource }: Props) => {
  // will include various resources, their icon, type, and amount

  return (
    <div className="ResourceLine">
      <img src={resource.icon} alt={resource.type} />
      <p>{resource.type}</p>
      <p>{resource.amount}</p>
    </div>
  );
};

export default ResourceLine;
