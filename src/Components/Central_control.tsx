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
import oval_png from "../assets/oval.png";
import TextBox from "./TextBox";
import Actor from "./Actor";
import Oval from "./Oval";
import { Button } from "react-bootstrap";

// Loading config file
import config from "../config.json";

const rfStyle = {
  backgroundColor: "#B8CEFF",
};

const defaultViewport = { x: 0, y: 0, zoom: 1.5, fitView: true };

const edgeOptions = {
  animated: true,
  style: {
    stroke: "white",
  },
};
const connectionLineStyle = { stroke: "white" };
let typeMap = { TextBox, Actor, Oval };

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
      console.log(flow);
      fetch(
        config["SERVER_CONFIG"]["SERVER_URL"] + "/save_session?session_id=123",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            "Access-Control-Allow-Origin": "*",
          },
          body: JSON.stringify({ graph: flow }),
        }
      )
        .then((res) => {
          console.log(res);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }, [rfInstance]);

  const onRestore = useCallback(() => {
    const restoreFlow = async () => {
      fetch(
        config["SERVER_CONFIG"]["SERVER_URL"] + "/get_session?session_id=123",
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            "Access-Control-Allow-Origin": "*",
          },
        }
      )
        .then((res) => res.json())
        .then((flow) => {
          console.log(flow);
          flow = flow.graph;
          if (flow) {
            const { x = 0, y = 0, zoom = 1 } = flow.viewport;
            setNodes(flow.nodes || []);
            setEdges(flow.edges || []);
            setViewport({ x, y, zoom });
          }
        })
        .catch((err) => {
          console.log(err);
        });
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
      style={{ backgroundColor: "#D3D2E5" }}
      defaultViewport={defaultViewport}
      connectionLineStyle={connectionLineStyle}
      nodeTypes={typeMap}
      onInit={setRfInstance}
    >
      <Panel position="top-right">
        <div className="d-md-flex p-3">
          <Button onClick={onSave} className="btn-success m-2">
            Save
          </Button>
          <Button onClick={onRestore} className="btn-primary m-2">
            Restore
          </Button>
          <Button
            onClick={AddNode("TextBox")}
            className="btn-add m-2 btn-warning"
          >
            <i>T</i>
          </Button>
          <Button
            onClick={AddNode("Actor")}
            className="btn-add btn-warning m-2"
          >
            <img src={actor_img} className="button-img" />
          </Button>
          <Button onClick={AddNode("Oval")} className="btn-add m-2 btn-warning">
            <img src={oval_png} className="button-img" />
          </Button>
        </div>
      </Panel>
    </ReactFlow>
  );
};

export default () => (
  <ReactFlowProvider>
    <Central_control />
  </ReactFlowProvider>
);
