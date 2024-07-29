import { Handle, Position, NodeResizer } from "reactflow";
// import Actor_img from "../assets/Actor.png";
import { FC, memo } from "react";

interface Data {
  label: string;
  // Add other properties of 'data' here
}

// Define the type for the component's props
interface OvalProps {
  data: Data;
  isConnectable: boolean;
  selected: boolean;
}

// const handleStyle = { left: 10 };

const Oval: FC<OvalProps> = ({ data, isConnectable, selected }) => {
  return (
    <>
      <NodeResizer color="#ff0071" isVisible={selected} />
      <Handle
        id="a"
        type="target"
        position={Position.Top}
        isConnectable={isConnectable}
      />
      <Handle
        type="source"
        position={Position.Right}
        id="b"
        // style={handleStyle}
        isConnectable={isConnectable}
      />
      <label htmlFor="text">{data.label}</label>
      <div id="oval" />
      <br />
      <Handle
        type="target"
        position={Position.Left}
        id="c"
        // style={handleStyle}
        isConnectable={isConnectable}
      />

      <Handle
        type="source"
        position={Position.Bottom}
        id="d"
        isConnectable={isConnectable}
      />
    </>
  );
};

export default memo(Oval);





