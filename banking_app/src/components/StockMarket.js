import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../styles/stockMarket.css';
import StockItem from './StockItem';

const StockMarket = ({ isLoggedIn }) => {
  const [stocksData, setStocksData] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:3001/stock')
      .then(response => {
        setStocksData(response.data);
      })
      .catch(error => {
        console.error('Ошибка при получении данных:', error);
      });
  }, []);

  return (
    <div className="stock-market">
      <h2>Биржа</h2>
      {stocksData.map(stock => (
        <StockItem
          key={stock.name}
          name={stock.name}
          prices={stock.prices}
          currentPrice={stock.currentPrice}
        />
      ))}
    </div>
  );
};

export default StockMarket;
