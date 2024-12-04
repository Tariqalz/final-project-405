import React from "react";
import { useTranslation } from "react-i18next"; 
import { Link } from 'react-router-dom';
import "./LoginPage.css";

function LoginPage() {
  const { t } = useTranslation(); 

  return (
    <div className="login-page">
      <h1 className="login-title">{t('signInTitle')}</h1>
      <p className="create-account">
        {t('noAccount')} <Link to="/signup">{t('createAccount')}</Link>.
      </p>
      <form className="login-form">
        <div className="form-group">
          <label htmlFor="username">{t('emailUsername')}:</label>
          <input
            type="text"
            id="username"
            name="username"
            placeholder={t('enterUsername')}
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">{t('password')}:</label>
          <input
            type="password"
            id="password"
            name="password"
            placeholder={t('enterPassword')}
          />
        </div>
        <button type="submit" className="login-button">
          {t('signIn')}
        </button>
      </form>
      <p className="forgot-password">
        <a href="/forgot-password">{t('forgotPassword')}</a>
      </p>
    </div>
  );
}

export default LoginPage;
