import React from 'react';
import '../styles/stockItem.css';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const StockItem = ({ name, prices, currentPrice }) => {
  return (
    <div className="stock-item">
      <h3 className="stock-name">{name}</h3>
      <ResponsiveContainer width="100%" height={200}>
        <LineChart data={prices}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="date" />
          <YAxis />
          <Line type="monotone" dataKey="price" stroke="#f50057" dot={false} />
          <Tooltip labelFormatter={(value) => `Дата: ${value}`} formatter={(value) => `${value}`} />
        </LineChart>
      </ResponsiveContainer>
      <div className="stock-details">
        <p className="current-price">Текущая цена: {currentPrice} рублей.</p>
        <button className="buy-button">Купить</button>
      </div>
    </div>
  );
};

export default StockItem;
