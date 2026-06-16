import { useState } from 'react';
import ProductCard from './ProductCard';
import SingleProduct from './SingleProduct';

export default function ProductGrid() {
  const [selectedProductId, setSelectedProductId] = useState(null);

  return (
    <div>
      <h4>Results</h4>
      <p className="product-info">Check each product page for other buying options.</p>

      {selectedProductId ? (
        <SingleProduct id={selectedProductId} onBack={() => setSelectedProductId(null)} />
      ) : (
        <ProductCard onSelect={setSelectedProductId} />
      )}
    </div>
  );
}
