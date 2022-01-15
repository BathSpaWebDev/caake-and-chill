import "./navbar.css"
import {Logo, CartIcon} from "./NavigationImages.jsx"
import { Header } from "./Header.jsx";

export const NavBar = (props) => {
    return(
        <nav className="nav-grid">
            <Logo className="logo-grid"/>
            <Header className="header-grid"/>
            <div className="nav-cart cart-grid">
                <div className="cart-container">
                    <div className="navigation-font">{props.title}</div>
                    <div className="flex-box">
                        <CartIcon/>
                        <div className="navigation-font">{props.total}</div>
                    </div>
                </div>
            </div>
            <input className="search-field search-grid" type="text" placeholder="Search..."></input>
        </nav>
    );
}