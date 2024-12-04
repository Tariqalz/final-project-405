import React from "react";
import { useTranslation } from "react-i18next";
import DashboardSection from "./DashboardSection";
import "./Dashboard.css";
import ChartComponent from "./ChartComponent";

function Dashboard() {
  const { t } = useTranslation();

  const workoutData = {
    labels: [t('benchPress'), t('incline'), t('overhead'), t('pushups')],
    datasets: [
      {
        label: t('repsCompleted'),
        data: [40, 0, 0, 0],
        backgroundColor: ["#FF6384", "#36A2EB", "#FFCE56", "#4BC0C0"],
      },
    ],
  };
  const workoutContent = (
    <div>
      <p><strong>{t('workout')}:</strong> {t('chestDay')}</p>
      <ul>
        <li>{t('benchPress')}: 40/40</li>
        <li>{t('incline')}: 0/40</li>
        <li>{t('overhead')}: 0/40</li>
        <li>{t('pushups')}: 0/40</li>
      </ul>
      <p>{t('addExercise')}: --</p>
      <ChartComponent type="bar" data={workoutData} />
      <p><strong>{t('workoutSuggestions')}:</strong> Lorem lorem lorem...</p>
      <p><strong>{t('history')}:</strong></p>
      <ul>
        <li>{t('backDay')}: {t('monday')}</li>
        <li>{t('legDay')}: {t('sunday')}</li>
        <li>{t('armsDay')}: {t('saturday')}</li>
        <li>{t('chestDay')}: {t('friday')}</li>
      </ul>
    </div>
  );

  const macrosData = {
    labels: [t('protein'), t('fat'), t('carbs')],
    datasets: [
      {
        label: t('macrosBreakdown'),
        data: [40, 30, 30],
        backgroundColor: ["#FF6384", "#36A2EB", "#FFCE56"],
      },
    ],
  };
  const macrosContent = (
    <div>
      <p><strong>{t('protein')}:</strong> 40g / 100g</p>
      <p><strong>{t('fat')}:</strong> 40g / 100g</p>
      <p><strong>{t('carbs')}:</strong> 40g / 100g</p>
      <ChartComponent type="pie" data={macrosData} />
    </div>
  );

  const caloriesData = {
    labels: [t('monday'), t('tuesday'), t('wednesday'), t('thursday'), t('friday')],
    datasets: [
      {
        label: t('caloriesIntake'),
        data: [1200, 1400, 1300, 1500, 1600],
        borderColor: "#FF6384",
        backgroundColor: "rgba(255, 99, 132, 0.2)",
      },
      {
        label: t('target'),
        data: [1500, 1500, 1500, 1500, 1500],
        borderColor: "#36A2EB",
        borderDash: [5, 5],
      },
    ],
  };
  const caloriesContent = (
    <div>
      <p><strong>{t('intake')}:</strong> 120 / 1500</p>
      <ChartComponent type="line" data={caloriesData} />
      <p><strong>{t('currentProgram')}:</strong> {t('weightLoss')}</p>
      <ul>
        <li>{t('weightGain')}: 2500cal</li>
        <li>{t('maintain')}: 2000cal</li>
        <li>{t('weightLoss')}: 1500cal</li>
        <li>{t('extremeLoss')}: 1200cal</li>
      </ul>
    </div>
  );

  const measurementsData = {
    labels: [t('weight'), t('bodyFatPercentage'), t('bmi')],
    datasets: [
      {
        label: t('current'),
        data: [81, 20, 24],
        backgroundColor: "#FF6384",
      },
      {
        label: t('goal'),
        data: [70, 15, 20],
        backgroundColor: "#36A2EB",
      },
    ],
  };
  const measurementsContent = (
    <div>
      <p><strong>{t('weight')}:</strong> 81kg ({t('goal')}: 70kg)</p>
      <p><strong>{t('bodyFatPercentage')}:</strong> 20% ({t('goal')}: 15%)</p>
      <p><strong>{t('bmi')}:</strong> 24 ({t('goal')}: 20)</p>
      <ChartComponent type="bar" data={measurementsData} />
    </div>
  );

  return (
    <div className="dashboard">
      <DashboardSection title={t('workouts')} content={workoutContent} />
      <DashboardSection title={t('macros')} content={macrosContent} />
      <DashboardSection title={t('calories')} content={caloriesContent} />
      <DashboardSection title={t('measurements')} content={measurementsContent} />
    </div>
  );
}

export default Dashboard;
