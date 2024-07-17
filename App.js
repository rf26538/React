import React from 'react';
import ReactDOM from 'react-dom/client';
//Simple Structure

const heading = React.createElement("h1", {id:"heading", className:"heading"}, "Hi there");


//Nested Structure
const elem = React.createElement(
    "div",
    {id:"parent"},
    React.createElement(
        "div",
        {id:"child"},
        React.createElement(
            "h1",
            {id:"heading"},
            "Hello i am nested element"
        )
    ) 
);

//Complex and Ugly structure thats why we use Jsx

const elem2 = React.createElement(
    "div",
    {id:"parent"},
    [
        React.createElement("div",{id:"child"},
            [
                React.createElement( "h1",{id:"heading"},"THIS IS SPARTA"),
                React.createElement( "h1",{id:"heading"},"Test here element")
            ]
        ), 
        React.createElement("div",{id:"child2"},
        [
            React.createElement( "h1",{id:"heading"},"Hello i am 3rd elemet"),
            React.createElement( "h2",{id:"heading"},"Hello i am 4th element"),
            React.createElement( "h3",{id:"heading"},"Hello I AM HERE")
        ]
        ) 
    ]
);

console.log(elem2); //return object

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(elem2);