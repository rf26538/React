import React  from "react";
import ReactDOM from "react-dom/client";

const Header  = () => {
    return (
    <div className="header">
        <div className="logoContainer">
            <img className="logo" src="https://www.logodesign.net/logo/smoking-burger-with-lettuce-3624ld.png" />
        </div>
        <div className="navItems">
            <ul>
                <li><a href="#">login</a></li>
                <li><a href="#">Signup</a></li>
                <li><a href="#">Cart</a></li>
            </ul>
        </div>
    </div>
    );
}

const Card = () => {
    return (
        <>
            <div class="Card2 ph2">
                <div class="overlay">
                    <h2 class="title">Card Title</h2>
                    <a class="link" href="//s.codepen.io/ImagineAlex">Open</a>
                </div>
            </div>
        </>
    );
}

const Body = () => {
    return (
        <>
        {<Card/>}
        {<Card/>}
        {<Card/>}
        {<Card/>}
        {<Card/>}
        {<Card/>}
        {<Card/>}
        {<Card/>}
        </>
    );
}

const Footer  = () => {

}

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