import { useCallback } from "react";
import { Handle, Position,NodeResizer } from "reactflow";
import { memo } from 'react';

const handleStyle = { left: 10 };

function TextBox({ data, isConnectable}) {
  const onChange = useCallback((evt: any) => {
    console.log(evt.target.value);
  }, []);

  return (
    <>
      <NodeResizer minWidth={100} minHeight={30} />
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
      <input name="text" onChange={onChange} defaultValue={"textbox"} />
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

export default memo(TextBox);
