import { useContext } from "react";
import { useSelector } from "react-redux";
import CommonList from "../../components/shared/CommonList";
import Navbar from "../../layouts/navbar/Navbar";
export default function CartGrid() {
    let { ipaddress } = CommonList();
    const cartItem = useSelector((state) => state.cartInfo)
    return (
        <div >
            <Navbar />
            <div className="p-2">
                <h4>Cart items</h4>
                <div className="product-info">
                    Check each product page for other buying options.
                </div>

                {cartItem ? cartItem.map((item, index) => (
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
                                    <button className="goBack-button  link-active" >Remove</button>
                                </div>
                            </div>
                        </div>
                    </div>
                )) : <p>No products available in cart.</p>}

            </div>
        </div>
    )
}