import { useSelector, useDispatch } from "react-redux";
import CommonInfo from "../../shared/CommonInfo";
import TopNav from "../../../layouts/TopNav";
import { removeCartCase } from "../../../hooks/storeSlice"

export default function CartItem() {
    let { ipaddress } = CommonInfo();
    const cartItem = useSelector((state) => state.amazonInfo.cartInfo)
    const dispatch = useDispatch();
    function setRemoveItem(item) {
        console.log('remove item', item)
        if (item) {
            dispatch(removeCartCase(item))
        }
    }
    return (
        <div >
            <TopNav />
            <div className="p-2">
                <h4>Shopping Cart</h4>

                {cartItem.length > 0 ? cartItem.map((item, index) => (
                    <div className="single-item d-flex">
                        <div className="p-2 max-height-250">
                            <img src={ipaddress + item.image} alt={item.name} className="single-item-image" />
                        </div>
                        <div className="p-2">
                            <h3 className="single-item-name">{item.name}</h3>
                            <p className="product-price">₹{item.price}</p>
                            <p className="single-item-rating">Rating: {item.rating} ({item.reviews} reviews)</p>
                            <div className="d-flex p-2">
                                <div className="mr-2">
                                    <button className="add-to-cart-button link-active " >Buy</button>
                                </div>
                                <div>
                                    <button className="goBack-button  link-active" onClick={() => setRemoveItem(item)}>Remove</button>
                                </div>
                            </div>
                        </div>
                    </div>
                )) : <p>No products available in cart.</p>}
            </div>
        </div>
    )
}