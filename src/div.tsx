import { ReactFlowProvider } from "reactflow";
import Central_control from "./Components/Central_control";
import UserForm from "./Components/UserForm";

function Div(){
    return (
        <ReactFlowProvider>
        <div className="center">
          <div className="row justify-content-center">
            <h2>
              Auto UML - <i>Automatic UML Diagram Generator</i>
            </h2>
          </div>
          <div className="row mt-5">
            <UserForm />
          </div>
          <div className="row mt-5">
            <div
              style={{ width: "100%", height: "580px", padding: "0px" }}
              className="main_container"
            >
              <Central_control />
            </div>
          </div>
        </div>
      </ReactFlowProvider>
    );
}

export default Div;