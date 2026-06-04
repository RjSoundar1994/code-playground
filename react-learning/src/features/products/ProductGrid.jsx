import { useState } from "react";
import ProductCard from "./ProductCard";
import SingleProduct from "./SingleProduct";
import Cart from "../../layouts/navbar/Cart";

export default function ProductGrid() {
    const [productViewState, setProductViewState] = useState("");
    const [cardItem, setCardItem] = useState([]);
    const addCard = (item) => {
        console.log('item', item)
        setCardItem((prevItems) => [...prevItems, item]);
        // Cart(cardItem);
    }
    console.log("Card Items:", cardItem);

    return (
        <div>
            <h4>Results</h4>
            <div className="product-info">
                Check each product page for other buying options.
            </div>
            <div>
                {productViewState ? (
                    <SingleProduct id={productViewState} productId={setProductViewState} />
                ) : (
                    <ProductCard onSend={setProductViewState} addCard={addCard} />
                )}
            </div>
        </div>
    )
}