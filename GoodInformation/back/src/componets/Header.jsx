import { LOGO_URL } from "../utils/constents";
import { useState } from "react";

const Header  = () => {
    const [ btnName, setbtnName ] = useState("Login")

    return (
    <div className="header">
        <div className="logo-container">
            <img className="logo" src={LOGO_URL} />
        </div>
        <div className="nav-items">
            <ul>
                <li><a href="#">Home</a></li>
                <li><a href="#">About Us</a></li>
                <li><a href="#">Contact Us</a></li>
                <li><a href="#">Cart</a></li>
                <button className="login" onClick={() => {
                       btnName === "Login" ? setbtnName("logOut") : setbtnName("Login")  
                    }
                }>{ btnName }</button>
            </ul>
        </div>
    </div>
    );
}

export default Header; 