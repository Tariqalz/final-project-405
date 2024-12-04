import React from "react";
import { useTranslation } from "react-i18next";
import "./WorkoutPage.css";
import workout from "../videos/pushups.mp4";

function WorkoutPage() {
  const { t } = useTranslation();

  return (
    <div className="workout-page">
      <h1 className="workout-title">{t('workout')}</h1>
      <div className="workout-content">
        <div className="workout-left">
          <div className="workout-details">
            <h2>{t('workout')}:{t('chestDay')}</h2>
            <ul>
              <li>
                <span>{t('benchPress')}:</span>
                <input name="exercise" />
                <span>/40</span>
              </li>
              <li>
                <span>{t('incline')}:</span>
                <input name="exercise" />
                <span>/40</span>
              </li>
              <li>
                <span>{t('overhead')}:</span>
                <input name="exercise" />
                <span>/40</span>
              </li>
              <li>
                <span>{t('pushups')}:</span>
                <input name="exercise" />
                <span>/40</span>
              </li>
            </ul>
            <p>{t('addExercise')}: --</p>
          </div>

          <div className="other-workouts">
            <h3>{t('otherWorkouts')}:</h3>
            <ul>
              <li>{t('benchPress')}</li>
              <li>{t('incline')}</li>
              <li>{t('pushups')}</li>
            </ul>
          </div>
        </div>
        <div className="workout-right">
          <div className="exercise-details">
            <h2>{t('benchPress')}:</h2>
            <div className="video-section">
              <video controls>
                <source src={workout} type="video/mp4" />
                {t('videoSupport')}
              </video>
            </div>
          </div>

          <div className="instructions">
            <h3>{t('instructions')}:</h3>
            <ol>
              <li>{t('instruction1')}</li>
              <li>{t('instruction2')}</li>
            </ol>
          </div>
        </div>
      </div>
    </div>
  );
}

export default WorkoutPage;
