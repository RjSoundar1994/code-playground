import CommonList from "../../components/shared/CommonList";
import { useDispatch } from "react-redux";
import { addCart as addCartAction } from "../../components/redux/cartSlice"

export default function SingleProduct({ id, productId }) {
    let { itemLists, ipaddress } = CommonList();
    const item = itemLists?.find((i) => i.id === id);
    const dispatch = useDispatch();
    const setAddItem = (item) => {
        console.log('item', item)
        if (item) {
            dispatch(addCartAction(item));
        }
    }

    return (
        <div className="single-item d-flex">
            <div className="p-2">
                <img src={ipaddress + item.image} alt={item.name} className="single-item-image" />
            </div>
            <div className="p-2">
                <h3 className="single-item-name">{item.name}</h3>
                <p className="product-price">₹{item.price}</p>
                <p className="single-item-rating">Rating: {item.rating} ({item.reviews} reviews)</p>
                <div className="d-flex p-2">
                    <div className="mr-2">
                        <button className="add-to-cart-button link-active " onClick={() => setAddItem(item)}>Add to Cart</button>
                    </div>
                    <div>
                        <button className="goBack-button  link-active" onClick={() => productId('')}>Go Back</button>
                    </div>
                </div>
            </div>
        </div>
    )
}