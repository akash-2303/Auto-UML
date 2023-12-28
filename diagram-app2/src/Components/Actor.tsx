import { Handle, Position,NodeResizer } from "reactflow";
import Actor_img from "../assets/Actor.png"
import { memo } from "react";
const handleStyle = { left: 10 };

function Actor({ data, isConnectable, selected }) {

  return (
    <>
      <NodeResizer color="#ff0071" isVisible={selected}/>
      <Handle
        id= "a"
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
      <img src={Actor_img} className="img-fluid" alt="Actor" height="100%" width="100%" object-fit:fill/><br/>
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
}

export default memo(Actor);
