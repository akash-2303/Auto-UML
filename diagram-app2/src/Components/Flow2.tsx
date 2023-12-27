import { useCallback, useState } from 'react';
import ReactFlow, {ReactFlowProvider,useReactFlow} from 'reactflow';
import 'reactflow/dist/style.css';

let nodeId = 0;
let typeMap = {"spawntext":"textbox","spawnactor":"actor"}

export default function Flow2() {
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
        add Text Box
      </button>
      <button onClick={onClick("spawnactor")} className="btn-add">
        add Actor
      </button>
    </>
  );
}
