import React from "react";
import { useTranslation } from "react-i18next"; 
import "./LandingPage.css";
import workoutIcon from "../images/workout-icon.jpeg";
import macrosIcon from "../images/macros-icon.jpeg";
import caloriesIcon from "../images/calories-icon.jpeg";
import measurementsIcon from "../images/measurements-icon.jpeg";
import progressIcon from "../images/progress-icon.jpeg";

function LandingPage() {
    const { t } = useTranslation(); 

    return (
        <div className="landing-page">
            <h1>
                {t('header')} <br /> {t('subheader')} <span className="highlight">MoveIt</span>
            </h1>
            <p>{t('description')}</p>
            <button className="get-started-btn">{t('getStarted')}</button>
            <div className="features-section">
                <h2>{t('trackYour')}</h2>
                <div className="features-icons">
                    <div className="icon">
                        <img src={workoutIcon} alt={t('workoutAlt')} />
                        <p>{t('workouts')}</p>
                    </div>
                    <div className="icon">
                        <img src={macrosIcon} alt={t('macrosAlt')} />
                        <p>{t('macros')}</p>
                    </div>
                    <div className="icon">
                        <img src={caloriesIcon} alt={t('caloriesAlt')} />
                        <p>{t('calories')}</p>
                    </div>
                    <div className="icon">
                        <img src={measurementsIcon} alt={t('measurementsAlt')} />
                        <p>{t('measurements')}</p>
                    </div>
                    <div className="icon">
                        <img src={progressIcon} alt={t('progressAlt')} />
                        <p>{t('progress')}</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default LandingPage;
