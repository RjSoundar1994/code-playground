export default function Cart({ items = [] }) {
    console.log("Cart Items in Cart Component:", items);
    const count = items.length;

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