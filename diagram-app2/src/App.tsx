import ReactFlow,{ ReactFlowProvider,Controls } from "reactflow";
import Flow from "./Components/Flow";
import TextBox from './Components/TextBox';
import Actor from "./Components/Actor";
const rfStyle = {
  backgroundColor: '#B8CEFF',
};

const defaultViewport = { x: 0, y: 0, zoom: 1.5, fitView: true };

const edgeOptions = {
  animated: true,
  style: {
    stroke: 'white',
  },
};


const nodeTypes = { textbox: TextBox, actor: Actor };
const connectionLineStyle = { stroke: 'white' };

function App() {
  return (
    <ReactFlowProvider>
    <div style={{width:500,height:500}}>
      <ReactFlow
        defaultNodes={[]}
        defaultEdges={[]}
        defaultEdgeOptions={edgeOptions}
        fitView
        style={{
          backgroundColor: '#D3D2E5',
        }}
        defaultViewport={defaultViewport}
        connectionLineStyle={connectionLineStyle}
        nodeTypes={nodeTypes}
      />
      
      <Flow/>  
    </div>
    </ReactFlowProvider>
  );
}

export default App