import { FC } from 'react';
import './Header.scss';

interface HeaderProps {
  onDateButtonClick: (date: string) => void;
  ctaText: string;
  alertText: string;
}


export const Header: FC<HeaderProps> = ({ onDateButtonClick, ctaText, alertText  }) => {
  return (
    <header className="header-container">
      <div className="page__horizontal-space header">
        <div className="tabs-container">
          <div className="tabs">
            <button className="tab active" onClick={() => onDateButtonClick('07-25')}>
              <span className="date">Tuesday, July 25</span>
            </button>
            <button className="tab active"  data-test-id="second-date-button"  onClick={() => onDateButtonClick('08-01')}>
              <span className="date">Tuesday, August 01</span>
            </button>
            <button className="tab active" onClick={() => onDateButtonClick('08-08')}>
              <span className="date">Tuesday, August 08</span>
            </button>
          </div>
        </div>
        <button
          className="btn-primary btn-buy"
          data-test-id="header-cta"
          onClick={() => alert(alertText)}>
          {ctaText}
        </button>
      </div>
    </header>
  );
};