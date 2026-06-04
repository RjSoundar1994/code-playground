import { useContext } from "react";
import { useSelector } from "react-redux";

export default function Cart() {
    const cartItem = useSelector((state) => state.cartInfo)
    console.log('cartItem', cartItem)
    const count = cartItem.length;
    return (
        <div className="cart-icon">
            <div>
                <img src="./src/assets/cart-icon.webp" alt="Cart Icon" />
            </div>
            <div className="cart-count">
                <strong>{count}</strong>
            </div>
        </div>
    )
}