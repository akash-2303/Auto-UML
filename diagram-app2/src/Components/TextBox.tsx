import { useCallback } from "react";
import { Handle, Position } from "reactflow";

const handleStyle = { left: 10 };

function TextBox({ data, isConnectable }) {
  const onChange = useCallback((evt: any) => {
    console.log(evt.target.value);
  }, []);

  return (
    <div className="text-updater-node">
      <Handle
        id = "a"
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
        <input id="text" name="text" onChange={onChange} className="nodrag" defaultValue={"textbox"}/>
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

export default TextBox;
