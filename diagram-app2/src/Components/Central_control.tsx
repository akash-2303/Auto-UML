import React, { useState, useCallback } from "react";
import ReactFlow, {
  ReactFlowProvider,
  useNodesState,
  useEdgesState,
  addEdge,
  useReactFlow,
  Panel,
} from "reactflow";
import "reactflow/dist/style.css";
import actor_img from "../assets/Actor.png";
import TextBox from "./TextBox";
import Actor from "./Actor";

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
const connectionLineStyle = { stroke: 'white' };
const flowKey = "example-flow";
let typeMap = { TextBox, Actor };

const getNodeId = (type) => `${type}_${+new Date()}`;

const Central_control = () => {
  const [nodes, setNodes, onNodesChange] = useNodesState([]);
  const [edges, setEdges, onEdgesChange] = useEdgesState([]);
  const [rfInstance, setRfInstance] = useState(null);
  const { setViewport } = useReactFlow();

  const onConnect = useCallback(
    (params) => setEdges((eds) => addEdge(params, eds)),
    [setEdges]
  );
  const onSave = useCallback(() => {
    if (rfInstance) {
      const flow = rfInstance.toObject();
      localStorage.setItem(flowKey, JSON.stringify(flow));
    }
  }, [rfInstance]);

  const onRestore = useCallback(() => {
    const restoreFlow = async () => {
      const flow = JSON.parse(localStorage.getItem(flowKey));

      if (flow) {
        const { x = 0, y = 0, zoom = 1 } = flow.viewport;
        setNodes(flow.nodes || []);
        setEdges(flow.edges || []);
        setViewport({ x, y, zoom });
      }
    };

    restoreFlow();
  }, [setNodes, setViewport]);

  const AddNode = (type) =>
    useCallback(() => {
      const newNode = {
        id: getNodeId(type),
        data: { label: "Added node" },
        position: {
          x: Math.random() * window.innerWidth - 100,
          y: Math.random() * window.innerHeight,
        },
        type: type,
      };
      setNodes((nds) => nds.concat(newNode));
    }, [setNodes]);

  return (
    <ReactFlow
      nodes={nodes}
      edges={edges}
      onNodesChange={onNodesChange}
      onEdgesChange={onEdgesChange}
      onConnect={onConnect}
      fitView
      style={{ backgroundColor: '#D3D2E5',}}
      defaultViewport={defaultViewport}
      connectionLineStyle={connectionLineStyle}
      nodeTypes={typeMap}
      onInit={setRfInstance}
    >
      <Panel position="top-right">
        <button onClick={onSave}>save</button>
        <button onClick={onRestore}>restore</button>
        <button onClick={AddNode("TextBox")} className="btn-add">
          <b>
            <i>T</i>
          </b>
        </button>
        <button onClick={AddNode("Actor")} className="btn-add">
          <img src={actor_img} className="button-img" />
        </button>
      </Panel>
    </ReactFlow>
  );
};

export default () => (
  <ReactFlowProvider>
    <Central_control />
  </ReactFlowProvider>
);
