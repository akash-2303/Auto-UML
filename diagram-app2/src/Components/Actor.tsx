import { Handle, Position } from "reactflow";
import Actor_img from "../assets/Actor.png"

const handleStyle = { left: 10 };

function Actor({ data, isConnectable }) {

  return (
    <div className="text-updater-node">
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
      <div >
        <img src={Actor_img} className="img-fluid" alt="Actor"/><br/>
        <input id="text" name="text" className="nodrag" defaultValue={"Actor"}/>
      </div>
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
    </div>
  );
}

export default Actor;
