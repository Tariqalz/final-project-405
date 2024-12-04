import React from "react";
import { useTranslation } from "react-i18next";
import "./MeasurementsPage.css";
import workoutIcon from "../images/workout-icon.jpeg";

function MeasurementsPage() {
  const { t } = useTranslation();

  const photos = [
    workoutIcon,
    workoutIcon,
    workoutIcon,
    workoutIcon,
  ];

  return (
    <div className="measurements-page">
      <h1 className="measurements-title">{t('measurements')}</h1>
      <div className="measurements-content">
        <div className="measurements-left">
          <div className="measurements-details">
            <h2>{t('weight')}</h2>
            <p>
              <strong>81kg</strong> ({t('goalWeight')}: 70kg)
            </p>
            <h3>{t('bodyFatPercentage')}:</h3>
            <p>
              <strong>20%</strong> ({t('goalBFP')}: 15%)
            </p>
            <h3>{t('bmi')}:</h3>
            <p>
              <strong>24</strong> ({t('goalBMI')}: 20)
            </p>
            <h3>{t('bodyMeasurements')}:</h3>
            <ul>
              <li>{t('waist')}: --</li>
              <li>{t('hips')}: --</li>
              <li>{t('chest')}: --</li>
              <li>{t('arms')}: --</li>
              <li>{t('thighs')}: --</li>
            </ul>
          </div>
          <div className="history">
            <h3>{t('history')}:</h3>
            <ul>
              <li>Sunday - 13/5/2024</li>
              <li>Sunday - 13/5/2024</li>
              <li>Sunday - 13/5/2024</li>
              <li>Sunday - 13/5/2024</li>
            </ul>
          </div>
        </div>

        <div className="measurements-right">
          <div className="before-after">
            <h3>{t('beforeAfter')}</h3>
            <p>- {t('placeholder')}</p>
            <p>- {t('placeholder')}</p>
          </div>
          <div className="photo-gallery">
            <h3>{t('photoProgress')}</h3>
            <div className="gallery">
              {photos.map((photo, index) => (
                <img
                  key={index}
                  src={photo}
                  alt={t('progressAlt', { index: index + 1 })}
                  className="gallery-photo"
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MeasurementsPage;
