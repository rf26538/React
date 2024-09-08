import {LOGO_URL} from "../utils/constants";
import { useState } from "react";

/** 
 * Do not use achor tag use this for navigation
 * This will do not let the page refresh
 *  */
import { Link } from "react-router-dom";

const Header = () => {
    const [btnName, setBtnName] = useState("login");
    return (
        <div className="header">
            <div>
                <img
                    className="logo"
                    src={LOGO_URL}></img>
            </div>
            <div className="nav-items">
                <ul>
                    <li>
                    <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/about">About Us</Link>
                    </li>
                    <li>
                        <Link to="/contact">Contact Us</Link>
                    </li>
                    <li>Cart</li>
                    <button className="login" onClick={() => {
                        btnName === "login" ? setBtnName("logout") : setBtnName("login");
                    }}>{ btnName }</button>
                </ul>
            </div>
        </div>
    );
};

export default Header;