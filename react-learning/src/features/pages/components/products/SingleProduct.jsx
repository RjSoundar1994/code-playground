import CommonInfo from '../../../shared/CommonInfo';
import { useDispatch } from 'react-redux';
import { addToCart } from '../../../../hooks/storeSlice';

export default function SingleProduct({ id, onBack }) {
  const { itemLists, ipaddress } = CommonInfo();
  const dispatch = useDispatch();

  const item = itemLists?.find((i) => i.id === id);

  if (!item) {
    return (
      <div className="p-4">
        <p>Product not found.</p>
        <button className="goBack-button" onClick={onBack}>
          Go Back
        </button>
      </div>
    );
  }

  return (
    <div className="single-item d-flex">
      <div className="p-2">
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
            <button className="add-to-cart-button link-active" onClick={() => dispatch(addToCart(item))}>
              Add to Cart
            </button>
          </div>
          <div>
            <button className="goBack-button link-active" onClick={onBack}>
              Go Back
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
