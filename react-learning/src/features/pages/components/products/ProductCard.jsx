import CommonInfo from '../../../shared/CommonInfo';
import { useDispatch } from 'react-redux';
import { addToCart } from '../../../../hooks/storeSlice';

export default function ProductCard({ onSelect }) {
  const { itemLists, ipaddress } = CommonInfo();
  const dispatch = useDispatch();

  const handleAddToCart = (item) => {
    dispatch(addToCart(item));
  };

  return (
    <div>
      <ul className="product-item-container">
        {itemLists?.length > 0 ? (
          itemLists.map((item) => (
            <li className="product-item" key={item.id}>
              <div className="product-image">
                <img
                  className="link-active"
                  src={ipaddress + item.image}
                  alt={item.name}
                  onClick={() => onSelect(item.id)}
                />
              </div>
              <h3
                className="producat-name link-active"
                onClick={() => onSelect(item.id)}
              >
                {item.name}
              </h3>
              <p className="product-price mb-0">₹{item.price.toLocaleString('en-IN')}</p>
              <p className="product-rating">
                ⭐ {item.rating} ({item.reviews.toLocaleString()} reviews)
              </p>
              <button className="add-to-cart-button" onClick={() => handleAddToCart(item)}>
                Add to Cart
              </button>
            </li>
          ))
        ) : (
          <p>No products available.</p>
        )}
      </ul>
    </div>
  );
}
