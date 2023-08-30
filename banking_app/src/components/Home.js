import React, { useState } from 'react';
import '../styles/home.css';

const Home = () => {
  const [balanceVisible, setBalanceVisible] = useState(false);
  const [balance, setBalance] = useState(1000);
  const [assets, setAssets] = useState([
    { id: 1, name: 'ЦФА 1', amount: 10 },
    { id: 2, name: 'ЦФА 2', amount: 20 },
  ]);

  const toggleBalance = () => {
    setBalanceVisible(!balanceVisible);
  };

  return (
    <div className="home-container">
      <h2>Добро пожаловать!</h2>
      <p>Приветствуем вас на CFA Trading App.</p>
      {balanceVisible ? (
        <>
          <p>Ваш баланс: {balance} рублей.</p>
          <ol className="assets-list">
            {assets.map(asset => (
              <li className="assets-item" key={asset.id}>{asset.name}: {asset.amount} рублей.</li>
            ))}
          </ol>
        </>
      ) : (
        <p>Нажмите, чтобы показать баланс и активы.</p>
      )}
      <button onClick={toggleBalance}>Показать/Скрыть баланс</button>
    </div>
  );
}

export default Home;
