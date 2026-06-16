import { useSelector, useDispatch } from 'react-redux';
import { removeFromCart } from '../../../hooks/storeSlice';
import CommonInfo from '../../shared/CommonInfo';
import TopNav from '../../../layouts/TopNav';

export default function CartItem() {
  const { ipaddress } = CommonInfo();
  const cartItems = useSelector((state) => state.amazonInfo.cartInfo);
  const dispatch = useDispatch();

  const total = cartItems.reduce((sum, item) => sum + item.price, 0);

  return (
    <div>
      <TopNav />
      <div className="p-2">
        <h4>Shopping Cart</h4>

        {cartItems.length === 0 ? (
          <p>Your cart is empty.</p>
        ) : (
          <>
            {cartItems.map((item) => (
              <div key={item.id} className="single-item d-flex">
                <div className="p-2 max-height-250">
                  <img src={ipaddress + item.image} alt={item.name} className="single-item-image" />
                </div>
                <div className="p-2">
                  <h3 className="single-item-name">{item.name}</h3>
                  <p className="product-price">₹{item.price.toLocaleString('en-IN')}</p>
                  <p className="single-item-rating">
                    ⭐ {item.rating} ({item.reviews.toLocaleString()} reviews)
                  </p>
                  <div className="d-flex p-2">
                    <div className="mr-2">
                      <button className="add-to-cart-button link-active">Buy Now</button>
                    </div>
                    <div>
                      <button
                        className="goBack-button link-active"
                        onClick={() => dispatch(removeFromCart(item))}
                      >
                        Remove
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}

            <div className="cart-total mt-3 p-2">
              <strong>
                Subtotal ({cartItems.length} item{cartItems.length !== 1 ? 's' : ''}):
                ₹{total.toLocaleString('en-IN')}
              </strong>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
