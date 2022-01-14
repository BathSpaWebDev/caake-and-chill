import "./navbar.css"
import {Logo, CartIcon} from "./NavigationImages.jsx"
import { Header } from "./Header.jsx";

export const NavBar = (props) => {
    return(
        <nav className="box">
            <Logo/>
            <Header />
            <div>
            <div className="nav-cart">
                <div className="cart-container">
                    <div className="navigation-font">{props.title}</div>
                    <div className="flex-box">
                        <CartIcon/>
                        <div className="navigation-font">{props.total}</div>
                    </div>
                </div>

            </div>
                <input className="search-field" type="text" placeholder="Search..."></input>
            </div>
        </nav>
    );
}