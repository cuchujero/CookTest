import { FC, useState, useEffect } from 'react';
import { Header } from './Header/Header';
import { Main } from './Main/Main';

export const DeliveriesPage: FC = () => {
  const [selectedDate, setSelectedDate] = useState<string>(''); 
  const [productData, setProductData] = useState([]); 
  const [ctaText, setCtaText] = useState('Confirm');
  const [alertText, setAlertText] = useState('Confirmed');

  const fetchProductData = async (selectedDate) => {
    try {
      const response = await fetch('http://localhost:3000/apiGQL/v1/products?createdAt='+selectedDate, {method: 'GET',headers: {'Content-Type': 'application/json'}});
      const responseData = await response.json(); 
      setProductData(responseData);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  useEffect(() => {
    fetchProductData('07-25');
  }, []);

  useEffect(() => {
    if (selectedDate) {
      fetchProductData(selectedDate);
    }
  }, [selectedDate]);

  const handleDateButtonClick = (date: string) => {
    setSelectedDate(date);
    if (date === '08-01') {
      setCtaText('Reschedule');
      setAlertText('Rescheduled');
    } else {
      setCtaText('Confirm');
      setAlertText('Confirmed');
    }
  };

  return (
    <>
      <Header onDateButtonClick={handleDateButtonClick}  ctaText={ctaText} alertText={alertText} />
      <Main productData={productData} selectedDate={selectedDate} ctaText={ctaText} alertText={alertText} />
    </>
  );
};
