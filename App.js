import React from "react";
import ReactDOM from "react-dom/client";

/**
 * Js is mix of javascript and html
 * Components inside a component is called component composition
 * {} we can write any javasript code inside the curly barces
 */


const Title = () => (
    <div className="newComp" id="he">
        <h3>{10*1000}</h3>
        <h2>I am new comp</h2>
    </div>
)

const element = (
    <h3>Add element</h3>
)
const data  = "new data";
const data1  = 58112;
const HeadingComponent = () => (
    <div className="test">
        {element}
        <Title />
        <h1 id="tes">React Javascript</h1>
        <p>{data} {data1}</p>
    </div>  
)

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<HeadingComponent />);