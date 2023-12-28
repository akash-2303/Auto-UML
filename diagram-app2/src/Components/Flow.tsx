import { useCallback, useState } from 'react';
import ReactFlow, {ReactFlowProvider,useReactFlow} from 'reactflow';
import 'reactflow/dist/style.css';
import actor_img from "../assets/Actor.png"

let nodeId = 0;
let typeMap = {"spawntext":"textbox","spawnactor":"actor"}

export default function Flow() {
  const reactFlowInstance = useReactFlow();
  const onClick = (id) => useCallback(() => {
    const Nid = `${++nodeId}`;
    const newNode = {
      id: Nid,
      position: {
        x: Math.random()*100,
        y: Math.random()*100,
      },
      data: {
        label: `Node ${Nid}`,
      },
       type : typeMap[id]
    };
    reactFlowInstance.addNodes(newNode);
    
  }, []);

  return (
    <>
      <button onClick={onClick("spawntext")} className="btn-add">
        <b><i>T</i></b>
      </button>
      <button onClick={onClick("spawnactor")} className="btn-add">
        <img src = {actor_img} className="button-img"/>
      </button>
    </>
  );
}