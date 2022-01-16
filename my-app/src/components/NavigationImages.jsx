import cartIcon from "./shopping_cart_black_24dp.svg";
import cakeIcon from "./cake_black_24dp.svg";
import moviesIcon from "./movies.svg";
import "../components/navbar.css"

export const CartIcon = () => {
    return(
        <img className="cart-icon" src={cartIcon} alt="shopping cart"/>
    );
}

export const Logo = () => {
    return(
        <div className="logo">
            <img className="icons-size" src={moviesIcon} alt="movies icon"/>
            <img className="icons-size" src={cakeIcon} alt="cake icon"/>
        </div>
    );
}