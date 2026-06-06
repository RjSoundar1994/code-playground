import { useContext } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

export default function Cart() {
    const cartItem = useSelector((state) => state.cartInfo)
    console.log('cartItem', cartItem)
    const count = cartItem.length;
    return (
        <div className="cart-icon">
            <div>
               <Link to="/cart"><img src="./src/assets/cart-icon.webp" alt="Cart Icon" /></Link>
            </div>
            <div className="cart-count">
                <strong>{count}</strong>
            </div>
        </div>
    )
}