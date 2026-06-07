import CommonInfo from "../../../shared/CommonInfo";
import { useDispatch } from "react-redux";
import { addCartCase } from "../../../../hooks/storeSlice"

export default function ProductCard({ onSend }) {
    let { itemLists, ipaddress } = CommonInfo();
    const dispatch = useDispatch();

    const goToProduct = (id) => {
        console.log("Go to product with ID:", id);
        onSend(id);
    };

    const setAddItem = (item) => {
        console.log('item', item)
        if (item) {
            dispatch(addCartCase(item));
        }
    }


    return (
        <div>
            <ul className="product-item-container">
                {itemLists ? itemLists.map((item, index) => (
                    <li className="product-item" key={item.id}>
                        <div className="product-image" >
                            <img className="link-active" src={ipaddress + item.image} alt={item.name} onClick={() => goToProduct(item.id)} />
                        </div>
                        <h3 className="producat-name link-active" onClick={() => goToProduct(item.id)}>
                            {item.name}
                        </h3>
                        <p className="product-price mb-0">Price: ${item.price.toLocaleString()}</p>
                        <p className="product-rating">Rating: {item.rating} ({item.reviews} reviews)</p>
                        <button className="add-to-cart-button" onClick={()=> setAddItem(item)}>Add to Cart</button>
                    </li>
                )) : <p>No products available.</p>}
            </ul>
        </div>
    )
}