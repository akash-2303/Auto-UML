import * as React from "react";
import { useState } from "react";

import Button from "react-bootstrap/Button";
import { Form } from "react-bootstrap";

// Loading config file
import config from "../config.json";

export default function UserForm() {
  const [input, setInput] = useState("");
  return (
    <div className="d-md-flex justify-content-center">
      <div className="col-5">
        <Form.Control
          id="user_text"
          onChange={(e) => {
            setInput(e.target.value);
          }}
          type="text"
          placeholder="Enter the description of your project"
        ></Form.Control>
      </div>
      <div className="col-2">
        <Button
          onClick={() => {
            alert(input);
            fetch(
              config["SERVER_CONFIG"]["SERVER_URL"] +
                "/generate_graph?session_id=123&user_text=" +
                input,
              {
                method: "POST",
                headers: {
                  "Content-Type": "application/json",
                  "Access-Control-Allow-Origin": "*",
                },
              }
            )
              .then((res) => {
                console.log(res);
              })
              .catch((err) => {
                console.log(err);
              });
          }}
        >
          Submit
        </Button>
      </div>
    </div>
  );
}
