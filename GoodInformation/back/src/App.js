import React  from "react";
import ReactDOM from "react-dom/client";
import Header from "./componets/Header";
import Body from "./componets/Body";
import Footer from "./componets/Footer";

const AppLayout = () => {
    return (
        <>
           {<Header />}
           {<Body />}
           {<Footer /> }
        </>
    );
} 


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />)