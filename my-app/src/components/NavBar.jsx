import "./navbar.css"
import {Logo, CartIcon} from "./NavigationImages.jsx"
import { Header } from "./Header.jsx";

export const NavBar = (props) => {
    return(
        <nav className="navigation-container">
            <Logo className="logo" />
            <div className="header-position"><Header /></div>
            <input className="search-field" type="text" placeholder="Search..."/>
            <div className="cart-container">
                <div>{props.title}</div>
                <div className="cart-box">
                    <CartIcon />
                    <div>£{props.total}</div>
                </div>
            </div>
        </nav>
    );
}
