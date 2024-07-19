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

const HeadingComponent = () => <span id="newId" className="test">Functional Javaiscipt first component</span>;

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

const Title = () => (
        <h1 id="newId" className="test">New convention to show method</h1>
);
const Info = () => (
    <h1 id="newId" className="test">Calling a function</h1>     
);
// With the help of cully braces  {} any js expression in it

// const SupposedtestApiData = api.getData();
// Jsx ecape the malicious code

const number = 39;
const HeadingComponent4 = () => (
    <div id="container">
        <h1>{number * 7 + 32 -33}</h1>
        <h1>{console.log(number)}</h1>
        {<HeadingComponent/>}
        {<HeadingComponent3/>}
        {/* New Convantion to write title */}
        <Title></Title>
        <Title></Title>
        {Info()}
        <h1 id="newId" className="test">Functional Javaiscipt third component</h1>
    </div>
);

// Class based component - OLD way (No body uses now)

const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(jsxHeading);

//Call functional component - bable

root.render(<HeadingComponent4 />);