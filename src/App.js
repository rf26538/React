import React from "react";
import ReactDOM from "react-dom/client";
import '../index.css';
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import Body from "./Components/Body";
import About from "./Components/About";
import ContactUs from "./Components/ContactUs";
import Error from "./Components/Error";

/**React Router */
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";

const AppLayout = () => {
    return (
        <div className="conatiner">
            <Header />
            <Outlet />
            {/* <Footer /> */}
        </div>
    );
}

// const appRouter = createBrowserRouter([
//     {
//         path : "/",
//         element: <AppLayout />,
//         errorElement : <Error />
//     },
//     {
//         path : "/about",
//         element: <About />
//     },
//     {
//         path : "/contact",
//         element: <ContactUs />
//     },
// ])

/**Children Routing to change only body not header also */

const appRouter = createBrowserRouter([
    {
        path : "/",
        element: <AppLayout />,
        children: [
            {
                path: "/",
                element: <Body />
            },
            {
                path : "/about",
                element: <About />
            },
            {
                path : "/contact",
                element: <ContactUs />
            },
        ],
        errorElement : <Error />
    }
])

const root = ReactDOM.createRoot(document.getElementById("root"));

/** Using router Provider for every route */
root.render(<RouterProvider router={appRouter} />);
//  root.render(<AppLayout />); 