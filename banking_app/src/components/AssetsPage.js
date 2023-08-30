import React, { useState, useEffect } from "react";
import "../styles/assetsPage.css";
import axios from "axios";

const MyAssetsPage = () => {
  const [assets, setAssets] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3001/assets")
      .then((response) => {
        setAssets(response.data);
      })
      .catch((error) => {
        console.error("Ошибка при получении данных:", error);
      });
  }, []);

  return (
    <div className="my-assets-page">
      <div className="assets">
        <div className="assets-title">Мои активы</div>
        <div className="assets-list">
          {assets.map((asset) => (
            <div key={asset.id} className="asset-row">
              <div className="asset-image">
                <img src={asset.image} alt={asset.name} />
              </div>
              <div className="asset-details">
                <div className="asset-name">{asset.name}</div>
                <div className="asset-count">{asset.count} шт.</div>
              </div>
              <div className="asset-info">
                <div className="asset-amount">Общая стоимость:</div>
                <div className="asset-value">{asset.value} рублей</div>
              </div>
              <div className="asset-sell">Продать</div>
            </div>
          ))}
        </div>
        <div className="create-asset">Создать</div>
      </div>
    </div>
  );
};

export default MyAssetsPage;
