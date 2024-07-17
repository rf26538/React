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