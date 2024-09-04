import React from "react";
import ReactDOM from "react-dom/client";
import '../index.css';

const styleCard = {
    backgroundColor: "#f0f0f0",
}

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