
import { useState } from "react";
import {
  ReactFlowProvider,
  useNodesState,
  useEdgesState,
  Controls,
} from "reactflow";
import Central_control from "./Components/Central_control";
import UserForm from "./Components/UserForm";
// import DownloadButton from "./Components/DownloadButton"; // Make sure the path matches where you saved it

function Home() {
  const [nodes, setNodes, onNodesChange] = useNodesState([]);
  const [edges, setEdges, onEdgesChange] = useEdgesState([]);
  const [rfInstance, setRfInstance] = useState(null);
  const [viewPort, setViewPort] = useState({
    x: 0,
    y: 0,
    zoom: 1.5,
    fitView: true,
  });
  return (
    <ReactFlowProvider>
      <div className="center">
        <div className="header">
          <h1 className="title">Auto UML</h1>
          <h2 className="subtitle animate__animated animate__fadeIN animate__delay-2s">
            Automatic UML Diagram Generator
          </h2>
        </div>
        {/* <div className="row justify-content-center">
          <h2>Auto UML - <i>Automatic UML Diagram Generator</i></h2>
        </div> */}
        <div className="row mt-5">
          <UserForm
            nodes={nodes}
            setNodes={setNodes}
            onNodesChange={onNodesChange}
            edges={edges}
            setEdges={setEdges}
            onEdgesChange={onEdgesChange}
            rfInstance={rfInstance}
            setRfInstance={setRfInstance}
            viewPort={viewPort}
            setViewPort={setViewPort}
          />
        </div>
        <div className="row mt-5">
          <div
            style={{ width: "100%", height: "580px" }}
            className="main_container"
          >
            <Central_control
              nodes={nodes}
              setNodes={setNodes}
              onNodesChange={onNodesChange}
              edges={edges}
              setEdges={setEdges}
              onEdgesChange={onEdgesChange}
              rfInstance={rfInstance}
              setRfInstance={setRfInstance}
              viewPort={viewPort}
              setViewPort={setViewPort}
            />
            <Controls />
          </div>
        </div>
      </div>
    </ReactFlowProvider>
  );
}

export default Home;
