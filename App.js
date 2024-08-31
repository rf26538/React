import React from "react";
import ReactDOM from "react-dom/client";
import './index.css';

const styleCard = {
    backgroundColor : "#f0f0f0",
}

const Header = () => {
    return (
        <div className="header">
            <div>
                <img 
                className="logo"
                src="https://images-platform.99static.com/A_Ax0GQuo_NHI0Y7XZHmFtGfBDY=/0x0:1000x1000/500x500/top/smart/99designs-contests-attachments/126/126252/attachment_126252018"></img>
            </div>
            <div className="nav-items">
                <ul>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Contact Us</li>
                    <li>Cart</li>
                </ul>
            </div>
        </div>
    );
}

/**
 * We can destructure props like this
 * const Card = ({resName, cusine, rating, time}) => { return (<h4>{cusine}</h4>) }
 */

const Card = (props) => {
    return (
        <div className="res-card" style={styleCard}>
            <img
            className="res-logo"
             src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/RX_THUMBNAIL/IMAGES/VENDOR/2024/8/9/1d6a4dbe-8836-4bad-9733-ccf51912067a_90170.jpg" alt="res-logo"></img>
            <h3>{props.resName}</h3>
            <h4>{props.cusine}</h4>
            <h4>{props.rating}stars</h4>
            <h4>{props.time} minutes</h4>
        </div>
    );
}

const Body = () => {
    return (
        <div className="body">
            <div className="search">Search</div>
            <div className="res-container">
                <Card resName="Megha Foods" rating="4.2" time="30" cusine="Biryani, Asian "/>
                <Card resName="KFC" rating="4.0" time="42" cusine="Asian"/>
            </div>
        </div>
    );
}

const Footer = () => {
    return (
        <div className="Footer">
            <footer className="foot">
                <div className="company-info">
                    <span className="companey-text">© 2022 Company, Inc</span>
                </div>
            </footer>
        </div>
    )
}

const AppLayout = () => {
    return (
        <div className="conatiner">
           <Header/>
           <Body/>
           <Footer/>
        </div>
    );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);