import ReactFlow,{ ReactFlowProvider,Controls } from "reactflow";
import Central_control from "./Components/Central_control";
import UserForm from "./Components/UserForm";

function App() {
  return (
    <ReactFlowProvider>
      <UserForm/>
      <div style={{width:1000,height:1000}}>
        <Central_control/>
      </div>
    </ReactFlowProvider>
  );
}

export default App