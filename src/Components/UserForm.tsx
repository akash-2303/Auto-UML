import * as React from 'react';
import { Component } from 'react';

import { useState } from 'react';

// Loading config file
import config from "../config.json";

export default function UserForm(){
    const [input,setInput] = useState('')
    return(
        <div> 
            <label id="user_text_label" >Enter the description for your uml diagram</label>
            <input id="user_text" onChange={(e)=>{setInput(e.target.value)}}></input>
            <button onClick={()=>{
                alert(input)
                fetch(
                    config["SERVER_CONFIG"]["SERVER_URL"] + "/generate_graph?session_id=123&user_text="+input,
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


            }}>submit</button>
        </div>
    )

}