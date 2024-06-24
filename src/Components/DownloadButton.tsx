import { useReactFlow } from 'reactflow';
import { toPng } from 'html-to-image';

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

function DownloadButton() {
  const { getNodes, project } = useReactFlow();

  const onClick = async () => {
    try {
      const nodes = getNodes();
      const nodePositions = nodes.map(node => ({ ...node, position: project(node.position) }));

      // Convert node positions to a PNG
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
    <button onClick={onClick} style={{ position: 'absolute', right: 20, top: 20 }}>
      Download Image
    </button>
  );
}

export default DownloadButton;
