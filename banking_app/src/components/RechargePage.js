import React, { useState } from 'react';
import '../styles/rechargePage.css';
import creditCardImage from '../images/mir.jpg';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

const RechargePage = () => {
  const [showBalance, setShowBalance] = useState(false);
  const [cardNumber, setCardNumber] = useState('');
  const [expirationDate, setExpirationDate] = useState(null);
  const [cvv, setCVV] = useState('');

  const handleToggleBalance = () => {
    setShowBalance(!showBalance);
  };

  const handleCardNumberChange = (e) => {
    const value = e.target.value;
    if (!isNaN(value) && value.length <= 16) {
      setCardNumber(value);
    }
  };

  const handleCVVChange = (e) => {
    const value = e.target.value;
    if (!isNaN(value) && value.length <= 3) {
      setCVV(value);
    }
  };

  const handleRecharge = () => {
    console.log('Recharge initiated:', {
      cardNumber,
      expirationDate,
      cvv,
    });
  };

  return (
    <div className="recharge-page">
      <h2>Пополнить баланс</h2>
      <button onClick={handleToggleBalance} className="toggle-balance-button">
        {showBalance ? 'Скрыть баланс' : 'Показать баланс'}
      </button>
      {showBalance ? (
        <p className="balance">Текущий баланс: 500 рублей.</p>
      ) : (
        <p className="balance">Текущий баланс: ****</p>
      )}
      <div className="credit-card">
        <img className="card-image" src={creditCardImage} alt="Credit Card" />
      </div>
      <div className="recharge-form">
        <label>Номер карты:</label>
        <input
          type="text"
          value={cardNumber}
          onChange={handleCardNumberChange}
          placeholder="Введите номер карты"
        />
        <label>Срок действия:</label>
        <DatePicker
          selected={expirationDate}
          onChange={(date) => setExpirationDate(date)}
          dateFormat="MM/yyyy"
          showMonthYearPicker
          placeholderText="ММ/ГГ"
        />
        <label>CVV код:</label>
        <input
          type="password"
          value={cvv}
          onChange={handleCVVChange}
          placeholder="CVV"
        />
        <button onClick={handleRecharge}>Пополнить через карту</button>
      </div>
    </div>
  );
};

export default RechargePage;
