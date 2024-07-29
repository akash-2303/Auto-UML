import { useCallback, memo } from "react";
import { Handle, Position, NodeResizer } from "reactflow";

// Define the type for the 'data' prop
interface Data {
  // Example property, adjust according to actual usage
  text: string;
}

// Define the type for the component's props
interface TextBoxProps {
  data: Data;
  isConnectable: boolean;
}

function TextBox({ data, isConnectable }: TextBoxProps) {
  const onChange = useCallback((evt: React.ChangeEvent<HTMLInputElement>) => {
    console.log(evt.target.value);
  }, []);

  return (
    <>
      <NodeResizer minWidth={100} minHeight={30} />
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
        isConnectable={isConnectable}
      />
      <input name="text" onChange={onChange} defaultValue={data.text} />
      <Handle
        type="target"
        position={Position.Left}
        id="c"
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