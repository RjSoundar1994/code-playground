import { useState } from "react";
import ProductCard from "./ProductCard";
import SingleProduct from "./SingleProduct";


export default function ProductGrid() {
    const [productViewState, setProductViewState] = useState("");
    
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
                    <ProductCard onSend={setProductViewState} />
                )}
            </div>
        </div>
    )
}