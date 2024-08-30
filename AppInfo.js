import React from "react";
import ReactDOM from "react-dom/client";

/**
 * Creating an element a core thing in react
 * For rendering it is job of react dom
 * */

const heading1 = React.createElement(
    "div",                                   // We use this place for tags
    {id:"parent", className:"parent"},       // We use this to give attributes to our tags
    "I am child"                            // We use this for content
);

/**
 * We can do nesting like this 
 * <div id="parent">
 *      <div id="child">
 *          I am child
 *      </div>
 * </div>
 * */
const heading2 = React.createElement(
    "div",                               
    {id:"parent", className:"parent"},  
    React.createElement(
        "div",
        {id:"child", className:"child"},
        "I am child"
    )                         
);

/**
 * We can do nesting and add siblings like this 
 * <div id="parent">
 *      <div id="child">
 *          <h1>I am child 1</h1> --> siblings
 *          <h1>I am child 2</h1> --> siblings
 *      </div>
 * </div>
 * */
const heading3 = React.createElement(
    "div",                               
    {id:"parent", className:"parent"},  
    React.createElement(
        "div",
        {id:"child", className:"child"},
        [
            React.createElement("h1", {id:"childone", className:"childone"}, "I am child one"),
            React.createElement("h1", {id:"childtwo", className:"childtwo"}, "I am child two"),
        ]
    )                         
);

/**
 * We can do nesting and add siblings like this 
 * <div id="parent">
 *      <div id="child">
 *          <h1>I am child 1</h1> --> siblings
 *          <h1>I am child 2</h1> --> siblings
 *      </div>
 * </div>
 * */
const heading = React.createElement(
    "div",                               
    {id:"parent", className:"parent"}, [
        React.createElement(
            "div",
            {id:"child", className:"child"},
            [
                React.createElement("h1", {id:"childone", className:"childone"}, "I am child one"),
                React.createElement("h2", {id:"childtwo", className:"childtwo"}, "I am child two"),
            ]
        ) ,                       
        React.createElement(
            "div",
            {id:"child2", className:"child2"},
            [
                React.createElement(
                    "h3", 
                    {id:"childthree", className:"childthree"}, 
                    [
                        React.createElement("p", {id:"childpara", className:"childpara"}, "I am paragraph"),
                        React.createElement("p", {id:"childpara", className:"childpara"}, "I am paragraph")
                    ]
                ),
                React.createElement("h4", {id:"childfour", className:"childfour"}, "I am child weww"),
            ]
        )                         

    ]
);

/**
 * React Element
 * we can render it like this
 * console.log(heading);
 * const root = ReactDOM.createRoot(document.getElementById("root"));
 * root.render(header5); 
 *  */ 
const header5 = (
    <h1>Testing element</h1>
)

/**
 * React functional component
 * we can render it like this
 * console.log(HeadingComponenet);
 * const root = ReactDOM.createRoot(document.getElementById("root"));
 * root.render(<HeadingComponenet/>);
 *  */ 

const HeadingComponenet = () => {
    <div>
        <h1>Teasing functional component</h1>
    </div>
}


/**
 * Js is mix of javascript and html
 * Components inside a component is called component composition
 * {} we can write any javasript code inside the curly barces
 * Add elements to components with the help of curly braces
 * const root = ReactDOM.createRoot(document.getElementById("root"));
 * root.render(<HeadingComponent />);
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
