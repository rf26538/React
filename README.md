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

    => Class based component - OLD way (No body uses now)