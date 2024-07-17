import React from "react";
import ReactDOM from "react-dom/client";

const heading = React.createElement("h1", {id:"newId", className:"test"}, "Hello world!");
console.log(heading);
// JSX - html or Xml like syntax but not HTML or XML

const jsxHeading  = <h1 id="newId" className="test">Hello World! using JSX</h1>
const jsxHeading1  = (
            <h1 id="newId" className="test" tabIndex="5">
            Hello World! JSX in multi line
            </h1>
        );
console.log(jsxHeading);
console.log(jsxHeading1);

// React Component
// Functional component - NEW way
const fn = () => true;

const fn2 = () => {
    return true;
}

const HeadingComponent = () => <h1 id="newId" className="test">Functional Javaiscipt first component</h1>;

const HeadingComponent2 = () => {
    return <h1 id="newId1" className="test">Functional Javaiscipt second component</h1>;
}

// Component Composition - Put component inside component below example is

const HeadingComponent3 = () => (
    <div id="container">
        <HeadingComponent />
        <HeadingComponent2 />
        <h1 id="newId" className="test">Functional Javaiscipt third component</h1>
    </div>
);

// Class based component - OLD way (No body uses now)

const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(jsxHeading);

//Call functional component - bable

root.render(<HeadingComponent3/>);