import { FC } from 'react';
import { SubHeader } from './SubHeader/SubHeader';
import './Main.scss';

interface MainProps {
  productData: any[];
  selectedDate: string;
  ctaText: string;
  alertText: string;
}

export const Main: FC<MainProps> = ({ productData, ctaText, alertText }) => {
  return (
    <main className="page__main">
      <SubHeader ctaText={ctaText} alertText={alertText} productCount={productData.length}/>
      <div className="products-grid page__horizontal-space page__vertical-space">
        {productData.length > 0 ? (
          productData.map((product, index) => (
            <div className="product-card" data-test-id="product-card" key={index}>
              <h2>Product {product.id}</h2>
              <p>{product.description}</p>
              <p>${product.price}</p>
              <img src={product.image} alt={product.name} />
            </div>
          ))
        ) : (
          <p>No products available for the selected date.</p>
        )}
      </div>
    </main>
  );
};
