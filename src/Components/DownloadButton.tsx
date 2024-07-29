import React from 'react';
import { Button } from 'react-bootstrap';
import { useReactFlow } from 'reactflow';
import { toPng } from 'html-to-image';
import downloadIcon from '../assets/downloadbutton.png'; // Ensure this is the correct path to your image

function downloadImage(dataUrl) {
  const a = document.createElement('a');
  a.href = dataUrl;
  a.download = 'reactflow.png';
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
}

const imageWidth = 1024;
const imageHeight = 768;

const DownloadButton = () => {
  const { getNodes, project } = useReactFlow();

  const onClick = async () => {
    try {
      const nodes = getNodes();
      const nodePositions = nodes.map(node => ({ ...node, position: project(node.position) }));

      const dataUrl = await toPng(document.querySelector('.react-flow__viewport'), {
        backgroundColor: '#ffffff',
        width: imageWidth,
        height: imageHeight
      });

      downloadImage(dataUrl);
    } catch (error) {
      console.error('Failed to download the diagram:', error);
    }
  };

  return (
    <Button onClick={onClick} className="m-2">
      <img src={downloadIcon} alt="Download Diagram" className="button-img" />
    </Button>
  );
};

export default DownloadButton;
