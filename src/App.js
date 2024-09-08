import React from "react";
import ReactDOM from "react-dom/client";
import '../index.css';
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import Body from "./components/Body";
import About from "./Components/About";
import ContactUs from "./Components/ContactUs";

/**React Router */
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const AppLayout = () => {
    return (
        <div className="conatiner">
            <Header />
            <Body />
            <Footer />
        </div>
    );
}

const appRouter = createBrowserRouter([
    {
        path : "/",
        element: <AppLayout />
    },
    {
        path : "/about",
        element: <About />
    },
    {
        path : "/contact",
        element: <ContactUs />
    },
])

const root = ReactDOM.createRoot(document.getElementById("root"));

/** Using router Provider for every route */
root.render(<RouterProvider router={appRouter} />);
//  root.render(<AppLayout />); 