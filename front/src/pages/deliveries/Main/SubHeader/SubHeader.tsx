import { FC } from 'react';
import cart from '../../../../assets/cart.svg';
import './SubHeader.scss';

interface SubHeaderProps {
  ctaText: string;
  alertText: string;
  productCount: number; 
}

export const SubHeader: FC<SubHeaderProps> = ({ ctaText, alertText, productCount }) => {
  return (
    <div className="subheader-container">
      <div className="subheader page__horizontal-space">
        <h1 data-test-id="subheader-title">
          {ctaText === 'Reschedule' ? 'Reschedule your order' : 'Confirm your order'}
        </h1>
        <button className="btn-primary cta" data-test-id="subheader-cta" onClick={() => alert(alertText)}>
          <div className="cart-counter">
            <img src={cart} alt="Cart" />
            <span data-test-id="cart-counter">{productCount}</span> 
          </div>
          <span className="copy">{ctaText}</span>
        </button>
      </div>
    </div>
  );
};
