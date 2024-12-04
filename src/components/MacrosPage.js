import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import "./MacrosPage.css";
import { searchFood } from "../fatSecretAPI";

function MacrosPage() {
  const { t } = useTranslation();
  const [query, setQuery] = useState('');
  const [foodResults, setFoodResults] = useState([]);

  const handleSearch = async () => {
    try {
      const results = await searchFood(query);
      setFoodResults(results);
    } catch (error) {
      console.error("Error fetching food data:", error);
    }
  };

  return (
    <div className="macros-page">
      <h1 className="macros-title">{t('macrosCalories')}</h1>
      <div className="macros-content">
        <div className="macros-left">
          <div className="macros-details">
            <h2>{t('foodIntake')}</h2>
            <ul>
              <li>- {t('chickenDish')}</li>
              <li>- {t('otherDishes')}</li>
              <li>- {t('ellipsis')}</li>
            </ul>
          </div>
          <div className="calories">
            <h3>{t('calories')}:</h3>
            <div className="calorie-value">
              <span>120</span>/<span>1500</span>
            </div>
          </div>
          <div className="macros-breakdown">
            <div className="macro-item">
              <h4>{t('protein')}:</h4>
              <div className="macro-graph">40g / 100g</div>
            </div>
            <div className="macro-item">
              <h4>{t('fat')}:</h4>
              <div className="macro-graph">40g / 100g</div>
            </div>
            <div className="macro-item">
              <h4>{t('carbs')}:</h4>
              <div className="macro-graph">40g / 100g</div>
            </div>
          </div>
        </div>
        <div className="macros-right">
          <div className="food-search">
            <h3>{t('food')}:</h3>
            <div className="search-bar">
              <input
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder={t('searchFood')}
              />
              <button className="search-button" onClick={handleSearch}>
                🔍
              </button>
            </div>
          </div>
          <div className="food-list">
            <ul>
              {foodResults.length > 0 ? (
                foodResults.map((food, index) => (
                  <li key={index}>
                    <strong>{food.food_name}</strong> - {food.food_description}{" "}
                    <a href={food.food_url} target="_blank" rel="noopener noreferrer">
                      {t("viewDetails")}
                    </a>
                  </li>
                ))
              ) : (
                <li>{t("noResults")}</li>
              )}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MacrosPage;
