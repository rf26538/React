import { LOGO_URL } from "../utils/constents";
const Header  = () => {
    return (
    <div className="header">
        <div className="logo-container">
            <img className="logo" src={LOGO_URL} />
        </div>
        <div className="nav-items">
            <ul>
                <li><a href="#">login</a></li>
                <li><a href="#">Signup</a></li>
                <li><a href="#">Cart</a></li>
            </ul>
        </div>
    </div>
    );
}

export default Header; 