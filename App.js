import React from "react";
import ReactDOM from "react-dom/client";

const heading = React.createElement("h1", {id:"newId", className:"test"}, "Hello world!");
console.log(heading);
// JSX - html or Xml like syntax but not HTML or XML

const jsxHeading  = <h1 id="newId" className="test">Hello World! using JSX</h1>
const jsxHeading1  = (
            <h1 id="newId" className="test">
            Hello World! JSX in multi line
            </h1>
        );
console.log(jsxHeading);


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(jsxHeading1);