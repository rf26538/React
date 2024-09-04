import React from "react";
import ReactDOM from "react-dom/client";
import '../index.css';
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import Body from "./components/Body";

const AppLayout = () => {
    return (
        <div className="conatiner">
            <Header />
            <Body />
            <Footer />
        </div>
    );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);