
import { ReactFlowProvider, Controls } from 'reactflow';
import Central_control from './Components/Central_control';
import UserForm from './Components/UserForm';
// import DownloadButton from './Components/DownloadButton'; // Make sure the path matches where you saved it

function Home() {
  return (
    <ReactFlowProvider>
      <div className="center">
        <div className="header">
          <h1 className="title">Auto UML</h1>
          <h2 className="subtitle animate__animated animate__fadeIN animate__delay-2s">Automatic UML Diagram Generator</h2>
        </div>
        {/* <div className="row justify-content-center">
          <h2>Auto UML - <i>Automatic UML Diagram Generator</i></h2>
        </div> */}
        <div className="row mt-5">
          <UserForm />
        </div>
        <div className="row mt-5">
          <div style={{ width: "100%", height: "580px" }} className="main_container">
            <Central_control />
            <Controls />
            
          </div>
        </div>
      </div>
    </ReactFlowProvider>
  );
}

export default Home;
