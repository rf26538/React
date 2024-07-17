                --- PARCEL ---
    => Parce is doing HMR(hot module refreshment) when changes in code. 
    => It uses file watching algorithum which is written in c++.
    => Caching for everything we are doing in codes.
    => Do image optimization.
    => minification
    => Bundling
    => Compress
    => Consistence hashing
    => Code spliting
    => Diffrential bundlling - support older browsers
    => Dignostics
    => Error Handling
    => Https
    => Tree shaking - remove unused code for you
    => diffrent build for dev and production

                --- NOT PREFERED WAY --
    <script crossorigin src="https://unpkg.com/react@18/umd/react.development.js"></script>
    <script crossorigin src="https://unpkg.com/react-dom@18/umd/react-dom.development.js"></script>


    --- SETUP BROWSER LIST IN PAKAGE.JSON ---

    => It will pull extra code.
    
     "browserslist": [
        "last 2 Chrome version",
        "last 2 FIrefox version",
        "last 2 version"
    ]

        --- SETUP SCRIPT --

    => initialy We are running "npx parcel index.html"
    => after setup the project in the PACKAGE.JSON
    We can run now "npm start" || "npm run start" (note both are same)

    JSX - html or Xml like syntax but not HTML or XML

    Ex:- 
<!-- Both are similar and their log are also similer "object" -->

    const heading = React.createElement("h1", {id:"newId", className:"test"}, "Hello world!");
    console.log(heading);
    -> ReactElememnt-JS Object => HTMLElement(resnder)

            --- JSX ---
    const jsxHeading  = <h1 id="newId" className="test">Hello World! JSX</h1>
    console.log(jsxHeading);
    -> Transpile before going to js engine by using parcel -> babel.
    -> Atrributes will be camelCase
    -> if we are using it in single line wrap it with ()
    Ex:-
        const jsxHeading  = (<h1 id="newId" className="test">
                Hello World! JSX
                </h1>);
        console.log(jsxHeading);

            --- REACT COMPONENT ---
    => Functional component - NEW way 
        -> Normal javascipt function which return some JSX
        -> Always write the function name with Capital latter 
            Hello()
        -> Component Composition - Put component inside component.

        Ex:-
            const HeadingComponent = () => <h1 id="newId" className="test">Functional Javaiscipt first component</h1>;

            const HeadingComponent2 = () => {
                return <h1 id="newId1" className="test">Functional Javaiscipt second component</h1>;
            }

            const HeadingComponent3 = () => (
                <div id="container">
                    <HeadingComponent />
                    <HeadingComponent2 />
                    <h1 id="newId" className="test">Functional Javaiscipt third component</h1>
                </div>
            );

        -> With the help of cully braces  {} any js expression in it

        Ex:-
            const number = 39;
            const HeadingComponent4 = () => (
                <div id="container">
                    <h1>{number * 7 + 32 -33}</h1>
                    <h1>{console.log(number)}</h1>
                    <h1>{HeadingComponent}</h1>
                    <h1 id="newId" className="test">Functional Javaiscipt third component</h1>
                </div>
            );

    => Class based component - OLD way (No body uses now)